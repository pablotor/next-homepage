import { ReactElement, useState } from 'react';
import { SetModalContext } from '../hooks/useModal';
import Modal from '../components/modal';

const ModalContext = ({ children }: { children: ReactElement | ReactElement[] }) => {
  const [content, setContent] = useState<ReactElement | null>(null);
  const [open, setOpen] = useState(false);

  const onSetModal = (
    modalContent: ReactElement,
  ) => {
    setContent(modalContent);
    setOpen(true);
  };

  return (
    <SetModalContext.Provider value={onSetModal}>
      <Modal
        content={content}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      {children}
    </SetModalContext.Provider>
  );
};

export default ModalContext;
