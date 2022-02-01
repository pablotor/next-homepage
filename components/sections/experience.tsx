import { useTranslation } from 'next-i18next';

import Position from '../position';
// import classNames from '../../utils/tailwindClassNamesHelper';

import styles from '../../styles/tailwindStyles.json';

const jobs = [
  'wibson',
  'first_data',
  'conexia',
];

const Experience = () => {
  const { t } = useTranslation('common');
  return (
    <div id="experience" className={styles.container.section}>
      <h2 className={styles.text['section-title']}>{t('SECTIONS.EXPERIENCE')}</h2>
      {jobs.map((job) => (
        <Position i18nKey={job} namespace='experience' key={job}/>
      ))}
    </div>
  );
};

export default Experience;
