'use client';

import { IExperience } from '@/types/IExperience';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';
import { SanityText } from './SanityText';

interface ExperienceDetailsProps {
  experience: IExperience;
}

export function ExperienceDetails({ experience }: ExperienceDetailsProps) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}>
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {experience.title}&nbsp;
          <a href={experience.employerLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>
            @{experience.employer}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm w-full'>
          {experience.dates} | {experience.location}
        </span>
        <p className='font-medium w-full md:text-sm'>
          <SanityText content={experience.description} />
        </p>
      </motion.div>
    </li>
  );
}
