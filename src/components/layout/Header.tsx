import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            {t('header.logo')}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('header.home')}
            </Link>
            <Link to="/experience" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('header.experience')}
            </Link>
            <Link to="/skills" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('header.skills')}
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('header.projects')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('header.contact')}
            </Link>
          </nav>
          
          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={toggleLangMenu}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline">{i18n.language === 'zh' ? '中文' : 'English'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  <button
                    onClick={() => changeLanguage('zh')}
                    className={`block w-full text-left px-4 py-2 hover:bg-blue-50 ${i18n.language === 'zh' ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                  >
                    中文
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`block w-full text-left px-4 py-2 hover:bg-blue-50 ${i18n.language === 'en' ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                  >
                    English
                  </button>
                </motion.div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.home')}
              </Link>
              <Link 
                to="/experience" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.experience')}
              </Link>
              <Link 
                to="/skills" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.skills')}
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.projects')}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.contact')}
              </Link>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
