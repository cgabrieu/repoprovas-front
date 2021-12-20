import React, { useState, useEffect, useContext } from 'react';
import AddHereButton from '../AddHereButton';
import PageContainer from '../PageContainer';
import TitleContainer from '../TitleContainer';
import ItemsContainer from '../ItemsContainer';
import TitleText from '../TitleText';
import ModalAnimatePresence from '../ModalAnimatePresence';
import ContributeContext from '../../contexts/ContributeContext';
import { getTeachersByCourse } from '../../services/api/api';
import ItemContainer from '../ItemContainer';
import LoadingMain from '../LoadingMain';

export default function Teachers({ isLoading, setIsLoading, setComponent }) {
  const { contribute, setContribute } = useContext(ContributeContext);

  const [teachersList, setTeachersList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getTeachersByCourse(contribute.courseId)
      .then((res) => {
        console.log(res.data);
        setTeachersList(res.data);
      })
      .finally(() => setIsLoading(false));
  }, [modalOpen]);

  return (
    <>
      <ModalAnimatePresence
        title="Cadastrar Professor"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <PageContainer>
        <TitleContainer>
          <TitleText>Qual Professor?</TitleText>
          <AddHereButton modalOpen={modalOpen} setModalOpen={setModalOpen}>
            Não encontrou? Adicione aqui
          </AddHereButton>
        </TitleContainer>
        {isLoading ? (
          <LoadingMain />
        ) : (
          <ItemsContainer>
            {teachersList.map(({ id, name }) => (
              <ItemContainer
                key={id}
                whileHover={{ scale: 0.95 }}
                onClick={() => {
                  setIsLoading(true);
                  setContribute({
                    ...contribute,
                    teacherId: id,
                  });
                  setComponent('testType');
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
