import React, { useContext } from 'react';
import PageContainer from '../PageContainer';
import TitleContainer from '../TitleContainer';
import ItemsContainer from '../ItemsContainer';
import TitleText from '../TitleText';
import ItemContainer from '../ItemContainer';
import TestContext from '../../contexts/TestContext';

export default function Teachers({ searchInfo, setSearchInfo, setComponent }) {
  const { listTests } = useContext(TestContext);

  function getTeachersWithSum() {
    const teachersFilteredByCourses = listTests.filter(
      (test) => test.class.courses.some(({ id }) => id === searchInfo.courseId)
    );
    const teachers = teachersFilteredByCourses.map((test) => test.teacher.name);
    const uniqueTeachers = [...new Set(teachers)];
    const countTeachers = [...uniqueTeachers].fill(0);

    teachers.forEach((t) => {
      countTeachers[uniqueTeachers.indexOf(t)] += 1;
    });

    const result = uniqueTeachers.map((_, i) => ({
      name: uniqueTeachers[i],
      count: countTeachers[i],
    }));

    return result;
  }

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Professor?</TitleText>
      </TitleContainer>
      <ItemsContainer>
        {getTeachersWithSum().map(({ name, count }) => (
          <ItemContainer
            key={name}
            whileHover={{ scale: 0.95 }}
            onClick={() => {
              setSearchInfo(name);
              setComponent('testType');
            }}
          >
            <h2>{name}</h2>
            <h4>{`${count} PROVA${count > 1 ? 'S' : ''}`}</h4>
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}
