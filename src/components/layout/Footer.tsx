import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Copyright */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">{t('footer.name')}</h2>
            <p className="text-gray-600">
              © {currentYear} {t('footer.copyright')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-0">
            <div>
              <h3 className="text-gray-800 font-semibold mb-4">{t('footer.navigation')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t('header.home')}
                  </Link>
                </li>
                <li>
                  <Link to="/experience" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t('header.experience')}
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t('header.skills')}
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t('header.projects')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t('header.contact')}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-800 font-semibold mb-4">{t('footer.connect')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:lovewish2260@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-gray-800 font-semibold mb-4">{t('footer.about')}</h3>
              <p className="text-gray-600">
                {t('footer.aboutText')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200 text-center">
          <motion.p 
            className="text-gray-600 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut" 
            }}
          >
            {t('footer.madeWith')} <Heart className="text-red-500 w-4 h-4 mx-1" /> {t('footer.and')} React
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
