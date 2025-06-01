
import React from 'react';
import type { ProjectEntry } from '../types';
import { LinkIcon } from './Icons';

interface ProjectItemProps {
  project: ProjectEntry;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 transition-shadow duration-300 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-sky-700 mb-1">{project.name}</h3>
      <p className="text-md font-medium text-slate-700">{project.roleOrType}</p>
      <p className="text-sm text-slate-500 mb-3">{project.dates}</p>
      
      {project.keywords && project.keywords.length > 0 && (
        <div className="mb-3">
          {project.keywords.map((keyword, index) => (
            <span key={index} className="inline-block bg-teal-100 text-teal-700 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">
              {keyword}
            </span>
          ))}
        </div>
      )}
      
      <p className="text-sm text-slate-600 mb-3 leading-relaxed">{project.description}</p>
      
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sm text-sky-600 hover:text-sky-800 hover:underline transition-colors duration-300"
        >
          {project.linkText || '查看詳情 (View Details)'}
          <LinkIcon className="w-4 h-4 ml-1" />
        </a>
      )}
      {!project.link && project.linkText && (
         <p className="text-sm text-slate-500">{project.linkText}</p>
      )}
    </div>
  );
};

export default ProjectItem;
