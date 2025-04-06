import React from 'react';

const ResearchPage: React.FC = () => {
  return (
    <div className="brain-container py-12">
      <h1 className="text-3xl font-semibold text-brain-dark-gray mb-6">Research</h1>
      <p className="text-gray-600 mb-4">
        NeuralScan is built on cutting-edge AI research in medical imaging. Below are some key areas of focus:
      </p>
      <h2 className="text-xl font-medium text-brain-dark-gray mb-4">Key Research Areas</h2>
      <ul className="list-disc pl-5 mb-6">
        <li>AI-powered brain tumor detection algorithms.</li>
        <li>Integration of MRI data with deep learning models.</li>
        <li>Real-time analysis for clinical applications.</li>
      </ul>
      <h2 className="text-xl font-medium text-brain-dark-gray mb-4">Publications</h2>
      <p className="text-gray-600 mb-6">
        Explore our published papers and datasets:
      </p>
      <ul className="list-disc pl-5 mb-6">
        <li><a href="#" className="text-brain-blue hover:text-brain-dark-blue transition-colors">Paper: AI in Medical Imaging</a></li>
        <li><a href="#" className="text-brain-blue hover:text-brain-dark-blue transition-colors">Dataset: Brain MRI Collection</a></li>
      </ul>
      <a href="/" className="text-sm text-gray-600 hover:text-brain-blue transition-colors">
        Back to Home
      </a>
    </div>
  );
};

export default ResearchPage;