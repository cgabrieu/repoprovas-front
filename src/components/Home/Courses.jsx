import React, { useState, useEffect, useContext } from 'react';
import PageContainer from '../PageContainer';
import { getCourses } from '../../services/api/api';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ContributeContext from '../../contexts/ContributeContext';
import ItemContainer from '../ItemContainer';
import LoadingMain from '../LoadingMain';

export default function Courses({ isLoading, setIsLoading, setComponent }) {
  const { auxSearch, setAuxSearch } = useContext(ContributeContext);

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
      {isLoading ? (
        <LoadingMain />
        ) : (
          <ItemsContainer>
            {coursesList.map(({ id, name }) => (
              <ItemContainer
                key={id}
                whileHover={{ scale: 0.95 }}
                onClick={() => {
                  setIsLoading(true);
                  setAuxSearch({
                    ...auxSearch,
                    courseId: id,
                  })
                  setComponent('teacherOrClass');
                }}
              >
                {name}
              </ItemContainer>
            ))}
          </ItemsContainer>
        )}
    </PageContainer>
  );
}
