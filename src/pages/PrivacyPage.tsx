import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="brain-container py-12">
      <h1 className="text-3xl font-semibold text-brain-dark-gray mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">
        At NeuralScan, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your data.
      </p>
      <h2 className="text-xl font-medium text-brain-dark-gray mb-4">What Data We Collect</h2>
      <ul className="list-disc pl-5 mb-6">
        <li>No personal data is stored on our servers.</li>
        <li>Uploaded MRI images are processed temporarily and deleted immediately after prediction.</li>
      </ul>
      <h2 className="text-xl font-medium text-brain-dark-gray mb-4">Data Security</h2>
      <p className="text-gray-600 mb-6">
        All data is encrypted during transmission using HTTPS. Your uploaded images are not shared with third parties.
      </p>
      <a href="/" className="text-sm text-gray-600 hover:text-brain-blue transition-colors">
        Back to Home
      </a>
    </div>
  );
};

export default PrivacyPage;