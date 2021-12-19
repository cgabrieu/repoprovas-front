import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
// import styled from 'styled-components';
import Classes from '../components/Contribute/Classes';
import Courses from '../components/Contribute/Courses';
import SlideLeftTransition from '../components/SlideLeftTransition';

export default function Contribute() {
  const [component, setComponent] = useState('courses');

  return (
    <AnimatePresence>
      {component === 'courses' && (
        <SlideLeftTransition key={1}>
          <Courses setComponent={setComponent} />
        </SlideLeftTransition>
      )}
      {component === 'classes' && (
        <SlideLeftTransition key={2}>
          <Classes setComponent={setComponent} />
        </SlideLeftTransition>
      )}
    </AnimatePresence>
  );
}

/* const AnimatePresenceContainer = styled(AnimatePresence)`
  position: relative;
`; */