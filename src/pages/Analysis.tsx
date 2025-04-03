
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageUploader from '@/components/ImageUploader';
import LoadingAnimation from '@/components/LoadingAnimation';
import ResultsDisplay from '@/components/ResultsDisplay';
import { AnalysisStep, TumorDetectionResult } from '@/types';
import { analyzeBrainScan } from '@/utils/imageProcessing';
import { Brain } from 'lucide-react';

const Analysis: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingSteps, setProcessingSteps] = useState<AnalysisStep[]>(initialSteps);
  const [analysisResult, setAnalysisResult] = useState<TumorDetectionResult | null>(null);
  
  const handleImageSelected = (imageData: string) => {
    setUploadedImage(imageData);
    startAnalysis(imageData);
  };
  
  const startAnalysis = async (imageData: string) => {
    setIsProcessing(true);
    setAnalysisResult(null);
    
    // Reset steps
    setProcessingSteps(initialSteps.map((step, index) => {
      if (index === 0) return { ...step, status: 'processing' };
      return step;
    }));
    
    // Simulate each step processing
    await processStep(0, 'complete');
    await processStep(1, 'processing');
    await processStep(1, 'complete');
    await processStep(2, 'processing');
    
    // Run actual analysis
    try {
      const result = await analyzeBrainScan(imageData);
      setAnalysisResult(result);
      await processStep(2, 'complete');
      await processStep(3, 'processing');
      await processStep(3, 'complete');
    } catch (error) {
      console.error('Error during analysis:', error);
      // Set the current step to error
      const currentStepIndex = processingSteps.findIndex(step => step.status === 'processing');
      if (currentStepIndex >= 0) {
        setProcessingSteps(prev => prev.map((step, i) => 
          i === currentStepIndex ? { ...step, status: 'error' } : step
        ));
      }
    } finally {
      setIsProcessing(false);
    }
  };
  
  const processStep = async (stepIndex: number, status: AnalysisStep['status']) => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        setProcessingSteps(prev => prev.map((step, i) => {
          if (i === stepIndex) {
            // If we're setting this to processing, also set a progress value
            if (status === 'processing') {
              return { ...step, status, progress: 0 };
            }
            return { ...step, status };
          }
          return step;
        }));
        
        // If we're processing, simulate progress updates
        if (status === 'processing') {
          simulateProgress(stepIndex);
        }
        
        resolve();
      }, 500);
    });
  };
  
  const simulateProgress = (stepIndex: number) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      
      setProcessingSteps(prev => prev.map((step, i) => 
        i === stepIndex ? { ...step, progress } : step
      ));
    }, 300);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        <section className="py-8">
          <div className="brain-container">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brain-blue/10 text-brain-blue mb-4">
                <Brain className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">AI Analysis</span>
              </div>
              <h1 className="section-title">Brain Tumor Analysis</h1>
              <p className="section-subtitle">
                Upload your MRI scan to detect tumors, classify types, and estimate development age.
              </p>
            </div>
            
            {!uploadedImage || (uploadedImage && !analysisResult) ? (
              <div className="max-w-4xl mx-auto">
                <ImageUploader 
                  onImageSelected={handleImageSelected}
                  isProcessing={isProcessing}
                />
                
                {isProcessing && (
                  <div className="mt-12 animate-fade-in">
                    <LoadingAnimation steps={processingSteps} />
                  </div>
                )}
              </div>
            ) : (
              analysisResult && uploadedImage && (
                <ResultsDisplay 
                  result={analysisResult}
                  originalImage={uploadedImage}
                />
              )
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const initialSteps: AnalysisStep[] = [
  {
    id: 1,
    title: "Image Preprocessing",
    description: "Enhancing image quality and normalizing for analysis",
    status: "waiting"
  },
  {
    id: 2,
    title: "Tumor Detection",
    description: "Analyzing brain scan to detect abnormal tissue patterns",
    status: "waiting"
  },
  {
    id: 3,
    title: "Classification & Measurement",
    description: "Classifying tumor type and measuring dimensions",
    status: "waiting"
  },
  {
    id: 4,
    title: "Age Estimation & Reporting",
    description: "Estimating tumor development age and generating report",
    status: "waiting"
  }
];

export default Analysis;
