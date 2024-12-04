import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function DonationSection() {
  const pixKey = 'd5db4b3b-b2bf-43d0-ae17-be682d3a9ebe';
  const [copied, setCopied] = useState(false);

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-8 transition-colors duration-200"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Faça uma Doação</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Se você gosta do meu trabalho e quer me apoiar, considere fazer uma doação via PIX:
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={pixKey}
              readOnly
              className="flex-1 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md border dark:border-gray-600"
            />
            <motion.button
              onClick={copyPixKey}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </motion.button>
          </div>
        </div>
        <div className="w-48">
          <img
            src="/src/data/images/qrcode-pix.png"
            alt="QR Code PIX"
            className="w-full h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
}