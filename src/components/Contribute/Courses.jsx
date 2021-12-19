import React, { useState, useEffect } from 'react';
import PageContainer from '../PageContainer';
import { getCourses } from '../../services/api/api';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import ItemContainer from '../ItemContainer';
import AddHereButton from '../AddHereButton';
import TitleText from '../TitleText'

export default function Courses({ setComponent }) {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    getCourses().then((res) => {
      setCoursesList(res.data);
    });
  }, []);

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Curso?</TitleText>
        <AddHereButton>Não encontrou? Adicione aqui</AddHereButton>
      </TitleContainer>
      <ItemsContainer>
        {coursesList.map(({ id, name }) => (
          <ItemContainer key={id} whileHover={{ scale: 0.95 }} onClick={() => setComponent('classes')}>
            {name}
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}