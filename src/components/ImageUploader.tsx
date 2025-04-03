
import React, { useState, useRef } from 'react';
import { Upload, Image, X, Loader2 } from 'lucide-react';
import { validateImage, fileToBase64 } from '@/utils/imageProcessing';
import { toast } from 'sonner';

interface ImageUploaderProps {
  onImageSelected: (imageData: string) => void;
  isProcessing: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ 
  onImageSelected,
  isProcessing 
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleImageSelection = async (file: File) => {
    if (!validateImage(file)) return;
    
    try {
      const base64Image = await fileToBase64(file);
      setSelectedImage(base64Image);
      onImageSelected(base64Image);
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error processing image:', error);
      toast.error('Failed to process image');
    }
  };
  
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageSelection(file);
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleImageSelection(file);
    }
  };
  
  const clearImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      {!selectedImage ? (
        <div
          className={`upload-area ${isDragging ? 'border-brain-blue bg-brain-blue/5' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="w-16 h-16 rounded-full bg-brain-blue/10 flex items-center justify-center mb-4 animate-brain-pulse">
            <Upload className="w-8 h-8 text-brain-blue" />
          </div>
          <h3 className="text-xl font-medium text-brain-dark-gray mb-2">Upload Brain MRI Scan</h3>
          <p className="text-gray-500 text-center mb-4">
            Drag and drop your MRI image here, or click to browse
          </p>
          <p className="text-xs text-gray-400">
            Supported formats: JPG, PNG, DICOM • Max size: 10MB
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInput}
            accept="image/*"
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative border border-brain-light-blue rounded-xl overflow-hidden bg-white shadow-soft animate-scale-in">
          <div className="aspect-square max-h-[500px] overflow-hidden flex items-center justify-center bg-black">
            <img
              src={selectedImage}
              alt="Brain MRI Scan"
              className="object-contain max-w-full max-h-full"
            />
          </div>
          
          <div className="absolute top-3 right-3 flex space-x-2">
            {!isProcessing && (
              <button
                onClick={clearImage}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Remove image"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            )}
          </div>
          
          {isProcessing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="text-white flex flex-col items-center">
                <Loader2 className="w-10 h-10 animate-spin mb-2" />
                <p className="font-medium">Analyzing scan...</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
