/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { LegacyRef } from 'react';
import { Trans, useTranslation } from 'next-i18next';

import classNames from '../../utils/tailwindClassNamesHelper';
import LinkedIn from '../icons/linkedIn';
import Github from '../icons/github';

import Section from './genericSection';

import styles from '../../styles/tailwindStyles.json';

const socialMedia = [
  {
    icon: LinkedIn,
    link: 'https://www.linkedin.com/in/pablo-javier-torrubiano-7907b395/',
  }, {
    icon: Github,
    link: 'https://github.com/pablotor',
  },
];

const Hero = ({ innerRef }: { innerRef?: LegacyRef<HTMLDivElement>; }) => {
  const { t } = useTranslation(['common', 'hero']);
  return (
    <Section id="profile" innerRef={innerRef}>
      <div>
        <h1 className='mb-2 text-[3.5rem] sm:text-8xl font-black leading-[1.1] sm:leading-normal'>
          <span className={classNames(styles.text['gradient-a'], 'bg-clip-text animate-vercel-text-a')}>
            {t('FIRSTNAME')}
          </span>
          <br/>
          <span className={classNames(styles.text['gradient-b'], 'bg-clip-text animate-vercel-text-b')}>
            {t('LASTNAME')}
          </span>
        </h1>
        <h3 className='mb-6 text-2xl text-gray-600'>{t('EMAIL')}</h3>
      </div>
      <div>
        <Trans
          ns='hero'
          i18nKey='PROFILE'
          className={styles.text.primary}
          components={{
            primary: <p className={styles.text.primary} />,
            highlightA: <span className={classNames(styles.text['highlight-a'])}/>,
            // highlightB: <span className={classNames(styles.text['highlight-b'])}/>,
          }}
        />
      </div>
      <div className='flex mt-6'>
        {socialMedia.map((element, index) => (
          <a key={index} target='_blank' rel='noreferrer' href={element.link} className='mr-6 '>
            <div className={classNames(
              'p-3 bg-gray-600 rounded-full hover:bg-gradient-to-r transition-all',
              'from-purple-500 to-pink-700',
              // index % 2 ? 'from-purple-500 to-pink-700' : 'from-blue-500 to-indigo-700',
            )}>
              <element.icon className='w-6 h-6 text-white'/>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Hero;
