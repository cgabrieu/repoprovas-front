import React, { useContext } from 'react';
import PageContainer from '../PageContainer';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ContributeContext from '../../contexts/ContributeContext';
import ItemContainer from '../ItemContainer';

export default function Years({ setComponent }) {
  const { contribute, setContribute } = useContext(ContributeContext);

  function getYearsList() {
    const currentYear = new Date().getFullYear() + 1;
    return Array.from({length: currentYear - 2015}, (v, k) => k + 2015);
  }

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Ano?</TitleText>
      </TitleContainer>
      <ItemsContainer>
        {getYearsList().map((year) => (
          <ItemContainer
            key={year}
            whileHover={{ scale: 0.95 }}
            onClick={() => {
              setContribute({
                ...contribute,
                year,
              });
              setComponent('semesters');
            }}
          >
            {year}
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}
