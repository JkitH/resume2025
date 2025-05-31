import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 引入背景圖片
import deskWorkspaceBg from '../assets/images/desk_workspace.jpeg';

const ExperiencePage: React.FC = () => {
  const { t } = useTranslation();
  
  // 工作經歷資料
  const experiences = [
    {
      id: 'voco',
      period: '2022年9月至今',
      title: '資深產品經理',
      company: '美商 VOCO Media',
      tags: ['AI驅動媒體平台', '用戶增長策略', '跨境商業模式', '0→1產品規劃'],
      achievements: [
        '從0到1打造以「華商美國人社群」為核心的媒體平台，結合「金幣獎勵機制」與「利潤共享計畫」',
        '上線一年突破30萬用戶，活躍留存率達80%，帶動電商轉換率提升25%',
        '設計「跨平台精分互通」系統，整合媒體內容、本地商家優惠券、電商消費場景',
        '驅動用戶日均停留時長提升40%，顯著增強平台黏性與用戶價值'
      ],
      strategies: [
        '主導商業提案與產品策略，2023年Q2成功募資100萬美元（種子輪）',
        '2024年Q1完成600萬美元戰略融資，現推進Pre-A輪融資（目標估值提升300%）',
        '建立「媒體 + 電商 + 零售媒體廣告（Retail Media Network, RMN）」變現模型',
        '廣告收入逐年遞增，合作商家數半年內達到100家，建立可持續盈利模式的商業生態'
      ],
      tech: [
        '導入LLM語言模型與TTS技術，開發多語即時文字音頻交替系統',
        '推動AI內容生成與個性化推薦引擎，提升用戶體驗與內容消費效率'
      ]
    },
    // 其他工作經歷可以按照相同結構添加
  ];
  
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
            {t('experience.title')}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        {/* 經歷時間軸 */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-20"
            >
              {/* 時間點 */}
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl text-gray-600 font-medium">{exp.period}</h3>
              </div>
              
              {/* 卡片內容 */}
              <div className="bg-white rounded-xl shadow-lg p-8 ml-8 border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{exp.title}</h2>
                    <h3 className="text-xl text-blue-600">{exp.company}</h3>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* 成就區塊 */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                    用戶生態系統建構
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-blue-600 mr-2 mt-1">•</div>
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* 策略區塊 */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                    戰略融資與商業拓展
                  </h4>
                  <ul className="space-y-2">
                    {exp.strategies.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-blue-600 mr-2 mt-1">•</div>
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* 技術區塊 */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                    AI與區塊鏈技術應用
                  </h4>
                  <ul className="space-y-2">
                    {exp.tech.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-blue-600 mr-2 mt-1">•</div>
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 導航按鈕 */}
        <div className="flex justify-center mt-16 space-x-6">
          <Link 
            to="/skills" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {t('navigation.viewSkills')}
          </Link>
          <Link 
            to="/projects" 
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {t('navigation.viewProjects')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
