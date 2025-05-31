import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 引入背景圖片
import techIconsBg from '../assets/images/tech_icons.jpeg';

const SkillsPage: React.FC = () => {
  const { t } = useTranslation();
  
  // 技能資料
  const skillCategories = [
    {
      id: 'product',
      title: '產品管理',
      skills: [
        { name: '產品策略', level: 95 },
        { name: '用戶增長', level: 90 },
        { name: '商業模式設計', level: 85 },
        { name: '數據分析', level: 80 },
        { name: '產品生命週期管理', level: 85 }
      ]
    },
    {
      id: 'tech',
      title: '技術領域',
      skills: [
        { name: 'AI應用開發', level: 75 },
        { name: '區塊鏈應用', level: 70 },
        { name: '3D/VR技術', level: 65 },
        { name: '跨平台整合', level: 80 },
        { name: '數據可視化', level: 75 }
      ]
    },
    {
      id: 'business',
      title: '商業發展',
      skills: [
        { name: '融資策略', level: 85 },
        { name: '跨境商業', level: 90 },
        { name: '電子商務', level: 80 },
        { name: '媒體變現', level: 85 },
        { name: '合作夥伴關係', level: 90 }
      ]
    }
  ];
  
  return (
    <div className="relative min-h-screen pb-20">
      {/* 背景圖層 */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `url(${techIconsBg})`,
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
            {t('skills.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </motion.div>
        
        {/* 技能矩陣 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* 卡片頭部 */}
              <div 
                className="h-32 bg-gradient-to-r from-blue-500 to-blue-700 p-6 flex items-center justify-center"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.8), rgba(29, 78, 216, 0.8)), url(${techIconsBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              
              {/* 技能列表 */}
              <div className="p-6">
                <ul className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-blue-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          className="bg-blue-600 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                        ></motion.div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 技能圖表 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">專業技能雷達圖</h2>
          <div className="h-80 flex items-center justify-center">
            {/* 這裡將來可以整合實際的雷達圖表元件 */}
            <div className="text-center text-gray-500">
              <p>技能雷達圖將在此處顯示</p>
              <p className="text-sm mt-2">使用Chart.js或D3.js實現</p>
            </div>
          </div>
        </motion.div>
        
        {/* 專業認證 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">專業認證與成就</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">產品管理專業認證</h3>
              <p className="text-gray-600">國際產品管理協會 (AIPMM)</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">區塊鏈應用開發認證</h3>
              <p className="text-gray-600">區塊鏈技術協會</p>
            </div>
          </div>
        </motion.div>
        
        {/* 導航按鈕 */}
        <div className="flex justify-center mt-16 space-x-6">
          <Link 
            to="/experience" 
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {t('navigation.viewExperience')}
          </Link>
          <Link 
            to="/projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {t('navigation.viewProjects')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
