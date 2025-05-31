import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TimelineChart: React.FC = () => {
  const { t, i18n } = useTranslation();
  const controls = useAnimation();
  
  // 監聽語言變化，重新觸發動畫
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [i18n.language, controls]);

  // 職業發展時間軸數據
  const careerData = [
    {
      year: '2013',
      role: t('timeline.businessManager'),
      company: 'OnShow',
      experience: 1,
      projects: 2
    },
    {
      year: '2014',
      role: t('timeline.uxDesigner'),
      company: 'Otsuka',
      experience: 2,
      projects: 4
    },
    {
      year: '2015',
      role: t('timeline.uiEngineer'),
      company: 'Fullerton',
      experience: 3,
      projects: 6
    },
    {
      year: '2016',
      role: t('timeline.productManager'),
      company: 'Fullerton',
      experience: 4,
      projects: 8
    },
    {
      year: '2017',
      role: t('timeline.productManager'),
      company: 'ETtoday',
      experience: 5,
      projects: 12
    },
    {
      year: '2019',
      role: t('timeline.uxDirector'),
      company: 'Jia-Xin',
      experience: 7,
      projects: 18
    },
    {
      year: '2022',
      role: t('timeline.seniorPM'),
      company: 'VOCO',
      experience: 10,
      projects: 25
    }
  ];

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
    >
      <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">{t('timeline.title')}</h3>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={careerData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip 
              formatter={(value, name) => {
                if (name === t('timeline.experience')) {
                  return [`${value} ${t('timeline.years')}`, name];
                }
                return [value, name];
              }}
              labelFormatter={(label) => {
                const item = careerData.find(d => d.year === label);
                return `${item?.year}: ${item?.role} @ ${item?.company}`;
              }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="experience"
              name={t('timeline.experience')}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="projects"
              name={t('timeline.projects')}
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <p className="text-center mt-6 text-sm text-gray-600">{t('timeline.description')}</p>
    </motion.div>
  );
};

export default TimelineChart;
