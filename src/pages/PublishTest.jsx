import React, { useState, useEffect } from 'react';
import { ComponentTransitionList, Presets } from 'react-component-transition';
import styled from 'styled-components';
import PageContainer from '../components/PageContainer';
import { getCourses } from '../services/api/api';

export default function PublishTest() {
  const [currentList, setCurrentList] = useState('courses');
  const [coursesList, setCoursesList] = useState([]);
  const [classesList, setClassesList] = useState([]);

  useEffect(() => {
    if (currentList === 'courses')
      getCourses().then((res) => {
        setCoursesList(res.data);
      });
    else if (currentList === 'classes')
      setClassesList([
        { id: 1, name: 'Uma' },
        { id: 2, name: 'Duas' },
        { id: 3, name: 'Três' },
      ]);
  }, [currentList]);

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Curso?</TitleText>
        <AddSomethingButton>Não encontrou? Adicione aqui</AddSomethingButton>
      </TitleContainer>
      <ItemsContainer>
        <ComponentTransitionList>
          {currentList === 'courses' &&
            coursesList.map(({ id, name }) => (
              <Presets.TransitionSlideRight key={id}>
                <ItemContainer onClick={() => setCurrentList('classes')}>
                  {name}
                </ItemContainer>
              </Presets.TransitionSlideRight>
            ))}
        </ComponentTransitionList>
        <ComponentTransitionList>
          {currentList === 'classes' &&
            classesList.map(({ id, name }) => (
              <Presets.TransitionSlideUp key={id}>
                <ItemContainer onClick={() => setCurrentList('teachers')}>
                  {name}
                </ItemContainer>
              </Presets.TransitionSlideUp>
            ))}
        </ComponentTransitionList>
      </ItemsContainer>
    </PageContainer>
  );
}

const ItemsContainer = styled.div`
  margin: 0 10px;
`;

const ItemContainer = styled.div`
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
    margin: 20px 0;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const TitleText = styled.h1`
  font-size: 26px;
  text-align: center;
  color: #fffaef;
`;
