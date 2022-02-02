import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Navbar from '../components/navbar';
import Hero from '../components/sections/hero';
import Experience from '../components/sections/experience';
import Projects from '../components/sections/projects';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const [profileRef, profileInView] = useInView({ threshold: 0.51 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.51 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.51 });

  const [inViewSection, setInViewSection] = useState(0);

  useEffect(() => {
    const sections = [profileInView, experienceInView, projectsInView];
    if (sections.indexOf(true) !== -1) {
      setInViewSection(sections.indexOf(true));
    }
  }, [profileInView, experienceInView, projectsInView]);

  return (
    <div className='lg:flex mx-auto max-w-screen-xl'>
      <Head>
        <title>{t('PAGE.TITLE')}</title>
        <meta name="description" content={t('PAGE.DESCRIPTION')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar selectedSection={inViewSection}/>
      <main>
        <div id='content' className='overflow-scroll max-h-screen-mobile lg:max-h-screen'>
          <Hero innerRef={profileRef}/>
          <Experience innerRef={experienceRef}/>
          <Projects innerRef={projectsRef}/>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'hero',
      'experience',
      'projects',
    ])),
  },
});

export default Home;
