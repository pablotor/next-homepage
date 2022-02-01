import { useTranslation } from 'next-i18next';

import styles from '../styles/tailwindStyles.json';
import classNames from '../utils/tailwindClassNamesHelper';

const Position = ({ i18nKey, namespace }: {
  i18nKey: string;
  namespace: string;
}) => {
  const { t } = useTranslation(namespace);
  const formatKey = (key: string) => `${i18nKey.toLocaleUpperCase()}.${key}`;
  return (
    <div className={styles.container.position}>
      <h5 className={classNames(styles.text['position-place'], styles.text['highlight-a'])}>
        {t(formatKey('PLACE'))}
      </h5>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:w-full'>
        <h4 className={styles.text['position-title']}>{t(formatKey('TITLE'))}</h4>
        <p className={styles.text['position-date']}>{t(formatKey('DATE'))}</p>
      </div>
      <h5 className={styles.text['position-tech']}>
        {t(formatKey('TECHNOLOGIES'))}
      </h5>
      <h6 className={styles.text['position-subtitle']}>
        {t('SUBTITLES.RESPONSIBILITIES')}
      </h6>
      <p>{t(formatKey('RESPONSIBILITIES'))}</p>
      <h6 className={styles.text['position-subtitle']}>
        {t('SUBTITLES.PROJECTS')}
      </h6>
      <ul>{(t(formatKey('PROJECTS'), { returnObjects: true }) as string[]).map(
        (element, index) => <li key={index}>{element}</li>,
      )}</ul>
    </div>
  );
};

export default Position;
