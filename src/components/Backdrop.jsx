import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import styled from 'styled-components';

export default function Backdrop({ children, onClick }) {

  return (
    <BackdropStyled
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropStyled>
  );
}

const BackdropStyled = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);;
  z-index: 10;
`;