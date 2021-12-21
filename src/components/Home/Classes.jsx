import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PageContainer from '../PageContainer';
import TitleContainer from '../TitleContainer';
import ItemsContainer from '../ItemsContainer';
import TitleText from '../TitleText';
import ItemContainer from '../ItemContainer';
import TestContext from '../../contexts/TestContext';
import SearchInfoContainer from '../SearchInfoContainer';

const variants = {
  open: { height: 150, cursor: 'auto' },
  closed: { height: 80, cursor: 'pointer' },
};

export default function Classes({ searchInfo }) {
  const { listTests } = useContext(TestContext);

  const [openDropdown, setOpenDropdown] = useState(null);

  function getClassesWithSum() {
    const teachersFilteredByCourses = listTests.filter(
      (test) => (test.class.courses.some(({ id }) => (id === searchInfo.courseId))) && (test.class.period === searchInfo.period)
    );
    const classes = teachersFilteredByCourses.map((test) => test.class.name);
    const uniqueClasses = [... new Set(classes)];
    const countClasses = [...uniqueClasses].fill(0);

    classes.forEach((t) => {
      countClasses[uniqueClasses.indexOf(t)] += 1;
    });

    const result = uniqueClasses.map((_, i) => ({
      name: uniqueClasses[i],
      count: countClasses[i],
    }));
  
    return result;
  }

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Matéria?</TitleText>
        <SearchInfoContainer>{`${searchInfo.period}º período`}</SearchInfoContainer>
      </TitleContainer>
      <ItemsContainer>
        {getClassesWithSum().map(({ name, count }) => (
          <ItemContainer
            key={name}
            variants={variants}
            animate={openDropdown === name ? 'open' : 'closed'}
            onClick={() => {
              setOpenDropdown(name);
            }}
          >
            <h2>{name}</h2>
            {openDropdown === name && (
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
            <h4>{`${count} PROVA${(count > 1) ? 'S' : ''}`}</h4>
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TestsItemsContainer = styled.div`
  margin-top: 5px;
  height: 100%;
  width: 100%;
`;

