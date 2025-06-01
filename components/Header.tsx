
import React from 'react';
import type { ContactInfo } from '../types';
import { MailIcon, PhoneIcon } from './Icons';

interface HeaderProps {
  contact: ContactInfo;
}

const Header: React.FC<HeaderProps> = ({ contact }) => {
  return (
    <header className="bg-slate-800 text-white p-6 md:p-10 shadow-lg">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{contact.name}</h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-4">{contact.title}</p>
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <a href={`mailto:${contact.email}`} className="flex items-center text-slate-300 hover:text-sky-400 transition-colors duration-300">
            <MailIcon />
            <span>{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center text-slate-300 hover:text-sky-400 transition-colors duration-300">
            <PhoneIcon />
            <span>{contact.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
