import React from 'react';
import { Navigation } from './Navigation';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navigation />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        {children}
      </motion.main>
      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-auto py-6 transition-colors duration-200">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} GinhoTS. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}