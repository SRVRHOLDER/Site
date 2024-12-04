import React, { useState } from 'react';
import { ArtworkCard } from '../components/ArtworkCard';
import { ArtworkModal } from '../components/ArtworkModal';
import { DonationSection } from '../components/DonationSection';
import artworkData from '../data/desenhos.json';
import type { Artwork } from '../types/artwork';
import { motion } from 'framer-motion';

export function ArtworkPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
      >
        Minha Galeria
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {artworkData.artworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ArtworkCard
              artwork={artwork}
              onView={setSelectedArtwork}
            />
          </motion.div>
        ))}
      </div>

      <DonationSection />

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  );
}