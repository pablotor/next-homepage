import { FC } from 'react';

import { useTranslation } from '../../../i18n';
import { WithLanguage } from '../../../i18n/WithLanguage';
import Position from '../position';

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

const Projects: FC<WithLanguage> = async ({ lng }) => {
  const { t } = await useTranslation(lng, ['common', 'projects']);
  return (
    <>
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
          lng={lng}
        />
      ))}
    </>
  );
};

export default Projects;
