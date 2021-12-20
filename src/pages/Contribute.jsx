/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Classes from '../components/Contribute/Classes';
import Courses from '../components/Contribute/Courses';
import SlideLeftTransition from '../components/SlideLeftTransition';
import ContributeContext from '../contexts/ContributeContext';

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
      </AnimatePresence>
    </ContributeContext.Provider>
  );
}
