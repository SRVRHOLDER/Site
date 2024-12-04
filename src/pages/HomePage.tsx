import React from 'react';
import { motion } from 'framer-motion';
import { ProfileImage } from '../components/ProfileImage';
import { SocialButton } from '../components/SocialButton';

export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <ProfileImage
          username="ginhots"
          fallbackImage="src/data/images/ginhots.jpeg"
        />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-6 mb-2 animate-gradient"
        >
          GinhoTS
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Artista Digital & Ilustrador de Anime
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <SocialButton href="https://www.tiktok.com/@ginhots">
            Seguir no TikTok
          </SocialButton>
        </motion.div>
      </motion.div>
    </div>
  );
}