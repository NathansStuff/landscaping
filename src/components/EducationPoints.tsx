'use client';

import { IEducation } from '@/types/IEducation';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

interface EducationDetailsProps {
  education: IEducation;
}

export function EducationDetails({ education }: EducationDetailsProps) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className=' w-full'
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg w-full'>{education.title}</h3>
        <span className='capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm w-full'>
          {education.dates}| {education.provider}
        </span>
        <p className='font-medium w-full md:text-sm'>{education.description}</p>
      </motion.div>
    </li>
  );
}
