import React, { useState, useEffect, useContext } from 'react';
import AddHereButton from '../AddHereButton';
import PageContainer from '../PageContainer';
import TitleContainer from '../TitleContainer';
import ItemsContainer from '../ItemsContainer';
import TitleText from '../TitleText';
import ModalAnimatePresence from '../ModalAnimatePresence';
import ContributeContext from '../../contexts/ContributeContext';
import { getClassesByCourse } from '../../services/api/api';
import ItemContainer from '../ItemContainer';
import LoadingMain from '../LoadingMain';

export default function Classes({ isLoading, setIsLoading, setComponent }) {
  const { contribute, setContribute } = useContext(ContributeContext);

  const [classesList, setClassesList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getClassesByCourse(contribute.courseId)
      .then((res) => setClassesList(res.data))
      .finally(() => setIsLoading(false));
  }, [modalOpen]);

  return (
    <>
      <ModalAnimatePresence
        title="Cadastrar Matéria"
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
        {isLoading ? (
          <LoadingMain />
        ) : (
          <ItemsContainer>
            {classesList.map(({ id, name }) => (
              <ItemContainer
                key={id}
                whileHover={{ scale: 0.95 }}
                onClick={() => {
                  setIsLoading(true);
                  setContribute({
                    ...contribute,
                    classId: id,
                    names: {
                      ...contribute.names,
                      class: name,
                    }
                  });
                  setComponent('teachers');
                }}
              >
                {name}
              </ItemContainer>
            ))}
          </ItemsContainer>
        )}
      </PageContainer>
    </>
  );
}
