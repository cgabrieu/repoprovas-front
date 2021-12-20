import React, { useContext } from 'react';
import styled from 'styled-components';
import PageContainer from '../PageContainer';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ContributeContext from '../../contexts/ContributeContext';
import ItemContainer from '../ItemContainer';

export default function Confirm() {
  const { contribute } = useContext(ContributeContext);

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Confirma aí e manda pra gente</TitleText>
      </TitleContainer>
      <ItemsContainer>
        <ConfirmContainer>
          <InfoContainer>
            <p>{contribute.names.course}</p>
            <p>{`${contribute.names.class} - ${contribute.names.teacher}`}</p>
            <p>{`${contribute.names.type} - ${contribute.year}.${contribute.semester}`}</p>
          </InfoContainer>
          <ConfirmButton>Enviar</ConfirmButton>
        </ConfirmContainer>
      </ItemsContainer>
    </PageContainer>
  );
}

const InfoContainer = styled.div`
  width: 100%;
  font-size: 26px;
`;

const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFAEF;
  border-radius: 5px;
  padding: 17px;
`;

const ConfirmButton = styled.button`
  background-color: #62AF8A;
  width: 220px;
  outline: none;
  border: none;
  height: 30px;
  font-size: 22px;
  color: #303030;
  border-radius: 5px;
  cursor: pointer;
`;