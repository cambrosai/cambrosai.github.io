import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              AI <span className="text-teal-600">Insights</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
              Articles
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Search and Mobile menu button */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 hover:text-teal-600 cursor-pointer transition-colors duration-200" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="text-gray-900 hover:text-teal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
                Articles
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium transition-colors duration-200">
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;