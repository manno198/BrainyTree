import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="brain-container py-12">
      <h1 className="text-3xl font-semibold text-brain-dark-gray mb-6">Terms of Use</h1>
      <p className="text-gray-600 mb-4">
        By using NeuralScan, you agree to the following terms and conditions:
      </p>
      <h2 className="text-xl font-medium text-brain-dark-gray mb-4">Service Description</h2>
      <p className="text-gray-600 mb-6">
        NeuralScan provides an AI-powered tool for predicting brain tumors from MRI scans. The predictions are for informational purposes only and should not replace professional medical advice.
      </p>
      <h2 className="text-xl font-medium text-brain-dark-gray mb-4">Liability Disclaimer</h2>
      <p className="text-gray-600 mb-6">
        NeuralScan is not liable for any decisions made based on the predictions provided by the service. Users are encouraged to consult a licensed healthcare professional for diagnosis and treatment.
      </p>
      <a href="/" className="text-sm text-gray-600 hover:text-brain-blue transition-colors">
        Back to Home
      </a>
    </div>
  );
};

export default TermsPage;