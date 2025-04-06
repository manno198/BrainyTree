import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="brain-container py-12">
      <h1 className="text-3xl font-semibold text-brain-dark-gray mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-4">
        If you have any questions, feedback, or concerns, feel free to reach out to us:
      </p>
      <ul className="space-y-3">
        <li>Email: <a href="mailto:support@neuralscan-hub.com" className="text-brain-blue hover:text-brain-dark-blue transition-colors">support@neuralscan-hub.com</a></li>
        <li>Website: <a href="/" className="text-brain-blue hover:text-brain-dark-blue transition-colors">NeuralScan Hub</a></li>
      </ul>
      <a href="/" className="text-sm text-gray-600 hover:text-brain-blue transition-colors">
        Back to Home
      </a>
    </div>
  );
};

export default ContactPage;