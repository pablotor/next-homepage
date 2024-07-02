import { FC } from 'react';
import { useTranslation } from '../../i18n';
import { WithLanguage } from '../../i18n/WithLanguage';
import classNames from '../utils/classNames';

type PositionProps = {
  i18nKey: string;
  namespace: string;
  sections: {
    id: string;
    contentType: string;
    showTitle?: boolean;
  }[];
  includeSecondary?: boolean;
  highlight?: 'a' | 'b';
} & WithLanguage;

const Position: FC<PositionProps> = async ({
  i18nKey, namespace, sections, includeSecondary, highlight = 'a', lng,
}) => {
  const { t } = await useTranslation(lng, namespace);
  const formatKey = (key: string) => `${i18nKey.toLocaleUpperCase()}.${key}`;
  return (
    <div className="py-4">
      <h5 className={classNames(`highlight-${highlight}`, 'bg-clip-text text-xl font-medium')}>
        {t(formatKey('HIGHLIGHTED'))}
      </h5>
      <div className="flex flex-col-reverse sm:w-full sm:flex-row sm:justify-between">
        <h4 className="text-xl">{t(formatKey('TITLE'))}</h4>
        <p className="text-lg font-light text-gray-700 sm:text-xl">{t(formatKey('DATE'))}</p>
      </div>
      {includeSecondary && (
        <h5 className="text-lg text-gray-700">
          {t(formatKey('SECONDARY'))}
        </h5>
      )}
      {sections.map((section) => {
        const sectionI18nKey = section.id.toLocaleUpperCase();
        return (
          <div key={section.id}>
            {section.showTitle && (
              <h6 className="font-medium">
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
