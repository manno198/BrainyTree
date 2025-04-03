
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Brain, FileText, Upload, Activity, Users, CheckCircle } from 'lucide-react';

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <Hero />
        
        {/* How It Works Section */}
        <section className="py-20 bg-brain-light-gray">
          <div className="brain-container">
            <div className="text-center mb-16">
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">
                Our platform uses state-of-the-art deep learning models to analyze brain MRI scans and provide accurate results in seconds.
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-brain-light-blue/50 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="brain-card flex flex-col items-center text-center hover:translate-y-[-5px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-brain-blue/10 flex items-center justify-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-brain-blue flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-brain-dark-gray">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button 
                onClick={() => navigate('/analysis')}
                className="brain-button-primary"
              >
                Start Your Analysis
              </button>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20">
          <div className="brain-container">
            <div className="text-center mb-16">
              <h2 className="section-title">Why Choose NeuralScan</h2>
              <p className="section-subtitle">
                Our platform offers numerous benefits for medical professionals, researchers, and patients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="brain-card hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-brain-blue/10 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-brain-dark-gray">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-brain-blue/5">
          <div className="brain-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brain-dark-gray mb-6">
                Ready to analyze your brain scan?
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Start the analysis now and get results in seconds. No registration required.
              </p>
              <button 
                onClick={() => navigate('/analysis')}
                className="brain-button-primary text-lg px-8 py-4"
              >
                Begin Analysis
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const steps = [
  {
    icon: <Upload className="w-5 h-5" />,
    title: "Upload Scan",
    description: "Upload your MRI brain scan in seconds. We accept various image formats."
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: "AI Analysis",
    description: "Our deep learning models analyze the scan to detect tumors and patterns."
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Get Results",
    description: "View comprehensive results including tumor type, location, and age estimates."
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Take Action",
    description: "Receive actionable insights and recommendations based on the findings."
  }
];

const benefits = [
  {
    icon: <CheckCircle className="w-6 h-6 text-brain-blue" />,
    title: "High Accuracy",
    description: "Our deep learning models are trained on extensive datasets to ensure accurate tumor detection and classification."
  },
  {
    icon: <Activity className="w-6 h-6 text-brain-blue" />,
    title: "Comprehensive Analysis",
    description: "Get detailed insights including tumor type, location, size, and development age estimation."
  },
  {
    icon: <Users className="w-6 h-6 text-brain-blue" />,
    title: "For Everyone",
    description: "Designed for medical professionals, researchers, and patients who want quick and reliable analysis."
  }
];

export default Index;
