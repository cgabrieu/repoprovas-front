import React from 'react';
import PageContainer from '../PageContainer';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ItemContainer from '../ItemContainer';
import SearchInfoContainer from '../SearchInfoContainer';

export default function TestType({ searchInfo, setComponent }) {

  const getTestsList = () => [
    { name: 'Prova 1', type: 'P1' },
    { name: 'Prova 2', type: 'P2' },
    { name: 'Prova 3', type: 'P3' },
    { name: 'Prova Final', type: 'PF' },
    { name: '2ª Chamada', type: '2ch' },
    { name: 'Outra', type: 'Outra' },
  ];

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Encontrei isso aqui</TitleText>
        <SearchInfoContainer>{searchInfo}</SearchInfoContainer>
      </TitleContainer>
      <ItemsContainer>
        {getTestsList().map(({ name, type }) => (
          <ItemContainer
            key={type}
            whileHover={{ scale: 0.95 }}
            onClick={() => {
            }}
          >
            {name}
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}

