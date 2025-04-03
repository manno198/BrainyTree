
import React, { useEffect } from 'react';
import { TumorDetectionResult } from '@/types';
import { AlertCircle, Clock, MapPin, Ruler, Activity, Brain, CheckCircle2, MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ResultsDisplayProps {
  result: TumorDetectionResult;
  originalImage: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, originalImage }) => {
  const navigate = useNavigate();
  
  // Add entrance animations
  useEffect(() => {
    const animateEntrance = () => {
      const elements = document.querySelectorAll('.result-card');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-scale-in');
        }, index * 100);
      });
    };
    
    animateEntrance();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex flex-col-reverse lg:flex-row gap-8 items-start">
        {/* Results Summary */}
        <div className="flex-1 w-full">
          <div className="mb-6 flex items-center">
            {result.hasTumor ? (
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-50 text-red-500 mb-2 animate-fade-in">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Tumor Detected</span>
              </div>
            ) : (
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-50 text-green-500 mb-2 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">No Tumor Detected</span>
              </div>
            )}
            
            <div className="ml-auto">
              <span className="text-sm text-gray-500">Confidence</span>
              <div className="flex items-center">
                <div className="w-24 bg-brain-gray rounded-full h-1.5 mr-2">
                  <div 
                    className={`h-1.5 rounded-full ${result.hasTumor ? 'bg-red-500' : 'bg-green-500'}`}
                    style={{ width: `${result.confidence * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{Math.round(result.confidence * 100)}%</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {result.hasTumor && (
              <>
                {/* Tumor Type */}
                <div className="brain-card result-card opacity-0">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-brain-blue/10 flex items-center justify-center mr-4">
                      <Brain className="w-5 h-5 text-brain-blue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Tumor Type</h3>
                      <p className="text-xl font-semibold text-brain-dark-gray">{result.tumorType}</p>
                    </div>
                  </div>
                </div>
                
                {/* Tumor Location */}
                <div className="brain-card result-card opacity-0">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-brain-blue/10 flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-brain-blue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
                      <p className="text-xl font-semibold text-brain-dark-gray">{result.tumorLocation}</p>
                    </div>
                  </div>
                </div>
                
                {/* Tumor Size */}
                <div className="brain-card result-card opacity-0">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-brain-blue/10 flex items-center justify-center mr-4">
                      <Ruler className="w-5 h-5 text-brain-blue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Size</h3>
                      <p className="text-xl font-semibold text-brain-dark-gray">{result.tumorSize} mm</p>
                    </div>
                  </div>
                </div>
                
                {/* Estimated Age */}
                <div className="brain-card result-card opacity-0">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-brain-blue/10 flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-brain-blue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Estimated Age</h3>
                      <p className="text-xl font-semibold text-brain-dark-gray">
                        ~{Math.round(result.estimatedAge?.estimatedDays || 0) / 30} months
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Confidence: {result.estimatedAge?.confidenceLevel}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Action Recommendation */}
          <div className="brain-card result-card opacity-0 mb-6">
            <h3 className="text-lg font-semibold text-brain-dark-gray mb-2 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-brain-blue" />
              Recommendation
            </h3>
            <p className="text-gray-700">{result.recommendedAction}</p>
          </div>
          
          {result.hasTumor && result.estimatedAge && (
            <div className="brain-card result-card opacity-0">
              <h3 className="text-lg font-semibold text-brain-dark-gray mb-2 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-brain-blue" />
                Development Timeline
              </h3>
              <p className="text-gray-700 mb-4">{result.estimatedAge.description}</p>
              <div className="relative h-2 bg-brain-gray rounded-full overflow-hidden mb-1">
                <div className="absolute left-0 top-0 h-full bg-brain-blue rounded-full" style={{ width: `${Math.min(100, (result.estimatedAge.estimatedDays / 365) * 100)}%` }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Recent</span>
                <span>3 months</span>
                <span>6 months</span>
                <span>1 year+</span>
              </div>
            </div>
          )}
          
          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <button className="brain-button-primary flex items-center justify-center group">
              Download Report
              <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/')}
              className="brain-button-secondary flex items-center justify-center"
            >
              Start New Analysis
            </button>
          </div>
        </div>
        
        {/* Original Image */}
        <div className="w-full lg:w-2/5 sticky top-24">
          <div className="brain-card overflow-hidden animate-scale-in">
            <h3 className="text-lg font-semibold text-brain-dark-gray mb-3">Brain MRI Scan</h3>
            <div className="aspect-square max-h-[300px] overflow-hidden rounded-lg border border-brain-gray">
              <img
                src={originalImage}
                alt="Original Brain MRI Scan"
                className="object-contain w-full h-full bg-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
