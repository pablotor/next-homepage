import { Metadata } from 'next';

import type { WithLanguage } from '../../i18n';

import '../globals.css';
import Navbar from './components/galleryNavbar';

const languages = ['en', 'es'] as const;

export const generateStaticParams = async () =>
  languages.map((lng) => ({ lng }));

export const metadata: Metadata = {
  title: 'Pablo Tor | Developer',
  description: 'Azzurro Gallery',
};

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<WithLanguage>;
}>) => (
  <div className="mx-auto max-w-screen-xl overflow-x-hidden">
    <Navbar lng={(await params).lng} />
    <main
      id="content"
      className="max-h-screen-mobile overflow-scroll lg:ml-56 lg:max-h-fit lg:overflow-auto"
    >
      {children}
    </main>
  </div>
);

export default RootLayout;
