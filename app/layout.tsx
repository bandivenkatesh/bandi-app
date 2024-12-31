import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { CursorProvider } from '@/components/providers/CursorProvider';
import { CustomCursorWrapper } from '@/components/providers/CustomCursorWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bandi - New Superbike Generation',
  description: 'Experience the future of superbike booking with Bandi',
  metadataBase: new URL('https://bandibikes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bandi - New Superbike Generation',
    description: 'Experience the future of superbike booking with Bandi',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} cursor-none`}>
        <CursorProvider>
          <Navbar />
          <main>{children}</main>
          <CustomCursorWrapper />
        </CursorProvider>
      </body>
    </html>
  );
}
