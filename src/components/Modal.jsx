/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import Backdrop from './Backdrop';
import { postCourse } from '../services/api/api';
import {ReactComponent as LoadingIcon} from '../assets/images/loading.svg';

export default function Modal({ setModalOpen, title, description = null }) {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (title.includes('Curso') && name.length > 2) {
      postCourse(name)
        .then(() => setModalOpen(false));
    }
    if (title.includes('Matéria') && name.length > 2) {
      postCourse(name)
        .then(() => setModalOpen(false));
    }
    setIsLoading(false);
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

const LoadingButton = styled(LoadingIcon)`
  width: 30px;
  height: 30px;
`;

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
  height: 150px;
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
