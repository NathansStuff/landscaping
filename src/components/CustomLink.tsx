'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  target?: string;
  toggle?: () => void;
  isMobile?: boolean;
}

function CustomLink({ href, title, className, target, toggle, isMobile = false }: CustomLinkProps): JSX.Element {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`relative group ${className} ${isMobile ? 'text-light dark:text-dark ' : ''}`}
      target={target}
      onClick={toggle}
    >
      {title}
      <span className='sr-only'>{title}</span>
      <span
        className={`h-[1px] inline-block w-full absolute left-0 -bottom-0.5 group-hover:!w-full transition-[width] ease duration-300 ${
          pathname === href ? 'w-full' : '!w-0'
        }
         ${isMobile ? ' bg-light dark:bg-dark' : 'bg-dark dark:bg-light'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
}

export default CustomLink;
