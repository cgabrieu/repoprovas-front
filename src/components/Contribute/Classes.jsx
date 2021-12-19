import React, { useState, useEffect } from 'react';
import AddHereButton from '../AddHereButton';
import PageContainer from '../PageContainer';
import TitleContainer from '../TitleContainer';
import ItemContainer from '../ItemContainer';
import ItemsContainer from '../ItemsContainer';
import TitleText from '../TitleText';
import ModalAnimatePresence from '../ModalAnimatePresence';

export default function Classes({ setComponent }) {
  const [classesList, setClassesList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setClassesList([
      { id: 1, name: 'UMA' },
      { id: 2, name: 'DUAS' },
      { id: 3, name: 'TRES' },
      { id: 4, name: 'QUATRO' },
    ]);
  }, [modalOpen]);

  return (
    <>
      <ModalAnimatePresence
        title='Cadastrar Matéria'
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <PageContainer>
        <TitleContainer>
          <TitleText>Qual Matéria?</TitleText>
          <AddHereButton modalOpen={modalOpen} setModalOpen={setModalOpen}>
            Não encontrou? Adicione aqui
          </AddHereButton>
        </TitleContainer>
        <ItemsContainer>
          {classesList.map(({ id, name }) => (
            <ItemContainer
              key={id}
              whileHover={{ scale: 0.95 }}
              onClick={() => setComponent('classes')}
            >
              {name}
            </ItemContainer>
          ))}
        </ItemsContainer>
      </PageContainer>
    </>
  );
}
