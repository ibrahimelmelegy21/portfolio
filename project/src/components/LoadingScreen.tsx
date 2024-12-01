import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 dark:from-pink-900 dark:to-purple-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-pink-500 dark:border-t-pink-400 border-purple-500/30 dark:border-purple-700"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          Loading...
        </motion.h2>
      </div>
    </motion.div>
  );
};