import React, { useContext } from 'react';
import PageContainer from '../PageContainer';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ContributeContext from '../../contexts/ContributeContext';
import ItemContainer from '../ItemContainer';

export default function TestType({ setComponent }) {
  const { contribute, setContribute } = useContext(ContributeContext);

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
        <TitleText>Qual Prova?</TitleText>
      </TitleContainer>
      <ItemsContainer>
        {getTestsList().map(({ name, type }) => (
          <ItemContainer
            key={type}
            whileHover={{ scale: 0.95 }}
            onClick={() => {
              setContribute({
                ...contribute,
                type,
                names: {
                  ...contribute.names,
                  type: name,
                }
              });
              setComponent('years');
            }}
          >
            {name}
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}
