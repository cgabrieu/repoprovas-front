import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Classes from '../components/Contribute/Classes';
import Courses from '../components/Contribute/Courses';
import SlideLeftTransition from '../components/SlideLeftTransition';

export default function Contribute() {
  const [component, setComponent] = useState('courses');

  return (
    <AnimatePresence>
      {component === 'courses' && (
        <SlideLeftTransition auxKey={1}>
          <Courses setComponent={setComponent} />
        </SlideLeftTransition>
      )}
      {component === 'classes' && (
        <SlideLeftTransition auxKey={2}>
          <Classes setComponent={setComponent} />
        </SlideLeftTransition>
      )}
    </AnimatePresence>
  );
}
