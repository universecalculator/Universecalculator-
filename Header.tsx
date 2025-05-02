import { useState } from "react";
import { Calculator, MessageSquare } from "lucide-react";
import { Link } from "wouter";

interface HeaderProps {
  toggleMenu: () => void;
}

export default function Header({ toggleMenu }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            <Link href="/" className="flex items-center">
              <Calculator className="mr-2" />
              UniverseCalculator
            </Link>
          </h1>
        </div>
        
        {/* Tagline - hidden on mobile */}
        <p className="hidden md:block text-sm text-gray-600 ml-4">Your All-in-One Calculation Hub</p>
        
        {/* Navigation */}
        <nav className="flex items-center">
          <Link href="/" className="hidden md:block mr-6 text-gray-700 hover:text-primary">Home</Link>
          
          {/* Feedback Button */}
          <Link href="/feedback" className="hidden md:flex items-center mr-6 px-4 py-1.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
            <MessageSquare className="w-4 h-4 mr-1" />
            Feedback
          </Link>
          
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none" 
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
