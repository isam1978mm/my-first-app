import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  title: 'My App',
  description: 'My First Next.js App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleTagManager gtmId="GTM-TKTJ7VXH" /> {/* Replace with your GTM ID */}
      </body>
    </html>
  );
}
