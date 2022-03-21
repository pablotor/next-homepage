import { LegacyRef } from 'react';
import { Trans, useTranslation } from 'next-i18next';

import classNames from '../../utils/tailwindClassNamesHelper';
import LinkedIn from '../icons/linkedIn';
import Github from '../icons/github';

import SectionContainer from './sectionContainer';

import styles from '../../styles/tailwindStyles.json';

const socialMedia = [
  {
    icon: LinkedIn,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/pablo-javier-torrubiano-7907b395/',
  }, {
    icon: Github,
    label: 'Github',
    link: 'https://github.com/pablotor',
  },
];

const Hero = ({ innerRef }: { innerRef: LegacyRef<HTMLElement>; }) => {
  const { t } = useTranslation(['common', 'hero']);
  return (
    <SectionContainer id="profile" innerRef={innerRef}>
      <div>
        <h1 className="mb-2 text-[3.5rem] font-black leading-[1.1] sm:text-8xl sm:leading-snug">
          <span className={classNames(styles.text['gradient-a'], 'bg-clip-text animate-vercel-text-a')}>
            {t('FIRSTNAME')}
          </span>
          <br />
          <span className={classNames(styles.text['gradient-b'], 'bg-clip-text animate-vercel-text-b')}>
            {t('LASTNAME')}
          </span>
        </h1>
        <a href={`mailto:${t('EMAIL')}`}>
          <h3 className="mb-6 text-2xl text-gray-600">{t('EMAIL')}</h3>
        </a>
      </div>
      <div>
        <Trans
          ns="hero"
          i18nKey="PROFILE"
          className={styles.text.primary}
          components={{
            primary: <p className={styles.text.primary} />,
            highlightA: <span className={classNames(styles.text['highlight-a'])} />,
            // highlightB: <span className={classNames(styles.text['highlight-b'])}/>,
          }}
        />
      </div>
      <div className="flex mt-6">
        {socialMedia.map((element) => (
          <a
            key={element.label}
            href={element.link}
            className="mr-6 "
            aria-label={element.label}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={classNames(
                'p-3 bg-gray-600 rounded-full hover:bg-gradient-to-r transition-all',
                'from-purple-500 to-pink-700',
                // index % 2 ? 'from-purple-500 to-pink-700' : 'from-blue-500 to-indigo-700',
              )}
            >
              <element.icon className="w-6 h-6 text-white" />
            </div>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Hero;
