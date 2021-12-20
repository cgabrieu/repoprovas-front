import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';

export default styled(motion.div)`
  font-size: 26px;
  width: 100%;
  height: 80px;
  background-color: #fffaef;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  cursor: pointer;
  @media (max-width: 450px) {
    font-size: 22px;
  }
`;
