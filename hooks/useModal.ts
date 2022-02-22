import { createContext, ReactElement, useContext } from 'react';

// This is clearly overkill. It aims to show a nice way to handle app modals
interface ModalContextProps {
  // eslint-disable-next-line no-unused-vars
  setModal: (modalContent: ReactElement) => void;
  onClose: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  setModal: () => {},
  onClose: () => {},
});

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within the ModalContext');
  }
  return context;
};
