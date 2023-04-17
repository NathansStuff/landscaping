'use client';

import { IJob } from '@/types/IJob';
import Image from 'next/image';
import Link from 'next/link';

interface ICategoryImageProps {
  category: IJob;
}

function CategoryImage({ category }: ICategoryImageProps) {
  return (
    <Link href={`/jobs/${category.slug}`}>
      <div className='relative w-72 h-72  cursor-pointer'>
        <Image
          src={category.heroImage}
          alt={category.title}
          layout='fill'
          objectFit='cover'
          className='rounded-lg transform transition-all duration-500 hover:scale-110 '
        />
      </div>
    </Link>
  );
}

export default CategoryImage;
