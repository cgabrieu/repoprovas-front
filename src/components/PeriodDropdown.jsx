import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import styled from 'styled-components';

const showMenu = {
  enter: {
    opacity: 1,
    display: 'block',
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const PeriodDropdown = ({
  period,
  setPeriod,
  showDropdown,
  setShowDropdown,
}) => (
  <Container
    onHoverStart={() => setShowDropdown(true)}
    onClick={() => setShowDropdown(true)}
    onHoverEnd={() => setShowDropdown(false)}
  >
    <span className="cursor-pointer">
      {period ? `${period}º Período` : 'Selecione o período'}
    </span>
    <Select
      variants={showMenu}
      initial="exit"
      animate={showDropdown ? 'enter' : 'exit'}
    >
      <Option whileHover={{ color: '#62af8a' }} onClick={() => setPeriod(1)}>
        1º Período
      </Option>
      <Option whileHover={{ color: '#62af8a' }} onClick={() => setPeriod(2)}>
        2º Período
      </Option>
      <Option whileHover={{ color: '#62af8a' }} onClick={() => setPeriod(3)}>
        3º Período
      </Option>
      <Option whileHover={{ color: '#62af8a' }} onClick={() => setPeriod(4)}>
        4º Período
      </Option>
      <Option whileHover={{ color: '#62af8a' }} onClick={() => setPeriod(5)}>
        5º Período
      </Option>
      <Option whileHover={{ color: '#62af8a' }} onClick={() => setPeriod(6)}>
        6º Período
      </Option>
      <Option whileHover={{ color: '#62af8a' }} onClick={() => setPeriod(7)}>
        7º Período
      </Option>
      <Option whileHover={{ color: '#62af8a' }} onClick={() => setPeriod(8)}>
        8º Período
      </Option>
      <Option whileHover={{ color: '#62af8a' }} onClick={() => setPeriod(9)}>
        9º Período
      </Option>
      <Option whileHover={{ color: '#62af8a' }} onClick={() => setPeriod(10)}>
        10º Período
      </Option>
    </Select>
  </Container>
);

export default PeriodDropdown;

const Option = styled(motion.li)`
  background-color: #fffaef;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled(motion.ul)`
  position: absolute;
  width: 120px;
`;

const Container = styled(motion.div)`
  background-color: #fffaef;
  width: 120px;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;
