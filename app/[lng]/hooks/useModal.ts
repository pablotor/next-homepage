'use client';

import { ReactElement, useState } from 'react';

export const useModal = () => {
  const [content, setContent] = useState<ReactElement | null>(null);

  const open = (modalContent: ReactElement) => setContent(modalContent);
  const close = () => setContent(null);

  return {
    isOpen: !!content,
    content,
    open,
    close,
  };
};
