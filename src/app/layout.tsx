// Root layout for the app
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Salon App',
  description: 'Demo salon app with OTP auth and gallery'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
