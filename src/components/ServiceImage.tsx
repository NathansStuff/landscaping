'use client';

import { ICategory } from '@/types/ICategory';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceImageProps {
  category: ICategory;
}

function ServiceImage({ category }: ServiceImageProps) {
  return (
    <Link href={`/services/${category.slug}`}>
      <div className='relative w-72 h-72 overflow-hidden cursor-pointer'>
        <div className='absolute top-0 left-0 w-full h-full bg-white/50 z-10 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center'>
          <h2 className='text-2xl font-bold'>{category.title}</h2>
        </div>
        <Image
          src={category.heroImage}
          alt={category.title}
          layout='fill'
          objectFit='cover'
          className='rounded-lg transform transition-all duration-500 hover:scale-110 hover:opacity-50'
        />
      </div>
    </Link>
  );
}

export default ServiceImage;
