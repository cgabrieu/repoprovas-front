/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Classes from '../components/Contribute/Classes';
import Courses from '../components/Contribute/Courses';
import SlideLeftTransition from '../components/SlideLeftTransition';
import ContributeContext from '../contexts/ContributeContext';
import Teachers from '../components/Contribute/Teachers';
import Years from '../components/Contribute/Years';
import TestType from '../components/Contribute/TestType';
import Semesters from '../components/Contribute/Semesters';
import Confirm from '../components/Contribute/Confirm';

export default function Contribute() {
  const [component, setComponent] = useState('courses');
  const [isLoading, setIsLoading] = useState(false);
  const [contribute, setContribute] = useState({
    year: null,
    semester: null,
    type: null,
    link: null,
    teacherId: null,
    classId: null,
    courseId: null,
    names: {
      course: null,
      class: null,
      teacher: null,
      type: null,
    }
  });

  return (
    <ContributeContext.Provider value={{ contribute, setContribute }}>
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
        {component === 'classes' && (
          <SlideLeftTransition auxKey={2}>
            <Classes
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
            <Confirm />
          </SlideLeftTransition>
        )}
      </AnimatePresence>
    </ContributeContext.Provider>
  );
}
