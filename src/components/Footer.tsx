
import React from 'react';
import { Brain, Mail, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brain-light-gray border-t border-gray-200">
      <div className="brain-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-brain-blue rounded-lg p-1.5">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-brain-dark-gray">NeuralScan</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Advanced AI-powered brain tumor detection platform for medical professionals and researchers.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Mail />} />
              <SocialIcon icon={<Github />} />
              <SocialIcon icon={<Twitter />} />
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-brain-dark-gray mb-4">Platform</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/analysis">Analysis</FooterLink>
              <FooterLink to="/about">About</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-brain-dark-gray mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink to="/documentation">Documentation</FooterLink>
              <FooterLink to="/research">Research</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Use</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} NeuralScan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-brain-blue transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-brain-blue transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-brain-blue transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brain-blue hover:border-brain-blue transition-colors shadow-sm"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-gray-600 hover:text-brain-blue transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
