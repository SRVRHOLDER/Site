import React from 'react';
import { Eye } from 'lucide-react';
import type { Artwork } from '../types/artwork';
import { motion } from 'framer-motion';

interface ArtworkCardProps {
  artwork: Artwork;
  onView: (artwork: Artwork) => void;
}

export function ArtworkCard({ artwork, onView }: ArtworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200"
    >
      <div className="relative aspect-square">
        <img
          src={artwork.imagePath}
          alt={artwork.name}
          className="w-full h-full object-cover select-none"
          onContextMenu={(e) => e.preventDefault()}
          style={{ userSelect: 'none' }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{artwork.name}</h3>
        <motion.button
          onClick={() => onView(artwork)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-3 w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <Eye className="h-4 w-4" />
          <span>Ver Desenho</span>
        </motion.button>
      </div>
    </motion.div>
  );
}