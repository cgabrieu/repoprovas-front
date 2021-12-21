/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Courses from '../components/Home/Courses';
import SlideLeftTransition from '../components/SlideLeftTransition';
import TestContext from '../contexts/TestContext';
import Periods from '../components/Home/Periods';
import TestType from '../components/Home/TestType';
import Classes from '../components/Home/Classes';
import TeacherOrClass from '../components/Home/TeacherOrClass';
import { getTests } from '../services/api/api';
import Teachers from '../components/Home/Teachers';

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
            <Courses
              searchInfo={searchInfo}
              setSearchInfo={setSearchInfo}
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'teacherOrClass' && (
          <SlideLeftTransition auxKey={2}>
            <TeacherOrClass
              searchInfo={searchInfo}
              setSearchInfo={setSearchInfo}
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'teachers' && (
          <SlideLeftTransition auxKey={3}>
            <Teachers
              searchInfo={searchInfo}
              setSearchInfo={setSearchInfo}
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'testType' && (
          <SlideLeftTransition auxKey={4}>
            <TestType searchInfo={searchInfo} setSearchInfo={setSearchInfo} />
          </SlideLeftTransition>
        )}
        {component === 'periods' && (
          <SlideLeftTransition auxKey={5}>
            <Periods
              searchInfo={searchInfo}
              setSearchInfo={setSearchInfo}
              setComponent={setComponent}
            />
          </SlideLeftTransition>
        )}
        {component === 'classes' && (
          <SlideLeftTransition auxKey={6}>
            <Classes searchInfo={searchInfo} />
          </SlideLeftTransition>
        )}
      </AnimatePresence>
    </TestContext.Provider>
  );
}
