
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brain-light-gray p-6">
      <div className="w-20 h-20 rounded-full bg-brain-blue/10 flex items-center justify-center mb-6 animate-brain-pulse">
        <Brain className="w-10 h-10 text-brain-blue" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-brain-dark-gray mb-4 animate-fade-in">404</h1>
      <p className="text-xl text-gray-600 mb-8 animate-fade-in">The page you're looking for doesn't exist.</p>
      
      <button 
        onClick={() => navigate('/')}
        className="brain-button-primary flex items-center group animate-fade-in"
      >
        <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
