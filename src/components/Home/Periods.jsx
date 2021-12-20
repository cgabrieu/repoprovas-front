import React from 'react';
import PageContainer from '../PageContainer';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ItemContainer from '../ItemContainer';

export default function Periods({ searchInfo, setSearchInfo, setComponent }) {

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Período?</TitleText>
      </TitleContainer>
      <ItemsContainer>
        {[1,2,3,4,5,6,7,8,9,10].map((period) => (
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
