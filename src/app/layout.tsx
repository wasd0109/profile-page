import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Ken Cheung\'s Blog',
  description: 'Getting stuck between frontend and backend forever',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" text-gray-600 bg-gradient-to-b from-white to-slate-200 min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className='flex-1 mx-6'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}