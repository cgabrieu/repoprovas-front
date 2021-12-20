import React from 'react';
import PageContainer from '../PageContainer';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ItemContainer from '../ItemContainer';

export default function TeacherOrClass({ setComponent }) {
  const objects = () => [
    { name: 'Aquele professor', goTo: 'teachers' },
    { name: 'Aquela matéria', goTo: 'periods' },
  ];

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual o motivo do estresse de hoje?</TitleText>
      </TitleContainer>
      <ItemsContainer>
        {objects().map(({ name, goTo }) => (
          <ItemContainer
            key={goTo}
            whileHover={{ scale: 0.95 }}
            onClick={() => {
              setComponent(goTo);
            }}
          >
            {name}
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}
