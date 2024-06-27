import { forwardRef, ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode | ReactNode[];
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children }, ref) => (
    <section id={id} className="flex min-h-section-mobile flex-col justify-center px-8 py-16 lg:min-h-screen" ref={ref}>
      {children}
    </section>
  ),
);

Section.displayName = 'Section';

export default Section;
