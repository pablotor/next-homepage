import { useTranslation } from '../app/i18n/client';
import classNames from '../utils/classNames';
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
  const { t } = useTranslation('en', namespace);
  const formatKey = (key: string) => `${i18nKey.toLocaleUpperCase()}.${key}`;
  return (
    <div className="py-4">
      <h5 className={`font-medium text-xl bg-clip-text highlight-${highlight}`}>
        {t(formatKey('HIGHLIGHTED'))}
      </h5>
      <div className="flex flex-col-reverse sm:w-full sm:flex-row sm:justify-between">
        <h4 className="text-xl">{t(formatKey('TITLE'))}</h4>
        <p className="font-light text-lg sm:text-xl text-gray-700">{t(formatKey('DATE'))}</p>
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
