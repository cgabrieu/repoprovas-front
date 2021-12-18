import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageContainer from '../components/PageContainer';

export default function PublishTest() {
  const [coursesList, setCoursesList] = useState(null);

  useEffect(() => {
    
  }, []);

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Curso?</TitleText>
        <AddSomethingButton>Não encontrou? Adicione aqui</AddSomethingButton>
        {!coursesList.length ? (
          <h1> Ainda não existem cursos registrados! </h1>
        ) : (
          coursesList.map((course) => (
            <ItemContainer>{course.name}</ItemContainer>
          ))
        )}
      </TitleContainer>
    </PageContainer>
  );
}

const ItemContainer = styled.div`
  font-size: 26px;
`;

const AddSomethingButton = styled.div`
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
    margin: 10px 0;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled.h1`
  font-size: 26px;
  text-align: center;
  color: #fffaef;
`;
