
import React from 'react';
import { AnalysisStep } from '@/types';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface LoadingAnimationProps {
  steps: AnalysisStep[];
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ steps }) => {
  return (
    <div className="w-full max-w-md mx-auto py-8">
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div 
            key={step.id} 
            className="flex items-start animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex-shrink-0 mr-4">
              {renderStepIcon(step)}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-brain-dark-gray">{step.title}</h4>
              <p className="text-sm text-gray-500">{step.description}</p>
              
              {step.status === 'processing' && step.progress !== undefined && (
                <div className="mt-2 w-full bg-brain-gray rounded-full h-1.5">
                  <div 
                    className="bg-brain-blue h-1.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${step.progress}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderStepIcon = (step: AnalysisStep) => {
  switch (step.status) {
    case 'waiting':
      return (
        <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
      );
    case 'processing':
      return (
        <Loader2 className="w-6 h-6 text-brain-blue animate-spin" />
      );
    case 'complete':
      return (
        <CheckCircle2 className="w-6 h-6 text-green-500" />
      );
    case 'error':
      return (
        <AlertCircle className="w-6 h-6 text-red-500" />
      );
    default:
      return null;
  }
};

export default LoadingAnimation;
