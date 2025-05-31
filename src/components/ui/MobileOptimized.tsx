import React from 'react';
import { motion } from 'framer-motion';

// 行動裝置優化的觸控友好元件
const TouchFriendlyButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, children, className = '' }) => {
  return (
    <motion.button
      className={`py-3 px-5 rounded-lg text-center ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      style={{ touchAction: 'manipulation' }}
    >
      {children}
    </motion.button>
  );
};

// 行動裝置優化的卡片元件
const MobileOptimizedCard: React.FC<{
  title: string;
  content: string;
  icon?: React.ReactNode;
  className?: string;
}> = ({ title, content, icon, className = '' }) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-md p-5 ${className}`}
      whileTap={{ scale: 0.98 }}
      style={{ touchAction: 'pan-y' }}
    >
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{content}</p>
    </motion.div>
  );
};

// 行動裝置優化的滑動容器
const SwipeContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div 
      className={`overflow-x-auto pb-2 flex snap-x snap-mandatory ${className}`}
      style={{ 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {React.Children.map(children, (child) => (
        <div className="snap-start snap-always flex-shrink-0 mr-4 w-80">
          {child}
        </div>
      ))}
    </div>
  );
};

// 行動裝置優化的圖表容器
const MobileChartContainer: React.FC<{
  children: React.ReactNode;
  title: string;
  className?: string;
}> = ({ children, title, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-4 ${className}`}>
      <h3 className="text-base font-semibold mb-3 text-center">{title}</h3>
      <div className="h-60">{children}</div>
    </div>
  );
};

// 行動裝置優化的表單輸入元件
const MobileFormInput: React.FC<{
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}> = ({ label, type, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2 text-base">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
        style={{ fontSize: '16px' }} // 防止iOS自動縮放
      />
    </div>
  );
};

// 行動裝置優化的文本區域元件
const MobileTextArea: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}> = ({ label, name, value, onChange, required = false, rows = 4 }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2 text-base">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
        style={{ fontSize: '16px' }} // 防止iOS自動縮放
      ></textarea>
    </div>
  );
};

export {
  TouchFriendlyButton,
  MobileOptimizedCard,
  SwipeContainer,
  MobileChartContainer,
  MobileFormInput,
  MobileTextArea
};
