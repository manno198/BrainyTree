
export interface TumorDetectionResult {
  hasTumor: boolean;
  confidence: number;
  tumorType?: TumorType;
  tumorLocation?: string;
  tumorSize?: number; // in mm
  estimatedAge?: TumorAge;
  recommendedAction?: string;
}

export type TumorType = 'Glioma' | 'Meningioma' | 'Pituitary' | 'Other' | 'Unknown';

export interface TumorAge {
  estimatedDays: number;
  confidenceLevel: 'Low' | 'Medium' | 'High';
  description: string;
}

export interface AnalysisStep {
  id: number;
  title: string;
  description: string;
  status: 'waiting' | 'processing' | 'complete' | 'error';
  progress?: number;
}
