import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// 引入背景圖片
import techIconsBg from '../assets/images/tech_icons.jpeg';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative min-h-screen">
      {/* 背景圖層 */}
      <div 
        className="absolute inset-0 z-0 opacity-15" 
        style={{
          backgroundImage: `url(${techIconsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* 主要內容 */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* 左側文字內容 */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-blue-600 font-medium mb-4">{t('home.greeting')}</p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                {t('home.name')}
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-blue-600 mb-8">
                {t('home.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                {t('home.summary')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/experience" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
                >
                  {t('home.learnMore')}
                </Link>
                <a 
                  href="#" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {t('home.downloadResume')}
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* 右側視覺元素 - 使用科技圖標作為視覺焦點 */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/40"
                  style={{
                    backgroundImage: `url(${techIconsBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'saturate(1.2) contrast(1.1)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xl font-medium">{t('home.specialization')}</p>
                </div>
              </div>
              
              {/* 浮動元素 */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut" 
                }}
              >
                <div className="text-blue-600 font-bold text-lg">AI</div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4"
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="text-blue-600 font-bold text-lg">UX</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* 向下滾動指示器 */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
        >
          <ArrowDown className="text-blue-600 w-8 h-8" />
        </motion.div>
      </div>
      
      {/* 教育背景區塊 */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.education')}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800">{t('home.university')}</h3>
              <p className="text-gray-600">{t('home.degree')} (2008-2012)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
