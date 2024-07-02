import { forwardRef, ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  children: ReactNode | ReactNode[];
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({ id, children }, ref) => (
    <section id={id} className="flex min-h-section-mobile flex-col justify-center px-8 py-16 lg:min-h-screen" ref={ref}>
      {children}
    </section>
  ),
);

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
