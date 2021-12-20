import React, { useContext } from 'react';
import PageContainer from '../PageContainer';
import TitleContainer from '../TitleContainer';
import ItemsContainer from '../ItemsContainer';
import TitleText from '../TitleText';
import ItemContainer from '../ItemContainer';
import TestContext from '../../contexts/TestContext';
import SearchInfoContainer from '../SearchInfoContainer';

export default function Classes({ searchInfo }) {

  const { listTests } = useContext(TestContext);

  function getClassesWithSum() {
    const teachersFilteredByCourses = listTests.filter(
      (test) => test.class.courses.some(({ id }) => id === searchInfo.courseId)
    );
    const classes = teachersFilteredByCourses.map((test) => test.class.name);
    const uniqueClasses = [... new Set(classes)];
    const countClasses = [...uniqueClasses].fill(0);

    classes.forEach((t) => {
      countClasses[uniqueClasses.indexOf(t)] += 1;
    });

    const result = uniqueClasses.map((_, i) => ({
      name: uniqueClasses[i],
      count: countClasses[i],
    }));
  
    return result;
  }

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Matéria?</TitleText>
        <SearchInfoContainer>{`${searchInfo}º período`}</SearchInfoContainer>
      </TitleContainer>
      <ItemsContainer>
        {getClassesWithSum().map(({ name, count }) => (
          <ItemContainer
            key={name}
            whileHover={{ scale: 0.95 }}
            onClick={() => {
              
            }}
          >
            <h2>{name}</h2>
            <h4>{`${count} PROVA${(count > 1) ? 'S' : ''}`}</h4>
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}
