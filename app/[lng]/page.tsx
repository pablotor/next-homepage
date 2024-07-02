import type { NextPage } from 'next/types';

import { WithLanguage } from '../i18n/WithLanguage';
import Hero from './components/sections/hero';
import Experience from './components/sections/experience';
import Projects from './components/sections/projects';
import Skills from './components/sections/skills';
import Portfolio from './components/sections/portfolio';
import Education from './components/sections/education';
import About from './components/sections/about';
import ClientComponent from './clientComponent';

const Home: NextPage<{ params: WithLanguage }> = ({ params: { lng } }) => (
  <div className="mx-auto max-w-screen-xl lg:flex">
    <ClientComponent lng={lng}>
      <Hero lng={lng} />
      <Experience lng={lng} />
      <Projects lng={lng} />
      <Skills lng={lng} />
      <Portfolio lng={lng} />
      <Education lng={lng} />
      <About lng={lng} />
    </ClientComponent>
  </div>
);

export default Home;
