import React, { useState, useEffect } from 'react';
import PageContainer from '../PageContainer';
import { getCourses } from '../../services/api/api';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ItemContainer from '../ItemContainer';

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
        <TitleText>O que você cursa?</TitleText>
      </TitleContainer>
      <ItemsContainer>
        {coursesList.map(({ id, name }) => (
          <ItemContainer
            key={id}
            whileHover={{ scale: 0.95 }}
            onClick={() => {
              setComponent('teacherOrClass');
            }}
          >
            {name}
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}
