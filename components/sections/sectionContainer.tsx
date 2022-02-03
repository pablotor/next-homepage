import { LegacyRef, ReactNode } from 'react';

import styles from '../../styles/tailwindStyles.json';

interface Props {
  id: string;
  children: ReactNode | ReactNode[];
  innerRef?: LegacyRef<HTMLDivElement>;
}

const Section = ({ id, children, innerRef }: Props) => (
  <section id={id} className={styles.container.section} ref={innerRef}>
    {children}
  </section>
);

export default Section;
