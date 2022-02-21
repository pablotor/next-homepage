import { createContext, ReactElement, useContext } from 'react';

export const SetModalContext = createContext<(
  // eslint-disable-next-line no-unused-vars
  content: ReactElement,
) => void>(
  () => { },
  );

export const useNotification = () => {
  const context = useContext(SetModalContext);
  if (!context) {
    throw new Error('useSetModal must be used within the SetModalContext');
  }
  return context;
};
