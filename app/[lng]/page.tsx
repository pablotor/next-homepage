import type { NextPage } from 'next/types';

import type { WithLanguage } from '../i18n';

import Hero from './components/sections/hero';
import Experience from './components/sections/experience';
import Projects from './components/sections/projects';
import Skills from './components/sections/skills';
import Portfolio from './components/sections/portfolio';
import Education from './components/sections/education';
import About from './components/sections/about';
import ClientComponent from './clientComponent';

const Home: NextPage<{ params: Promise<WithLanguage> }> = async ({
  params,
}) => (
  <div className="mx-auto max-w-screen-xl overflow-x-hidden lg:flex">
    <ClientComponent lng={(await params).lng}>
      <Hero lng={(await params).lng} />
      <Experience lng={(await params).lng} />
      <Projects lng={(await params).lng} />
      <Skills lng={(await params).lng} />
      <Portfolio lng={(await params).lng} />
      <Education lng={(await params).lng} />
      <About lng={(await params).lng} />
    </ClientComponent>
  </div>
);

export default Home;
