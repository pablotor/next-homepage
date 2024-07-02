import { Metadata } from 'next';
import { dir } from 'i18next';

import { WithLanguage } from '../i18n/WithLanguage';
import './globals.css';

const languages = ['en', 'es'] as const;

export const generateStaticParams = async () => languages.map((lng) => ({ lng }));

export const metadata: Metadata = {
  title: 'Pablo Tor | Developer',
  description: 'Online Resume & Portfolio',
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
    <body>
      {children}
    </body>
  </html>
);

export default RootLayout;
