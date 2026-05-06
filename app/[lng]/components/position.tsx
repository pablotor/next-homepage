import { FC, ReactElement } from 'react';
import { Trans } from 'react-i18next/TransWithoutContext';

import classNames from '../utils/classNames';

export type PositionItem = {
  KEY: string;
  HIGHLIGHTED: string;
  TITLE: string;
  SECONDARY: string;
  DATE: string;
  [SECTIONS: string]: string | string[];
};

type PositionItemContentProps = {
  content: string | string[];
  interpolationComponents?: Record<string, ReactElement>;
};

const PositionItemContent: FC<PositionItemContentProps> = ({
  content,
  interpolationComponents,
}) => {
  const isList = Array.isArray(content);
  return isList ? (
    <ul>
      {content.map((listItem) => (
        <li key={listItem}>
          <Trans i18nKey={listItem} components={interpolationComponents} />
        </li>
      ))}
    </ul>
  ) : (
    <p>
      <Trans i18nKey={content} components={interpolationComponents} />
    </p>
  );
};

type PositionProps = {
  position: PositionItem;
  sections?: { KEY: keyof PositionItem; LABEL?: string }[];
  includeSecondary?: boolean;
  highlight?: 'a' | 'b';
  interpolationComponents?: Record<string, ReactElement>;
};

const Position: FC<PositionProps> = async ({
  position,
  sections = [{ KEY: 'DESCRIPTION' }],
  includeSecondary,
  highlight = 'a',
  interpolationComponents,
}) => (
  <div className="py-4">
    {/* Main title (highlighted) */}
    <h3
      className={classNames(
        `highlight-${highlight}`,
        'bg-clip-text text-xl font-medium',
      )}
    >
      <Trans
        i18nKey={position.HIGHLIGHTED}
        components={interpolationComponents}
      />
    </h3>
    {/* Subtitle (black) */}
    <div className="flex flex-col-reverse sm:w-full sm:flex-row sm:justify-between">
      <p className="text-xl">{position.TITLE}</p>
      <p className="text-lg font-light text-gray-700 sm:text-xl">
        {position?.DATE}
      </p>
    </div>
    {/* Subtitle (grey) */}
    {includeSecondary && (
      <p className="text-lg text-gray-700">{position.SECONDARY}</p>
    )}
    {/* Sections - Maps to DESCRIPTION key if no sections are provided */}
    {sections.map((section) => {
      const content = position[section.KEY];
      if (!content) return;
      return (
        <div key={`${position.KEY}-${section.KEY}`}>
          {section.LABEL && (
            <h4 className="mt-1 font-medium">{section.LABEL}</h4>
          )}
          <PositionItemContent content={content} />
        </div>
      );
    })}
  </div>
);

export default Position;
