'use client';

import CustomIcon from '@/components/CustomIcon';
import CustomLink from '@/components/CustomLink';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';
import YoutubeIcon from '@/components/icons/YoutubeIcon';
import { ICategory } from '@/types/ICategory';
import { capitalize } from '@/utils/capitalize';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface NavbarProps {
  categories: ICategory[];
}

const constantLinks: {
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
];

const socialPlatforms = (swapColors: boolean = false) => [
  {
    name: 'facebook',
    url: 'details.github',
    icon: <FacebookIcon />,
  },
  {
    name: 'linkedin',
    url: 'details.linkedin',
    icon: <LinkedinIcon />,
  },
  {
    name: 'youtube',
    url: 'details.youtube',
    icon: <YoutubeIcon />,
  },
  {
    name: 'twitter',
    url: 'details.twitter',
    icon: <TwitterIcon />,
  },
  {
    name: 'instagram',
    url: 'details.instagram',
    icon: <InstagramIcon />,
  },
];

function Navbar({ categories }: NavbarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  let links = [...constantLinks];
  categories.forEach((category) => {
    if (links.some((link) => link.href === `/services/${category.slug}`)) return;
    links = [
      ...links,
      {
        href: `/services/${category.slug}`,
        title: capitalize(category.title),
      },
    ];
  });

  const socials = (swapColors: boolean = false) =>
    socialPlatforms(swapColors)
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
        <Image src='/logo.svg' alt='Paul Sissions' width={80} height={60} className='-pb-2' />
      <div className='w-full justify-between items-center hidden md:flex '>
        <nav className='flex space-x-4'>
          {links.map((link) => (
            <CustomLink href={link.href} title={link.title} key={link.href} />
          ))}
        </nav>
        {/* <nav className='flex-center flex-wrap space-x-4'>{socials()}</nav> */}
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
