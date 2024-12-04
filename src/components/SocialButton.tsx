import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface SocialButtonProps {
  href: string;
  children: React.ReactNode;
}

export function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-md hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-md"
    >
      <ExternalLink className="h-5 w-5" />
      <span>{children}</span>
    </motion.a>
  );
}