import React, { useContext } from 'react';
import PageContainer from '../PageContainer';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ItemContainer from '../ItemContainer';
import TestContext from '../../contexts/TestContext';

export default function Periods({ searchInfo, setSearchInfo, setComponent }) {
  const { listTests } = useContext(TestContext);

  function getPeriodsByCourse() {
    const testsByCourse = listTests.filter((t) => t.class.courses.some((c) => c.id === searchInfo.courseId))
    return [...new Set(testsByCourse.map((t) => t.class.period))];
  }

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Período?</TitleText>
      </TitleContainer>
      <ItemsContainer>
        {getPeriodsByCourse().map((period) => (
          <ItemContainer
            key={period}
            whileHover={{ scale: 0.95 }}
            onClick={() => {
                setSearchInfo({ ...searchInfo, period });
                setComponent('classes');
              }}
          >
            {`${period}º período`}
          </ItemContainer>
          ))}
      </ItemsContainer>
    </PageContainer>
  );
}
