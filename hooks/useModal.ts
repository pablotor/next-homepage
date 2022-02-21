import { createContext, ReactElement, useContext } from 'react';

export const SetModalContext = createContext<(
  // eslint-disable-next-line no-unused-vars
  modalContent: ReactElement,
) => void>(
  () => { },
  );

export const useModal = () => {
  const context = useContext(SetModalContext);
  if (!context) {
    throw new Error('useSetModal must be used within the SetModalContext');
  }
  return context;
};
