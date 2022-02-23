import Image from 'next/image';
import { LegacyRef } from 'react';
import { Trans, useTranslation } from 'next-i18next';

import classNames from '../../utils/tailwindClassNamesHelper';
import SectionContainer from './sectionContainer';

import styles from '../../styles/tailwindStyles.json';

const About = ({ innerRef }: { innerRef?: LegacyRef<HTMLDivElement>; }) => {
  const { t } = useTranslation(['common', 'about']);
  return (
    <SectionContainer id="about" innerRef={innerRef}>
      <div className="relative">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <div className="relative w-full h-36 sm:h-72 lg:hidden">
              <Image
                className="object-cover object-top "
                src="/img/about-mobile.jpg"
                alt={t('IMAGE_ALT', { ns: 'about' })}
                layout='fill'
                objectFit='cover'
              />
            </div >
            <div className="hidden w-full lg:block lg:absolute lg:h-full">
              <Image
                className="object-cover"
                src="/img/about-desktop.jpg"
                alt={t('IMAGE_ALT', { ns: 'about' })}
                layout='fill'
              />
            </div>
          </div>
        </div>
        <div className="relative pt-12 pb-16 sm:px-6 sm:pt-16 lg:grid lg:grid-cols-2 lg:pl-8 lg:mx-auto">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:mr-0 lg:ml-auto lg:max-w-lg">
              <h2 className={classNames(styles.text['section-title'], styles.text['gradient-b'])}>
                {t('SECTIONS.ABOUT')}
              </h2>
              <div className={classNames(styles.text.primary, 'mt-5 prose prose-indigo')}>
                <Trans
                  i18nKey='CONTENT'
                  ns='about'
                  components={{
                    highlighted: <span className={styles.text['highlight-a']} />,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
