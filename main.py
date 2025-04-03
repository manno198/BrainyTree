from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
import torch
from torchvision import transforms
from PIL import Image
import io
import os
print("Current Working Directory:", os.getcwd())
# Initialize FastAPI app
app = FastAPI()

# Define transformations
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

# Load Feature Extractor
class FeatureExtractor(torch.nn.Module):
    def __init__(self):
        super(FeatureExtractor, self).__init__()
        from torchvision.models import ResNet18_Weights

        cnn = torch.hub.load('pytorch/vision:v0.10.0', 'resnet18', weights=ResNet18_Weights.IMAGENET1K_V1)
        self.feature_extractor = torch.nn.Sequential(*list(cnn.children())[:-1])

    def forward(self, x):
        x = self.feature_extractor(x)
        return x.view(x.size(0), -1)

feature_extractor = FeatureExtractor()
feature_extractor.load_state_dict(torch.load('feature_extractor.pth', map_location='cpu'))
feature_extractor.eval()

# Load LSTM Classifier
class LSTMClassifier(torch.nn.Module):
    def __init__(self, input_size=512, hidden_size=128, num_layers=1, num_classes=2):
        super(LSTMClassifier, self).__init__()
        self.lstm = torch.nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = torch.nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        x, _ = self.lstm(x.unsqueeze(1))
        x = self.fc(x[:, -1, :])
        return x

lstm_model = LSTMClassifier()
lstm_model.load_state_dict(torch.load('lstm_model.pth', map_location='cpu'))
lstm_model.eval()

# Prediction Endpoint
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    print(f"Received file: {file.filename}")
    if not file:
        raise HTTPException(status_code=400, detail="No file uploaded")

    try:
        
        # Read and preprocess the image
        img = Image.open(io.BytesIO(await file.read())).convert("RGB")
        img_tensor = transform(img).unsqueeze(0)

        # Extract features using CNN
        with torch.no_grad():
            features = feature_extractor(img_tensor)

        # Pass features through LSTM classifier
        with torch.no_grad():
            output = lstm_model(features)
            _, predicted = torch.max(output, 1)

        labels = {0: "Brain Tumor", 1: "Healthy"}
        prediction = labels[predicted.item()]

        return JSONResponse(content={"prediction": prediction})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)







