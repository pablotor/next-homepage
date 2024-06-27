'use client';

import type { NextPage } from 'next/types';
import { useInView } from 'react-intersection-observer';

import Navbar from './components/navbar';
import Hero from './components/sections/hero';
import Experience from './components/sections/experience';
import Projects from './components/sections/projects';
import Skills from './components/sections/skills';
import Portfolio from './components/sections/portfolio';
import Education from './components/sections/education';
import About from './components/sections/about';
import { WithLanguage } from '../i18n/WithLanguage';

const Home: NextPage<{ params: WithLanguage }> = ({ params: { lng } }) => {
  const [profileRef, profileInView] = useInView({ threshold: 0.51 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.51 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.51 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.51 });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.51 });
  const [educationRef, educationInView] = useInView({ threshold: 0.51 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.40 });

  const sectionInViewWatchers = [
    profileInView,
    experienceInView,
    projectsInView,
    skillsInView,
    portfolioInView,
    educationInView,
    aboutInView,
  ];

  return (
    <div className="mx-auto max-w-screen-xl lg:flex">
      <Navbar sectionInViewWatchers={sectionInViewWatchers} lng={lng} />
      <main id="content" className="max-h-screen-mobile overflow-scroll lg:ml-56 lg:max-h-fit lg:overflow-auto">
        <Hero ref={profileRef} lng={lng} />
        <Experience ref={experienceRef} lng={lng} />
        <Projects ref={projectsRef} lng={lng} />
        <Skills ref={skillsRef} lng={lng} />
        <Portfolio ref={portfolioRef} lng={lng} />
        <Education ref={educationRef} lng={lng} />
        <About ref={aboutRef} lng={lng} />
      </main>
    </div>
  );
};

export default Home;
