import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 引入背景圖片
import deskWorkspaceBg from '../assets/images/desk_workspace.jpeg';

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  
  // 專案資料
  const projects = [
    {
      id: 'ai-media',
      title: 'AI驅動媒體平台',
      description: '從0到1打造以「華商美國人社群」為核心的媒體平台，結合「金幣獎勵機制」與「利潤共享計畫」',
      image: deskWorkspaceBg, // 實際專案中應替換為專案相關圖片
      tags: ['AI', '媒體平台', '用戶增長', '跨境商業'],
      highlights: [
        '上線一年突破30萬用戶，活躍留存率達80%',
        '帶動電商轉換率提升25%',
        '用戶日均停留時長提升40%'
      ]
    },
    {
      id: 'blockchain-loyalty',
      title: '區塊鏈忠誠度計劃',
      description: '設計「跨平台精分互通」系統，整合媒體內容、本地商家優惠券、電商消費場景',
      image: deskWorkspaceBg, // 實際專案中應替換為專案相關圖片
      tags: ['區塊鏈', '忠誠度計劃', '跨平台整合', '電子商務'],
      highlights: [
        '合作商家數半年內達到100家',
        '建立可持續盈利模式的商業生態',
        '用戶參與度提升35%'
      ]
    },
    {
      id: 'ai-content',
      title: 'AI內容生成系統',
      description: '導入LLM語言模型與TTS技術，開發多語即時文字音頻交替系統',
      image: deskWorkspaceBg, // 實際專案中應替換為專案相關圖片
      tags: ['AI', '內容生成', '多語言', '音頻技術'],
      highlights: [
        '內容生產效率提升200%',
        '用戶內容消費效率提升40%',
        '多語言支持擴展到5種語言'
      ]
    }
  ];
  
  return (
    <div className="relative min-h-screen pb-20">
      {/* 背景圖層 */}
      <div 
        className="absolute inset-0 z-0 opacity-5" 
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
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </motion.div>
        
        {/* 專案列表 */}
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-16"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* 專案圖片 */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/40"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'saturate(1.2) contrast(1.1)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-blue-600/80 text-white text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* 專案內容 */}
                <div className="w-full md:w-3/5 p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <div className="w-1 h-6 bg-blue-600 mr-3"></div>
                    主要成果
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-blue-600 mr-2 mt-1">•</div>
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    查看詳情
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 導航按鈕 */}
        <div className="flex justify-center mt-16 space-x-6">
          <Link 
            to="/skills" 
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {t('navigation.viewSkills')}
          </Link>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {t('navigation.contact')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
