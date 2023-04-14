'use client';

import Image from 'next/image';

function CategoryImage() {
  return (
    <div className='relative w-72 h-72  cursor-pointer'>
      <Image
        src='/landscaping.jpg'
        alt='hero'
        layout='fill'
        objectFit='cover'
        className='rounded-lg transform transition-all duration-500 hover:scale-110 '
      />
    </div>
  );
}

export default CategoryImage;
