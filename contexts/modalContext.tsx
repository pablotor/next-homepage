import { ReactElement, useMemo, useState } from 'react';
import { ModalContext } from '../hooks/useModal';
import Modal from '../components/modal';

// This is clearly overkill. It aims to show a nice way to handle app modals
const ModalContextContainer = ({ children }: { children: ReactElement | ReactElement[] }) => {
  const [content, setContent] = useState<ReactElement | null>(null);
  const [open, setOpen] = useState(false);

  const setModal = (
    modalContent: ReactElement,
  ) => {
    setContent(modalContent);
    setOpen(true);
  };

  const onClose = () => setOpen(false);

  const value = useMemo(() => ({ setModal, onClose }), []);

  return (
    <ModalContext.Provider value={value}>
      <Modal
        content={content}
        isOpen={open}
        onClose={onClose}
      />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextContainer;
