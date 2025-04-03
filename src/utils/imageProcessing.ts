
import { TumorDetectionResult } from '@/types';
import { toast } from 'sonner';

/**
 * Checks if the uploaded file is a valid image
 */
export const validateImage = (file: File): boolean => {
  // Check file type
  if (!file.type.startsWith('image/')) {
    toast.error('Please upload an image file');
    return false;
  }
  
  // Check file size (max 10MB)
  const maxSizeInBytes = 10 * 1024 * 1024;
  if (file.size > maxSizeInBytes) {
    toast.error('Image size should be less than 10MB');
    return false;
  }
  
  return true;
};

/**
 * Converts a File object to a base64 string
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

/**
 * Creates an Image object from a source URL
 */
export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * This would normally connect to a real AI model
 * For demo purposes, we're simulating the detection with random results
 */
export const analyzeBrainScan = async (imageData: string): Promise<TumorDetectionResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // For demo purposes, let's generate some random results
  const hasTumor = Math.random() > 0.3; // 70% chance of detecting a tumor
  
  if (!hasTumor) {
    return {
      hasTumor: false,
      confidence: 0.9 + Math.random() * 0.1, // High confidence for negative results (90-100%)
      recommendedAction: "No brain tumor detected. Recommend regular follow-up in one year."
    };
  }
  
  // If we detected a tumor, generate some details
  const tumorTypes: TumorDetectionResult['tumorType'][] = ['Glioma', 'Meningioma', 'Pituitary', 'Other'];
  const randomType = tumorTypes[Math.floor(Math.random() * tumorTypes.length)];
  
  const locations = ['Frontal lobe', 'Temporal lobe', 'Parietal lobe', 'Occipital lobe', 'Cerebellum', 'Brainstem'];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  
  // Size between 5mm and 50mm
  const tumorSize = 5 + Math.floor(Math.random() * 45);
  
  // Estimated age based on size and random factor
  const estimatedDays = Math.floor((tumorSize * 10) + (Math.random() * 100));
  
  let ageConfidence: 'Low' | 'Medium' | 'High';
  if (estimatedDays < 100) ageConfidence = 'High';
  else if (estimatedDays < 300) ageConfidence = 'Medium';
  else ageConfidence = 'Low';
  
  let ageDescription = '';
  if (estimatedDays < 90) {
    ageDescription = 'Recent development, likely within the past three months.';
  } else if (estimatedDays < 180) {
    ageDescription = 'Moderate development, likely within the past six months.';
  } else {
    ageDescription = 'Extended development, likely older than six months.';
  }
  
  let action = '';
  switch (randomType) {
    case 'Glioma':
      action = 'Immediate consultation with a neurosurgeon is recommended.';
      break;
    case 'Meningioma':
      action = 'Follow-up imaging in 3 months and consultation with a neurologist.';
      break;
    case 'Pituitary':
      action = 'Endocrinology evaluation and follow-up imaging in 3-6 months.';
      break;
    default:
      action = 'Consultation with a neurologist for further evaluation.';
  }
  
  return {
    hasTumor,
    confidence: 0.7 + Math.random() * 0.25, // 70-95% confidence for positive results
    tumorType: randomType,
    tumorLocation: randomLocation,
    tumorSize,
    estimatedAge: {
      estimatedDays,
      confidenceLevel: ageConfidence,
      description: ageDescription
    },
    recommendedAction: action
  };
};
