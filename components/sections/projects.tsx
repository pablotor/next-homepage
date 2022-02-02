import { useTranslation } from 'next-i18next';

import Position from '../position';
import classNames from '../../utils/tailwindClassNamesHelper';

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

const Projects = () => {
  const { t } = useTranslation('common');
  return (
    <div id="projects" className={styles.container.section}>
      <h2 className={classNames(styles.text['section-title'], styles.text['gradient-b'])}>
        {t('SECTIONS.PROJECTS')}
      </h2>
      {projects.map((project) => (
        <Position i18nKey={project} namespace='projects' key={project} sections={sections} highlight='b'/>
      ))}
    </div>
  );
};

export default Projects;
