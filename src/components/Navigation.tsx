
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="brain-container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-brain-blue rounded-lg p-1.5 transition-all duration-300 group-hover:bg-brain-dark-blue">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-semibold text-brain-dark-gray">NeuralScan</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" current={location.pathname === "/"}>Home</NavLink>
          <NavLink to="/analysis" current={location.pathname === "/analysis"}>Analysis</NavLink>
          <NavLink to="/about" current={location.pathname === "/about"}>About</NavLink>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu icon would go here */}
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  current: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, current, children }) => {
  return (
    <Link
      to={to}
      className={`relative py-2 text-brain-dark-gray transition-all duration-300 
        ${current ? 'font-medium' : 'hover:text-brain-blue'}`}
    >
      {children}
      {current && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brain-blue rounded-full animate-fade-in" />
      )}
    </Link>
  );
};

export default Navigation;
