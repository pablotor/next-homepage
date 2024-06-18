import { forwardRef, ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode | ReactNode[];
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children }, ref) => (
    <section id={id} className="px-8 py-16 min-h-section-mobile lg:min-h-screen flex flex-col justify-center" ref={ref}>
      {children}
    </section>
  )
);

export default Section;
