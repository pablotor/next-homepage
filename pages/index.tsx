/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Navbar from '../components/navbar';
import Hero from '../components/sections/hero';
import Experience from '../components/sections/experience';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';
import Portfolio from '../components/sections/portfolio';
import Education from '../components/sections/education';
import About from '../components/sections/about';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const [profileRef, profileInView] = useInView({ threshold: 0.51 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.51 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.51 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.51 });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.51 });
  const [educationRef, educationInView] = useInView({ threshold: 0.51 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.40 });

  const [inViewSection, setInViewSection] = useState(0);

  useEffect(() => {
    const sections = [
      profileInView,
      experienceInView,
      projectsInView,
      skillsInView,
      portfolioInView,
      educationInView,
      aboutInView,
    ];
    if (sections.indexOf(true) !== -1) {
      setInViewSection(sections.indexOf(true));
    }
  }, [
    profileInView,
    experienceInView,
    projectsInView,
    skillsInView,
    portfolioInView,
    educationInView,
    aboutInView,
  ]);

  return (
    <div className='lg:flex mx-auto max-w-screen-xl'>
      <Head>
        <title>{t('PAGE.TITLE')}</title>
        <meta name="description" content={t('PAGE.DESCRIPTION')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar selectedSection={inViewSection}/>
      <main>
        <div id='content' className='lg:ml-56 max-h-screen-mobile'>
          <Hero innerRef={profileRef}/>
          <Experience innerRef={experienceRef}/>
          <Projects innerRef={projectsRef}/>
          <Skills innerRef={skillsRef}/>
          <Portfolio innerRef={portfolioRef}/>
          <Education innerRef={educationRef}/>
          <About innerRef={aboutRef}/>
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
      'skills',
      'portfolio',
      'education',
      'about',
    ])),
  },
});

export default Home;
