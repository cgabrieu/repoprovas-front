import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PageContainer from '../PageContainer';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import TitleText from '../TitleText';
import ItemContainer from '../ItemContainer';
import SearchInfoContainer from '../SearchInfoContainer';
import TestContext from '../../contexts/TestContext';

const variants = {
  open: { height: 150, cursor: 'auto' },
  closed: { height: 80, cursor: 'pointer' },
};

export default function TestType({ searchInfo }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { listTests } = useContext(TestContext);

  const getFilteredList = (type) =>
    listTests.filter(
      (test) => test.type === type && test.teacher.name === searchInfo
    );

  const getTestsList = () => [
    { name: 'Prova 1', type: 'P1', list: getFilteredList('P1') },
    { name: 'Prova 2', type: 'P2', list: getFilteredList('P2') },
    { name: 'Prova 3', type: 'P3', list: getFilteredList('P3') },
    { name: 'Prova Final', type: 'PF', list: getFilteredList('PF') },
    { name: '2ª Chamada', type: '2ch', list: getFilteredList('2ch') },
    { name: 'Outras', type: 'Outra', list: getFilteredList('Outra') },
  ];

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Provas</TitleText>
        <SearchInfoContainer>{searchInfo}</SearchInfoContainer>
      </TitleContainer>
      <ItemsContainer>
        {getTestsList().filter((test) => test.list.length > 0).map(({ name, type, list }) => (
          <ItemContainer
            key={type}
            animate={openDropdown === type ? 'open' : 'closed'}
            variants={variants}
            onClick={() => {
              setOpenDropdown(type);
            }}
          >
            {name}
            {openDropdown === type && (
              <TestsItemsContainer>
                {list.map(({ id, year, semester, class: classname, link }) => (
                  <TestItem key={id}>
                    <ItemName>{`${year}.${semester} - ${classname.name}`}</ItemName>
                    <ItemLink onClick={() => { 
                      window.location = link;
                    }}
                    />
                  </TestItem>
                ))}
              </TestsItemsContainer>
            )}
          </ItemContainer>
        ))}
      </ItemsContainer>
    </PageContainer>
  );
}

const ItemLink = styled.h2`
  font-size: 22px;
  color: #656565;
  cursor: pointer;
  &:after {
    content: 'Clique aqui para baixar';
  }
  @media (max-width: 450px) {
    &:after {
      content: 'Baixar';
    }
  }
`;

const ItemName = styled.h2`
  margin-right: 10px;
`;

const TestItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TestsItemsContainer = styled.div`
  margin-top: 5px;
  height: 100%;
  width: 100%;
`;
