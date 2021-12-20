import React from 'react';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Modal from './Modal';

export default function ModalAnimatePresence({
  title,
  description = null,
  modalOpen,
  setModalOpen,
}) {
  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter
      onExitComplete={() => null}
    >
      {modalOpen && (
        <Modal
          title={title}
          description={description}
          setModalOpen={setModalOpen}
        />
      )}
    </AnimatePresence>
  );
}
