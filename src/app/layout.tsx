import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ken Cheung',
  description: 'Getting stuck between frontend and backend forever',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-600 bg-gradient-to-b from-white to-slate-200 min-h-screen flex flex-col font-sans`}>
        <Navbar />
        <div className='flex-1 mx-6'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}