import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// 註冊 Chart.js 元件
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AchievementsChart: React.FC = () => {
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

  // 用戶增長數據
  const userGrowthData = {
    labels: [t('charts.before'), t('charts.after')],
    datasets: [
      {
        label: t('charts.userGrowth'),
        data: [0, 300000],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.9)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // 成本降低數據
  const costReductionData = {
    labels: [t('charts.before'), t('charts.after')],
    datasets: [
      {
        label: t('charts.costReduction'),
        data: [100, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 99, 132, 0.9)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // 關鍵績效指標數據
  const kpiData = {
    labels: [t('charts.userRetention'), t('charts.conversionRate'), t('charts.engagement')],
    datasets: [
      {
        label: t('charts.improvement'),
        data: [80, 25, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: t('charts.kpiTitle'),
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        }
      }
    },
    animation: {
      duration: 2000,
    },
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
    >
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">{t('charts.userGrowthTitle')}</h3>
        <div className="h-64 flex items-center justify-center">
          <Doughnut 
            data={userGrowthData} 
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return context.label + ': ' + context.raw;
                    }
                  }
                }
              },
              animation: {
                animateRotate: true,
                animateScale: true,
                duration: 2000,
              },
            }} 
          />
        </div>
        <p className="text-center mt-4 text-sm text-gray-600">{t('charts.userGrowthDesc')}</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">{t('charts.costReductionTitle')}</h3>
        <div className="h-64 flex items-center justify-center">
          <Doughnut 
            data={costReductionData} 
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      return context.label + ': ' + context.raw + '%';
                    }
                  }
                }
              },
              animation: {
                animateRotate: true,
                animateScale: true,
                duration: 2000,
              },
            }} 
          />
        </div>
        <p className="text-center mt-4 text-sm text-gray-600">{t('charts.costReductionDesc')}</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">{t('charts.kpiTitle')}</h3>
        <div className="h-64 flex items-center justify-center">
          <Bar data={kpiData} options={barOptions} />
        </div>
        <p className="text-center mt-4 text-sm text-gray-600">{t('charts.kpiDesc')}</p>
      </div>
    </motion.div>
  );
};

export default AchievementsChart;
