import { LegacyRef } from 'react';
import { useTranslation } from 'next-i18next';

import classNames from '../../utils/tailwindClassNamesHelper';
import Position from '../position';

import Section from './genericSection';

import styles from '../../styles/tailwindStyles.json';

const projects = [
  'digital_shores',
  'iib',
  'bichito',
  'abandon',
];

const sections = [
  {
    id: 'description',
    contentType: 'single',
    showTitle: false,
  },
];

const Projects = ({ innerRef }: { innerRef?: LegacyRef<HTMLDivElement>; }) => {
  const { t } = useTranslation('common');
  return (
    <Section id="projects" innerRef={innerRef}>
      <h2 className={classNames(styles.text['section-title'], styles.text['gradient-b'])}>
        {t('SECTIONS.PROJECTS')}
      </h2>
      {projects.map((project) => (
        <Position i18nKey={project} namespace='projects' key={project} sections={sections} highlight='b'/>
      ))}
    </Section>
  );
};

export default Projects;
