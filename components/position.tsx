import { useTranslation } from 'next-i18next';

import styles from '../styles/tailwindStyles.json';
import classNames from '../utils/tailwindClassNamesHelper';

interface Props {
  i18nKey: string;
  namespace: string;
  sections: {
    id: string;
    contentType: string;
    showTitle?: boolean;
  }[];
  includeSecondary?: boolean;
  highlight?: 'a' | 'b';
}

const Position = ({
  i18nKey, namespace, sections, includeSecondary, highlight = 'a',
}: Props) => {
  const { t } = useTranslation(namespace);
  const formatKey = (key: string) => `${i18nKey.toLocaleUpperCase()}.${key}`;
  return (
    <div className={styles.container.position}>
      <h5
        className={classNames(
          styles.text['position-highlighted'],
          styles.text[`highlight-${highlight}`],
        )}
      >
        {t(formatKey('HIGHLIGHTED'))}
      </h5>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:w-full">
        <h4 className={styles.text['position-title']}>{t(formatKey('TITLE'))}</h4>
        <p className={styles.text['position-date']}>{t(formatKey('DATE'))}</p>
      </div>
      {includeSecondary && (
        <h5 className={styles.text['position-secondary']}>
          {t(formatKey('SECONDARY'))}
        </h5>
      )}
      {sections.map((section) => {
        const sectionI18nKey = section.id.toLocaleUpperCase();
        return (
          <div key={section.id}>
            {section.showTitle && (
              <h6 className={styles.text['position-section']}>
                {t(`SUBTITLES.${sectionI18nKey}`)}
              </h6>
            )}
            {section.contentType === 'single' && <p>{t(formatKey(sectionI18nKey))}</p>}
            {section.contentType === 'multiple' && (
              <ul>
                {(t(formatKey(sectionI18nKey), { returnObjects: true }) as string[]).map(
                  (element) => <li key={element}>{element}</li>,
                )}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Position;
