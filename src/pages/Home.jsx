/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Courses from '../components/Home/Courses';
import SlideLeftTransition from '../components/SlideLeftTransition';
import ContributeContext from '../contexts/ContributeContext';
import Teachers from '../components/Home/Teachers';
import Years from '../components/Contribute/Years';
import TestType from '../components/Contribute/TestType';
import Semesters from '../components/Contribute/Semesters';
import Confirm from '../components/Contribute/Confirm';
import TeacherOrClass from '../components/Home/TeacherOrClass';

export default function Home() {
  const [component, setComponent] = useState('courses');
  const [isLoading, setIsLoading] = useState(false);
  const [auxSearch, setAuxSearch] = useState({
    courseId: null,
    year: null,
    period: null,
    link: null,
    teacherId: null,
    names: {
      teacher: null,
      period: null,
    }
  });

  return (
    <ContributeContext.Provider value={{ auxSearch, setAuxSearch }}>
      <AnimatePresence>
        {component === 'courses' && (
          <SlideLeftTransition auxKey={1}>
            <Courses
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'teacherOrClass' && (
          <SlideLeftTransition auxKey={2}>
            <TeacherOrClass
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'teachers' && (
          <SlideLeftTransition auxKey={3}>
            <Teachers
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'teachers' && (
          <SlideLeftTransition auxKey={4}>
            <Teachers
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'testType' && (
          <SlideLeftTransition auxKey={4}>
            <TestType
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'years' && (
          <SlideLeftTransition auxKey={5}>
            <Years
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'semesters' && (
          <SlideLeftTransition auxKey={6}>
            <Semesters
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'confirm' && (
          <SlideLeftTransition auxKey={6}>
            <Confirm 
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
      </AnimatePresence>
    </ContributeContext.Provider>
  );
}
