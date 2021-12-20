import React, { useState, useEffect, useContext } from 'react';
import AddHereButton from '../AddHereButton';
import PageContainer from '../PageContainer';
import TitleContainer from '../TitleContainer';
import ItemsContainer from '../ItemsContainer';
import TitleText from '../TitleText';
import ModalAnimatePresence from '../ModalAnimatePresence';
import ContributeContext from '../../contexts/ContributeContext';
import { getTeachersByClass } from '../../services/api/api';
import ItemContainer from '../ItemContainer';
import LoadingMain from '../LoadingMain';

export default function Teachers({ isLoading, setIsLoading, setComponent }) {
  const { auxSearch, setAuxSearch } = useContext(ContributeContext);

  const [teachersList, setTeachersList] = useState([]);

  useEffect(() => {
    getTeachersByClass(contribute.classId)
      .then((res) => setTeachersList(res.data))
      .finally(() => setIsLoading(false));
  }, [modalOpen]);

  return (
    <PageContainer>
      <TitleContainer>
        <TitleText>Qual Professor?</TitleText>
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
                    names: {
                      ...contribute.names,
                      teacher: name,
                    }
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
  );
}
