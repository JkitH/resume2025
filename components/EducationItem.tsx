
import React from 'react';
import type { EducationEntry } from '../types';

interface EducationItemProps {
  education: EducationEntry;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 transition-shadow duration-300 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-sky-700">{education.degree}</h3>
      <p className="text-md text-slate-700">{education.school}</p>
      <p className="text-sm text-slate-500">{education.years}</p>
    </div>
  );
};

export default EducationItem;
