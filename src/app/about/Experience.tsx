'use client';

import { ExperienceDetails } from '@/components/ExperiencePoints';
import { IExperience } from '@/types/IExperience';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface ExperienceProps {
  experiences: IExperience[];
}

function Experience({ experiences }: ExperienceProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center start'] });

  return (
    <div className='mt-64 mb-10 md:my-16 w-[75%]'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-8'>Experience</h2>
      <div ref={ref} className='w-full mx-auto relative lg:w-[90%] sm:w-full'>
        <motion.div
          className='absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl sm:left-5'
          style={{ scaleY: scrollYProgress }}
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          {experiences.map((experience) => {
            return <ExperienceDetails experience={experience} key={experience.title} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
