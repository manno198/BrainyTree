
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowRight, Upload, ActivitySquare, MoveRight } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      <div className="brain-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brain-blue/10 text-brain-blue mb-8 animate-fade-in">
            <Brain className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Advanced Brain Tumor Detection</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brain-dark-gray leading-tight mb-6 animate-slide-down">
            AI-Powered Brain Tumor Analysis
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl animate-slide-up opacity-90">
            Upload your MRI scan and get instant AI analysis detecting tumors, classifying types, and estimating development age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <button 
              onClick={() => navigate('/analysis')}
              className="brain-button-primary flex items-center justify-center group"
            >
              Get Started
              <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="brain-button-secondary flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="brain-card hover:translate-y-[-5px] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-brain-blue/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brain-dark-gray">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-2/3 h-2/3 bg-brain-blue/5 rounded-full blur-3xl -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brain-light-blue/5 rounded-full blur-3xl -z-10 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

const features = [
  {
    icon: <Upload className="w-6 h-6 text-brain-blue" />,
    title: "Simple Upload",
    description: "Easily upload your MRI brain scans in various formats. Our system handles the rest."
  },
  {
    icon: <Brain className="w-6 h-6 text-brain-blue" />,
    title: "AI Detection",
    description: "State-of-the-art deep learning models detect and classify brain tumors with high accuracy."
  },
  {
    icon: <ActivitySquare className="w-6 h-6 text-brain-blue" />,
    title: "Comprehensive Analysis",
    description: "Get detailed insights including tumor type, location, size, and estimated development age."
  }
];

export default Hero;
