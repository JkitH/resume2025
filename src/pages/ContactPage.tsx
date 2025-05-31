import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

// 引入背景圖片
import deskWorkspaceBg from '../assets/images/desk_workspace.jpeg';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative min-h-screen pb-20">
      {/* 背景圖層 */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `url(${deskWorkspaceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* 主要內容 */}
      <div className="relative z-10 container mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* 聯絡資訊 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/3"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.getInTouch')}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Mail className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">{t('contact.email')}</h3>
                      <p className="text-gray-600">lovewish2260@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <Phone className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">{t('contact.phone')}</h3>
                      <p className="text-gray-600">+1 (123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">{t('contact.socialMedia')}</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full transition-colors">
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full transition-colors">
                        <Github className="w-6 h-6" />
                      </a>
                      <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full transition-colors">
                        <Twitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* 聯絡表單 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-2/3"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.sendMessage')}</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      {t('contact.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder={t('contact.subjectPlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder={t('contact.messagePlaceholder')}
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full md:w-auto"
                    >
                      {t('contact.send')}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* 導航按鈕 */}
        <div className="flex justify-center mt-16 space-x-6">
          <Link 
            to="/projects" 
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {t('navigation.viewProjects')}
          </Link>
          <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {t('navigation.backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
