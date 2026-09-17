import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maya Ramadan — REALTOR® | Rhode Island & Massachusetts',
  description: 'Maya M. Ramadan, REALTOR® and CEBA. Helping families buy, sell, and rent homes across Rhode Island and Massachusetts. Gold Door Realty.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mayaramadan.com'),
  openGraph: {
    title: 'Maya Ramadan — REALTOR® | RI & MA',
    description: 'I will open the door to your home. Serving Rhode Island and Massachusetts.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
