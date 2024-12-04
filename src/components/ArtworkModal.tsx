import React from 'react';
import { X } from 'lucide-react';
import type { Artwork } from '../types/artwork';
import { motion, AnimatePresence } from 'framer-motion';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  if (!artwork) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-1 transition-colors z-10"
            style={{ transform: 'translate(50%, -50%)' }}
          >
            <X className="h-6 w-6" />
          </motion.button>
          <div className="relative overflow-hidden">
            <img
              src={artwork.imagePath}
              alt={artwork.name}
              className="w-full h-auto max-h-screen object-contain"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
