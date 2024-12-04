import React from 'react';
import { motion } from 'framer-motion';
import { useTikTokProfile } from '../hooks/useTikTokProfile';

interface ProfileImageProps {
  username: string;
  fallbackImage: string;
}

export function ProfileImage({ username, fallbackImage }: ProfileImageProps) {
  const { loading, error } = useTikTokProfile(username);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative w-32 h-32 md:w-40 md:h-40 mx-auto"
    >
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={fallbackImage}
          alt={`${username} Profile`}
          className="rounded-full w-full h-full object-cover border-4 border-indigo-600 shadow-lg transition-opacity duration-300"
          style={{ opacity: loading ? 0.7 : 1 }}
          draggable={false}
        />
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-full"
          >
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-indigo-600 border-t-transparent"></div>
          </motion.div>
        )}
      </motion.div>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-sm py-1 px-2 rounded-b-lg opacity-75"
        >
          Erro ao carregar imagem
        </motion.div>
      )}
    </motion.div>
  );
}