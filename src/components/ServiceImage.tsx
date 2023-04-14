'use client';

import Image from 'next/image';

function ServiceImage() {
  return (
    <div className='relative w-72 h-72 overflow-hidden cursor-pointer'>
      <div className='absolute top-0 left-0 w-full h-full bg-white/50 z-10 opacity-0 transition-all duration-500 hover:opacity-100 flex items-center justify-center'>
        <h2 className='text-2xl font-bold'>Walls</h2>
      </div>
      <Image
        src='/landscaping.jpg'
        alt='hero'
        layout='fill'
        objectFit='cover'
        className='rounded-lg transform transition-all duration-500 hover:scale-110 hover:opacity-50'
      />
    </div>
  );
}

export default ServiceImage;
