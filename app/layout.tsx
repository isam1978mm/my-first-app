import './globals.css';
import { ReactNode } from 'react';
import ThirdParties from './third-parties';

export const metadata = {
  title: 'My First App',
  description: 'Next.js + GTM with third-parties',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdParties />
        {children}
      </body>
    </html>
  );
}
