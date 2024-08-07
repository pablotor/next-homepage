'use client';

import { ReactElement, useCallback, useState } from 'react';

export const useModal = () => {
  const [content, setContent] = useState<ReactElement | null>(null);

  const open = useCallback((modalContent: ReactElement) => setContent(modalContent), []);
  const close = useCallback(() => setContent(null), []);

  return {
    isOpen: !!content,
    content,
    open,
    close,
  };
};
