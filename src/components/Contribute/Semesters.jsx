import React, { useContext } from 'react';
import PageContainer from '../PageContainer';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ContributeContext from '../../contexts/ContributeContext';
import ItemContainer from '../ItemContainer';

export default function Semesters({ setComponent }) {
  const { contribute, setContribute } = useContext(ContributeContext);

  const getSemesterList = () => [
    { name: '1º Semestre', semester: 1 },
    { name: '2º Semestre', semester: 2 },
  ];

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Semestre?</TitleText>
      </TitleContainer>
      <ItemsContainer>
        {getSemesterList().map(({ name, semester }) => (
          <ItemContainer
            key={semester}
            whileHover={{ scale: 0.95 }}
            onClick={() => {
              setContribute({
                ...contribute,
                semester,
              });
              setComponent('confirm');
            }}
          >
            {name}
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}
