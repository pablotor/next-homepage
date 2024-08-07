'use client';

import { FC, ReactElement, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

import type { WithLanguage } from '../i18n';

import Navbar from './components/navbar';
import { sectionsData } from './components/sections/sectionsData';
import SectionContainer from './components/sectionContainer';

const sectionIds = sectionsData.map((section) => section.id);

const MIN_INVIEW_THREEHOLD = 0.20;

type ClientComponentProps = {
  children: ReactElement[]
} & WithLanguage;

const ClientComponent: FC<ClientComponentProps> = ({ lng, children }) => {
  const [profileRef, profileInView] = useInView({ threshold: MIN_INVIEW_THREEHOLD });
  const [experienceRef, experienceInView] = useInView({ threshold: MIN_INVIEW_THREEHOLD });
  const [projectsRef, projectsInView] = useInView({ threshold: MIN_INVIEW_THREEHOLD });
  const [skillsRef, skillsInView] = useInView({ threshold: MIN_INVIEW_THREEHOLD });
  const [portfolioRef, portfolioInView] = useInView({ threshold: MIN_INVIEW_THREEHOLD });
  const [educationRef, educationInView] = useInView({ threshold: MIN_INVIEW_THREEHOLD });
  const [aboutRef, aboutInView] = useInView({ threshold: MIN_INVIEW_THREEHOLD });

  const {
    sectionInViewRefs,
    sectionInViewWatchers,
  } = useMemo(() => ({
    sectionInViewRefs: [
      profileRef,
      experienceRef,
      projectsRef,
      skillsRef,
      portfolioRef,
      educationRef,
      aboutRef,
    ],
    sectionInViewWatchers: [
      profileInView,
      experienceInView,
      projectsInView,
      skillsInView,
      portfolioInView,
      educationInView,
      aboutInView,
    ],
  }), [
    aboutInView, aboutRef, educationInView, educationRef,
    experienceInView, experienceRef, portfolioInView, portfolioRef,
    profileInView, profileRef, projectsInView, projectsRef,
    skillsInView, skillsRef,
  ]);

  return (
    <>
      <Navbar sectionInViewWatchers={sectionInViewWatchers} lng={lng} />
      <main id="content" className="max-h-screen-mobile overflow-scroll lg:ml-56 lg:max-h-fit lg:overflow-auto">
        {
          children.map((child, index) => (
            <SectionContainer
              ref={sectionInViewRefs[index]}
              id={sectionIds[index]}
              key={sectionIds[index]}
            >
              {child}
            </SectionContainer>
          ))
        }
      </main>
    </>
  );
};

export default ClientComponent;
