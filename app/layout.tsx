import LayoutWrapper from '@/components/layout/LayoutWrapper';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const font = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '360 Auto Concepts',
  description: '360 Auto Concepts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'font-satoshi max-w-[100dvw] overflow-x-hidden bg-white lg:max-w-[100vw]'}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
