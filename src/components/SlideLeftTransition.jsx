import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import styled from 'styled-components';

export default function SlideLeftTransition({ auxKey, children }) {
  const pageMotion = {
    initial: { x: 1200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -1500, opacity: 0 },
  };

  return (
    <MotionBox
      key={auxKey}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageMotion}
    >
      {children}
    </MotionBox>
  );
}

const MotionBox = styled(motion.div)`
  position: absolute;
  width: 100%;
`;