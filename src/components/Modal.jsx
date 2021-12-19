import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export default function Modal() {
  return (
    <Container />
  )
}



const Container = styled.div`
  max-width: 360px;
  height: 150px;
  background-color: red;
  padding: 10px 20px;
`;
