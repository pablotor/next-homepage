import { Metadata } from 'next';
import { dir } from 'i18next';

import type { WithLanguage } from '../../i18n';

import '../globals.css';
import Navbar from './components/navbar';

const languages = ['en', 'es'] as const;

export const generateStaticParams = async () => languages.map((lng) => ({ lng }));

export const metadata: Metadata = {
  title: 'Pablo Tor | Developer',
  description: 'Azurro Gallery',
};

const RootLayout = ({
  children,
  params: {
    lng,
  },
}: Readonly<{
  children: React.ReactNode;
  params: WithLanguage;
}>) => (
  <html lang={lng} dir={dir(lng)}>
    <body className="mx-auto max-w-screen-xl overflow-x-hidden">
      <Navbar lng={lng} />
      <main id="content" className="max-h-screen-mobile overflow-scroll lg:ml-56 lg:max-h-fit lg:overflow-auto">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
