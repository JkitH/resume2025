
import React from 'react';
import type { ExperienceEntry } from '../types';

interface ExperienceItemProps {
  experience: ExperienceEntry;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 transition-shadow duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-sky-700 mb-1">{experience.company}</h3>
      <p className="text-xl font-medium text-slate-700">{experience.role}</p>
      <p className="text-sm text-slate-500 mb-3">{experience.dates}</p>
      {experience.secondaryRole && experience.secondaryDates && (
         <>
            <p className="text-lg font-medium text-slate-600 mt-2">{experience.secondaryRole}</p>
            <p className="text-sm text-slate-500 mb-3">{experience.secondaryDates}</p>
         </>
      )}
      {experience.keywords && experience.keywords.length > 0 && (
        <div className="mb-4">
          <span className="font-semibold text-sm text-slate-600 mr-2">關鍵字:</span>
          {experience.keywords.map((keyword, index) => (
            <span key={index} className="inline-block bg-sky-100 text-sky-700 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">
              {keyword}
            </span>
          ))}
        </div>
      )}
      {experience.details.map((detail, index) => (
        <div key={index} className="mb-3 last:mb-0">
          {detail.subHeading && (
            <h4 className="text-md font-semibold text-slate-700 mt-3 mb-1">{detail.subHeading}</h4>
          )}
          <ul className="list-disc list-outside ml-5 text-slate-600 space-y-1">
            {detail.points.map((point, pIndex) => (
              <li key={pIndex} className="text-sm leading-relaxed">{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceItem;
