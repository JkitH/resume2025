
import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto max-w-4xl px-6 md:px-0">
        <div className="flex items-center mb-6">
          {icon && <div className="mr-3">{icon}</div>}
          <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
