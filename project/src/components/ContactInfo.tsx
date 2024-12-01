import React from 'react';
import { Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useStore } from '../store/useStore';
import { translations } from '../data/translations';

export const ContactInfo: React.FC = () => {
  const { language } = useStore();
  const t = translations[language];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ibrahimelmelegy',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ibrahimelmelegy',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/ibrahimelmelegy',
      label: 'Twitter',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">{t.contact.directContact}</h3>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <a href="tel:+201024826592" className="hover:text-blue-600 dark:hover:text-blue-400">
            +20 102 482 6592
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <a href="mailto:ibrahimelmelegy@icloud.com" className="hover:text-blue-600 dark:hover:text-blue-400">
            ibrahimelmelegy@icloud.com
          </a>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">{t.contact.socialMedia}</h3>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};