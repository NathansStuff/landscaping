'use client';

import { IDetails } from '@/apiCalls/getDetails';
import CustomIcon from '@/components/CustomIcon';
import CustomLink from '@/components/CustomLink';
import GithubIcon from '@/components/icons/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import { MoonIcon } from '@/components/icons/MoonIcon';
import { SunIcon } from '@/components/icons/SunIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';
import YoutubeIcon from '@/components/icons/YoutubeIcon';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const MotionLink = motion(Link);

interface NavbarProps {
  details: IDetails;
}

const links: {
  href: string;
  title: string;
}[] = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/portfolio',
    title: 'Portfolio',
  },
];

const socialPlatforms = (details: IDetails, swapColors: boolean = false) => [
  {
    name: 'github',
    url: details.github,
    icon: <GithubIcon className={`${swapColors && 'bg-light rounded-full dark:bg-dark'}`} />,
  },
  {
    name: 'linkedin',
    url: details.linkedin,
    icon: <LinkedinIcon />,
  },
  {
    name: 'youtube',
    url: details.youtube,
    icon: <YoutubeIcon />,
  },
  {
    name: 'twitter',
    url: details.twitter,
    icon: <TwitterIcon />,
  },
  {
    name: 'instagram',
    url: details.instagram,
    icon: <InstagramIcon />,
  },
];

function Navbar({ details }: NavbarProps): JSX.Element {
  const { theme, setTheme } = useThemeSwitcher();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const socials = (swapColors: boolean = false) =>
    socialPlatforms(details, swapColors)
      .filter((platform) => platform.url)
      .map((platform) => (
        // social Icons
        <CustomIcon key={platform.name} href={platform.url}>
          {platform.icon}
        </CustomIcon>
      ))
      .concat(
        // Theme switcher
        <button
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
          className='bg-dark rounded-full dark:bg-light text-light dark:text-dark p-1'
        >
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </button>
      );

  return (
    <header className='w-full py-8 font-medium flex items-center justify-between dark:text-light relative z-[200] px-16 md:px-12 sm:px-8'>
      <button className='flex-center flex-col !hidden lg:!flex' onClick={toggleMenu}>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 transition-all duration-300 ease-out ${
            isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 transition-all duration-300 ease-out ${
            isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        />
      </button>
      <div className='lg:hidden w-full flex justify-between items-center'>
        <nav className='flex space-x-4'>
          {links.map((link) => (
            <CustomLink href={link.href} title={link.title} key={link.href} />
          ))}
        </nav>
        <nav className='flex-center flex-wrap space-x-4'>{socials()}</nav>
      </div>
      {isMenuOpen && (
        <motion.div
          className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !z-[80] bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 order-1'
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className='flex-center flex-col space-y-4'>
            {links.map((link) => (
              <CustomLink href={link.href} title={link.title} key={link.href} toggle={toggleMenu} isMobile />
            ))}
          </nav>
          <nav className='flex-center flex-wrap space-x-4 mt-2 sm:space-x-2'>{socials(true)}</nav>
        </motion.div>
      )}

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <div className='flex-center mt-2'>
          <MotionLink
            href='/'
            className='flex items-center justify-center rounded-full w-16 h-16  bg-dark text-white dark:border-2 dark:border-solid dark:border-light text-2xl font-bold'
            whileHover={{
              backgroundColor: [
                '#121212',
                'rgba(131,58,180,1)',
                'rgba(253,29,29,1)',
                'rgba(252,176,69,1)',
                'rgba(131,58,180,1)',
                '#121212',
              ],
              transition: {
                duration: 1,
                repeat: Infinity,
              },
            }}
          >
            {details.initials}
          </MotionLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
