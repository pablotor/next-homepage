import { forwardRef, ReactNode } from 'react';
import classNames from '../utils/classNames';

interface SectionContainerProps {
  id: string;
  verticalAllignment?: 'center' | 'start';
  children: ReactNode | ReactNode[];
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ id, verticalAllignment = 'center', children }, ref) => (
    <section
      id={id}
      ref={ref}
      className={classNames('flex min-h-section-mobile flex-col px-8 py-16 lg:min-h-screen', verticalAllignment === 'center' ? 'justify-center' : '')}
    >
      {children}
    </section>
  ),
);

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
