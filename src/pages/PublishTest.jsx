import React, {  } from 'react';
import styled from 'styled-components';
import PageContainer from '../components/PageContainer';

export default function PublishTest() {

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Curso?</TitleText>
        <AddSomethingButton>
          Não encontrou? Adicione aqui
        </AddSomethingButton>
      </TitleContainer>
    </PageContainer>
  );
}

const AddSomethingButton = styled.div`
  position: absolute;
  right: 0;
  top: -2px;
  padding: 5px;
  font-size: 20px;
  background-color: #FFFAEF;
  border-radius: 5px;
  cursor: pointer;
  
`;

const TitleContainer = styled.div`
  position: relative;
  border: 1px red solid;
`;

const TitleText = styled.h1`
  font-size: 26px;
  text-align: center;
  color: #FFFAEF;
`;
