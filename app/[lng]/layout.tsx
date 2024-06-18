import { Metadata } from 'next';
import { dir } from 'i18next';

import './globals.css';

const languages = ['en', 'es'];

export const generateStaticParams = async () => languages.map((lng) => ({ lng }));

export const metadata: Metadata = {
  title: "Pablo Tor | Developer",
  description: "Online Resume & Portfolio",
};

export default function RootLayout({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
  params: {
      lng: string;
  }
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
          {children}
      </body>
    </html>
  );
}
