import { FC, ReactElement } from 'react';
import { Trans } from 'react-i18next/TransWithoutContext';

import type { WithLanguage } from '../../i18n';

import { useTranslation } from '../../i18n';
import classNames from '../utils/classNames';

export type SectionData = {
  id: string;
  contentType: 'text' | 'list';
  showTitle?: boolean;
};

type PositionProps = {
  i18nKey: string;
  namespace: string;
  sections: SectionData[];
  includeSecondary?: boolean;
  highlight?: 'a' | 'b';
  interpolationComponents?: Record<string, ReactElement>;
} & WithLanguage;

const Position: FC<PositionProps> = async ({
  i18nKey, namespace, sections, includeSecondary, highlight = 'a', lng, interpolationComponents,
}) => {
  const { t } = await useTranslation(lng, namespace);
  const formatKey = (key: string) => `${i18nKey.toLocaleUpperCase()}.${key}`;
  return (
    <div className="py-4">
      {/* Main title (highlighted) */}
      <h3 className={classNames(`highlight-${highlight}`, 'bg-clip-text text-xl font-medium')}>
        <Trans
          t={t}
          i18nKey={formatKey('HIGHLIGHTED')}
          components={interpolationComponents}
        />
      </h3>
      {/* Subtitle (black) */}
      <div className="flex flex-col-reverse sm:w-full sm:flex-row sm:justify-between">
        <p className="text-xl">
          {t(formatKey('TITLE'))}
        </p>
        <p className="text-lg font-light text-gray-700 sm:text-xl">
          {t(formatKey('DATE'))}
        </p>
      </div>
      {/* Subtitle (grey) */}
      {includeSecondary && (
        <p className="text-lg text-gray-700">
          {t(formatKey('SECONDARY'))}
        </p>
      )}
      {sections.map((section) => {
        const sectionI18nKey = section.id.toLocaleUpperCase();
        return (
          <div key={section.id}>
            {section.showTitle && (
              <h4 className="mt-1 font-medium">
                {t(`SECTIONS.${sectionI18nKey}`)}
              </h4>
            )}
            {section.contentType === 'list' ? (
              <ul>
                {(t(formatKey(sectionI18nKey), { returnObjects: true }) as string[]).map(
                  (element) => (
                    <li key={element}>
                      <Trans i18nKey={element} components={interpolationComponents} />
                    </li>
                  ),
                )}
              </ul>
            ) : (
              <p>
                <Trans
                  t={t}
                  i18nKey={formatKey(sectionI18nKey)}
                  components={interpolationComponents}
                />
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Position;
