/* eslint-disable no-nested-ternary */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useAlert } from 'react-alert';
import { motion } from 'framer-motion/dist/framer-motion';
import ContributeContext from '../contexts/ContributeContext';
import Backdrop from './Backdrop';
import { postClasse, postCourse } from '../services/api/api';
import LoadingButton from './LoadingButton';
import PeriodDropdown from './PeriodDropdown';
import AlertContainer from './AlertContainer';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export default function Modal({ setModalOpen, title, description = null }) {
  const { contribute } = useContext(ContributeContext);
  const alert = useAlert();

  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [period, setPeriod] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (title.includes('Curso') && name.length > 2) {
      postCourse(name)
        .then(() => setModalOpen(false))
        .catch(() => alert.error(<AlertContainer>Curso já cadastrado.</AlertContainer>))
        .finally(() => setIsLoading(false));
    }
    if (title.includes('Matéria') && name.length > 2) {
      postClasse(name, period, contribute.courseId)
        .then(() => setModalOpen(false))
        .catch(() => alert.error(<AlertContainer>Matéria já cadastrada para esse curso.</AlertContainer>))
        .finally(() => setIsLoading(false));
    }
    if (title.includes('Professor') && name.length > 2) {
      postClasse(name, period, contribute.courseId)
        .then(() => setModalOpen(false))
        .catch(() => alert.error(<AlertContainer>Professor já cadastrada para esse curso.</AlertContainer>))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Backdrop onClick={() => setModalOpen(false)}>
      <Form
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        onSubmit={handleSubmit}
      >
        <Title>{title}</Title>
        {title.includes('Matéria') && <PeriodDropdown period={period} setPeriod={setPeriod} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />}
        {!description ? (
          <Input
            type='text'
            placeholder='Digite o nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
            minLength={3}
            maxLength={40}
          />
        ) : (
          <Description>{description}</Description>
        )}
        <SubmitButton type='submit' buttonColor={description ? '#C4C4C4' : '#62AF8A;'}>
          {isLoading ? <LoadingButton /> : (description ? 'Voltar para home' : 'Enviar')}
        </SubmitButton>
      </Form>
    </Backdrop>
  );
}

const SubmitButton = styled.button`
  background-color: ${({ buttonColor }) => buttonColor};
  outline: none;
  border: none;
  height: 30px;
  width: 60%;
  font-size: 22px;
  color: #303030;
  border-radius: 5px;
  cursor: pointer;
`;

const Description = styled.h2`
  font-size: 22px;
`;

const Title = styled.h1`
  font-size: 26px;
  color: #FFFAEF;
`;

const Input = styled.input`
  background-color: #FFFAEF;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  padding: 0 15px;
  font-size: 22px;
`;

const Form = styled(motion.form)`
  position: absolute;
  top: 30%;
  width: 360px;
  height: 160px;
  background-color: #303030;
  padding: 20px 20px 10px 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 375px) {
    width: 100%;
    border-radius: 0px;
  }
`;
