import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

export default function Backdrop({ children, onClick }) {

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
