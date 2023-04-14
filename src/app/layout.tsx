import { getDetails } from '@/apiCalls/getDetails';
import { getMetadata } from '@/apiCalls/getMetadata';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Footer from './Footer';
import Navbar from './Navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata();
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const details = await getDetails();
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href={'/favicon.ico'} />
      </head>
      <body className={`${montserrat.variable} font-mont bg-light w-full text-textPrimary `}>
        <div className='min-h-screen'>
          <Navbar details={details} />
          {children}
        </div>
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}
