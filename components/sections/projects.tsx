'use client'

import { forwardRef } from 'react';

import { useTranslation } from '../../app/i18n/client';
import Position from '../position';
import SectionContainer from '../sectionContainer';

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

const Projects = forwardRef<HTMLElement>(({} ,ref) => {
  const { t } = useTranslation('en', ['common', 'projects']);
  return (
    <SectionContainer id="projects" ref={ref}>
      <h2 className="section-title gradient-b">
        {t('SECTIONS.PROJECTS')}
      </h2>
      <p className="subtitle">
        {t('COMMENT', { ns: 'projects' })}
      </p>
      {projects.map((project) => (
        <Position
          i18nKey={project}
          namespace="projects"
          key={project}
          sections={sections}
          highlight="a"
          includeSecondary
        />
      ))}
    </SectionContainer>
  );
});

export default Projects;
