import React, { useState, useEffect, useContext } from 'react';
import PageContainer from '../PageContainer';
import { getCourses } from '../../services/api/api';
import ItemsContainer from '../ItemsContainer';
import TitleContainer from '../TitleContainer';
import AddHereButton from '../AddHereButton';
import TitleText from '../TitleText';
import ModalAnimatePresence from '../ModalAnimatePresence';
import ContributeContext from '../../contexts/ContributeContext';
import ItemContainer from '../ItemContainer';
import LoadingMain from '../LoadingMain';

export default function Courses({ isLoading, setIsLoading, setComponent }) {
  const { contribute, setContribute } = useContext(ContributeContext);

  const [coursesList, setCoursesList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getCourses().then((res) => {
      setCoursesList(res.data);
    });
  }, [modalOpen]);

  return (
    <>
      <ModalAnimatePresence
        title="Cadastrar Curso"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <PageContainer>
        <TitleContainer>
          <TitleText>Qual Curso?</TitleText>
          <AddHereButton modalOpen={modalOpen} setModalOpen={setModalOpen}>
            Não encontrou? Adicione aqui
          </AddHereButton>
        </TitleContainer>
        {isLoading ? (
          <LoadingMain />
        ) : (
          <ItemsContainer>
            {coursesList.map(({ id, name }) => (
              <ItemContainer
                key={id}
                whileHover={{ scale: 0.95 }}
                onClick={() => {
                  setIsLoading(true);
                  setContribute({
                    ...contribute,
                    courseId: id,
                  });
                  setComponent('classes');
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
