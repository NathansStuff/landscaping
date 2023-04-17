import { getCategories } from '@/apiCalls/getCategories';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Footer from './Footer';
import Navbar from './Navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export const metadata = {
  title: 'metadata.title',
  description: 'metadata.description',
  keywords: 'metadata.keywords',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories();

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href={'/favicon.ico'} />
      </head>
      <body className={`${montserrat.variable} font-mont bg-light w-full text-textPrimary `}>
        <div className='min-h-screen'>
          <Navbar categories={categories} />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
