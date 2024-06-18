'use client'

import type { NextPage } from 'next/types';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';

import Navbar from '../../components/navbar';
import Hero from '../../components/sections/hero';
import Experience from '../../components/sections/experience';
import Projects from '../../components/sections/projects';
import Skills from '../../components/sections/skills';
import Portfolio from '../../components/sections/portfolio';
import Education from '../../components/sections/education';
import About from '../../components/sections/about';
import ModalContext from '../../contexts/modalContext';

const Home: NextPage<{ params: { lng: string } }> = ({ params: { lng } }) => {
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
    <>
      {/* <ModalContext> */}
        <Navbar sectionInViewWatchers={sectionInViewWatchers} />
        <main id="content" className="max-h-screen-mobile overflow-scroll lg:ml-56 lg:max-h-fit lg:overflow-auto">
          <Hero ref={profileRef}/>
          <Experience ref={experienceRef}/>
          <Projects ref={projectsRef}/>
          <Skills ref={skillsRef}/>
          <Portfolio ref={portfolioRef}/>
          <Education ref={educationRef}/>
          <About ref={aboutRef}/>
        </main>
      {/* </ModalContext> */}
    </>
  );
};

export default Home;
