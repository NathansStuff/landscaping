'use client';

import { IDetails } from '@/apiCalls/getDetails';
import CustomIcon from '@/components/CustomIcon';
import CustomLink from '@/components/CustomLink';
import GithubIcon from '@/components/icons/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';
import YoutubeIcon from '@/components/icons/YoutubeIcon';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
    href: '/services/walls',
    title: 'Walls',
  },
  {
    href: '/bricks',
    title: 'Bricks',
  },
  {
    href: '/about',
    title: 'Pools',
  },
  {
    href: '/about',
    title: 'Paths',
  },
];

const socialPlatforms = (details: IDetails, swapColors: boolean = false) => [
  {
    name: 'github',
    url: details.github,
    icon: <GithubIcon className={`${swapColors && 'bg-light rounded-full '}`} />,
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
      ));

  return (
    <header className='w-full py-8 font-medium flex items-center justify-between relative z-[200] px-16 md:space-x-2'>
      <button className='flex-center flex-col text-textPrimary md:hidden' onClick={toggleMenu}>
        <span
          className={`bg-textPrimary block h-0.5 w-6 rounded-sm -translate-y-0.5 transition-all duration-300 ease-out ${
            isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`bg-textPrimary  block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`bg-textPrimary  block h-0.5 w-6 rounded-sm -translate-y-0.5 transition-all duration-300 ease-out ${
            isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        />
      </button>
      <div className='w-full flex-center md:justify-start md:w-52 text-2xl font-bold'>
        <p>Paul Sissions</p>
      </div>
      <div className='w-full justify-between items-center hidden md:flex '>
        <nav className='flex space-x-4'>
          {links.map((link) => (
            <CustomLink href={link.href} title={link.title} key={link.href} />
          ))}
        </nav>
        <nav className='flex-center flex-wrap space-x-4'>{socials()}</nav>
      </div>
      {isMenuOpen && (
        <motion.div
          className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !z-[80] bg-textPrimary/90  rounded-lg backdrop-blur-md py-32 order-1'
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
    </header>
  );
}

export default Navbar;
