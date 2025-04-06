import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div className="about-container">
      <h1 className="text-3xl font-bold text-black mb-4">About NeuralScan</h1>
      <p className="text-lg text-gray-700">
        NeuralScan Hub is an AI-powered platform designed to assist medical professionals in detecting brain tumors
        using machine learning models. Our mission is to provide accurate and efficient predictions based on MRI scans,
        enabling early diagnosis and better treatment outcomes.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Built with cutting-edge technologies like FastAPI, PyTorch, and React, NeuralScan combines advanced deep learning
        models (CNN + LSTM) with an intuitive user interface for seamless interaction.
      </p>
      <button
        className="go-back-button"
        onClick={() => navigate(-1)} // Navigate to the previous page
      >
        Go Back
      </button>
    </div>
  );
};

export default About;
