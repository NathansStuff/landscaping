import { getDetails } from '@/apiCalls/getDetails';
import Link from 'next/link';

async function Footer() {
  const { name } = await getDetails();
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg py-8 flex items-center justify-between px-32 sm:text-base lg:flex-col lg:py-6 lg:space-y-2 lg:px-6'>
      <div className='text-xs flex flex-col '>
        <p>
          &copy; {new Date().getFullYear()} {name} | All Rights Reserved
        </p>
      </div>
      <Link href='/'>Say Hello</Link>
    </footer>
  );
}

export default Footer;
