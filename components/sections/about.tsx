import Image from 'next/image';
import { LegacyRef } from 'react';
import { Trans, useTranslation } from 'next-i18next';

import classNames from '../../utils/tailwindClassNamesHelper';
import Section from './genericSection';

import styles from '../../styles/tailwindStyles.json';

const About = ({ innerRef }: { innerRef?: LegacyRef<HTMLDivElement>; }) => {
  const { t } = useTranslation(['common', 'about']);
  return (
    <Section id="about" innerRef={innerRef}>
      <div className="relative">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <div className="lg:hidden relative w-full h-36 sm:h-72">
              <Image
                className="object-cover object-top "
                src="/img/about-mobile.jpg"
                alt=""
                layout='fill'
                objectFit='cover'
              />
            </div >
            <div className="hidden lg:block lg:absolute w-full lg:h-full">
              <Image
                className="object-cover"
                src="/img/about-desktop.jpg"
                alt=""
                layout='fill'
              />
            </div>
          </div>
        </div>
        <div className="lg:grid relative lg:grid-cols-2 sm:px-6 pt-12 sm:pt-16 pb-16 lg:pl-8 lg:mx-auto">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto lg:mr-0 lg:ml-auto max-w-prose lg:max-w-lg text-base">
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
    </Section>
  );
};

export default About;
