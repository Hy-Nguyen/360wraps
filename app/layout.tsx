import LayoutWrapper from '@/components/layout/LayoutWrapper';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Template - Hy Nguyen',
  description: 'NextJS Template - Hy Nguyen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + 'max-w-[100dvw] overflow-x-hidden'}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
