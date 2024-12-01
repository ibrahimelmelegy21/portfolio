import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useStore } from '../store/useStore';
import { translations } from '../data/translations';

export const ContactForm: React.FC = () => {
  const { language } = useStore();
  const t = translations[language];
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.currentTarget,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {t.contact.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t.contact.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? t.contact.sending : t.contact.send}
      </button>
      {status === 'success' && (
        <p className="text-green-600 dark:text-green-400 text-center">{t.contact.success}</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 dark:text-red-400 text-center">{t.contact.error}</p>
      )}
    </motion.form>
  );
};