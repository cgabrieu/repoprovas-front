import React, { useState, useEffect } from 'react';
import AddHereButton from '../AddHereButton';
import PageContainer from '../PageContainer';
import TitleContainer from '../TitleContainer';
import ItemContainer from '../ItemContainer';
import ItemsContainer from '../ItemsContainer';
import TitleText from '../TitleText'

export default function Classes({ setComponent }) {
  const [classesList, setClassesList] = useState([]);

  useEffect(() => {
    setClassesList([
      { id: 1, name: 'UMA' },
      { id: 2, name: 'DUAS' },
      { id: 3, name: 'TRES' },
      { id: 4, name: 'QUATRO' },
    ]);
  }, []);

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Matéria?</TitleText>
        <AddHereButton>Não encontrou? Adicione aqui</AddHereButton>
      </TitleContainer>
      <ItemsContainer>
        {classesList.map(({ id, name }) => (
          <ItemContainer key={id} whileHover={{ scale: 0.95 }} onClick={() => setComponent('classes')}>
            {name}
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}