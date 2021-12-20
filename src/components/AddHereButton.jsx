import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export default function AddHereButton({ children, modalOpen, setModalOpen }) {
  return (
    <Button
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setModalOpen(!modalOpen)}
    >
      {children}
    </Button>
  );
}

const Button = styled(motion.div)`
  position: absolute;
  right: 0;
  top: -2px;
  padding: 5px;
  font-size: 20px;
  background-color: #fffaef;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  @media (max-width: 700px) {
    position: relative;
    width: 220px;
    margin: 20px 0;
  }
`;
