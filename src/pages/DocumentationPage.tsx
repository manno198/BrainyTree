import React from 'react';

const DocumentationPage: React.FC = () => {
  return (
    <div className="brain-container py-12">
      <h1 className="text-3xl font-semibold text-brain-dark-gray mb-6">Documentation</h1>
      <p className="text-gray-600 mb-4">
        Welcome to the NeuralScan documentation hub. Here you'll find comprehensive guides and resources to help you use our platform effectively.
      </p>
      <h2 className="text-xl font-medium text-brain-dark-gray mb-4">Getting Started</h2>
      <p className="text-gray-600 mb-6">
        Follow these steps to get started with NeuralScan:
      </p>
      <ol className="list-decimal pl-5 mb-6">
        <li>Create an account or log in to your existing account.</li>
        <li>Upload your MRI scans for analysis.</li>
        <li>Review the AI-generated predictions and insights.</li>
      </ol>
      <h2 className="text-xl font-medium text-brain-dark-gray mb-4">API Reference</h2>
      <p className="text-gray-600 mb-6">
        For developers, we provide a RESTful API to integrate NeuralScan into your workflows:
      </p>
      <ul className="list-disc pl-5 mb-6">
        <li><a href="#" className="text-brain-blue hover:text-brain-dark-blue transition-colors">API Documentation</a></li>
        <li><a href="#" className="text-brain-blue hover:text-brain-dark-blue transition-colors">Code Samples</a></li>
      </ul>
      <a href="/" className="text-sm text-gray-600 hover:text-brain-blue transition-colors">
        Back to Home
      </a>
    </div>
  );
};

export default DocumentationPage;