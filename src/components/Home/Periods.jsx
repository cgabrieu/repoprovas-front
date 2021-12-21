import React, { useContext } from 'react';
import PageContainer from '../PageContainer';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ItemContainer from '../ItemContainer';
import TestContext from '../../contexts/TestContext';

export default function Periods({ searchInfo, setSearchInfo, setComponent }) {
  const { listTests } = useContext(TestContext);

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Período?</TitleText>
      </TitleContainer>
      <ItemsContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          .filter((n) => listTests.some((t) => t.class.period === n))
          .map((period) => (
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
