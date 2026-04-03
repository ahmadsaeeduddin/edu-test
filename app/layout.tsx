import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'Edunautics',
  description: 'Reimagining education through research, innovation and industry collaboration.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-inter antialiased" suppressHydrationWarning>
        <Header />
        <main className="w-full min-w-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
