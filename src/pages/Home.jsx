/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Courses from '../components/Home/Courses';
import SlideLeftTransition from '../components/SlideLeftTransition';
import TestContext from '../contexts/TestContext';
import Teachers from '../components/Home/Teachers';
import Years from '../components/Contribute/Years';
import TestType from '../components/Home/TestType';
import Semesters from '../components/Contribute/Semesters';
import Confirm from '../components/Contribute/Confirm';
import TeacherOrClass from '../components/Home/TeacherOrClass';
import { getTests } from '../services/api/api';

export default function Home() {
  const [component, setComponent] = useState('courses');
  const [listTests, setListTests] = useState(null);
  const [searchInfo, setSearchInfo] = useState(null);

  useEffect(() => {
    getTests().then((res) => setListTests(res.data));
  }, []);

  return (
    <TestContext.Provider value={{ listTests, setListTests }}>
      <AnimatePresence>
        {component === 'courses' && (
          <SlideLeftTransition auxKey={1}>
            <Courses setComponent={setComponent} />
          </SlideLeftTransition>
        )}
        {component === 'teacherOrClass' && (
          <SlideLeftTransition auxKey={2}>
            <TeacherOrClass setComponent={setComponent} />
          </SlideLeftTransition>
        )}
        {component === 'teachers' && (
          <SlideLeftTransition auxKey={3}>
            <Teachers
              setSearchInfo={setSearchInfo}
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'testType' && (
          <SlideLeftTransition auxKey={5}>
            <TestType searchInfo={searchInfo} setComponent={setComponent} />
          </SlideLeftTransition>
        )}
        {component === 'years' && (
          <SlideLeftTransition auxKey={6}>
            <Years setComponent={setComponent} />
          </SlideLeftTransition>
        )}
        {component === 'semesters' && (
          <SlideLeftTransition auxKey={7}>
            <Semesters setComponent={setComponent} />
          </SlideLeftTransition>
        )}
        {component === 'confirm' && (
          <SlideLeftTransition auxKey={8}>
            <Confirm setComponent={setComponent} />
          </SlideLeftTransition>
        )}
      </AnimatePresence>
    </TestContext.Provider>
  );
}
