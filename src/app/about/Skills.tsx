'use client';

import Skill from '@/components/Skill';
import { motion } from 'framer-motion';

interface SkillsProps {
  skills: string[];
}

function Skills({ skills }: SkillsProps) {
  const positions = [
    { x: '-25vw', y: '2vw' },
    { x: '-5vw', y: '-11vw' },
    { x: '20vw', y: '6vw' },
    { x: '0vw', y: '11vw' },
    { x: '-20vw', y: '-15vw' },
    { x: '-15vw', y: '12vw' },
    { x: '-32vw', y: '-5vw' },
    { x: '0vw', y: '-20vw' },
    { x: '-25vw', y: '18vw' },
    { x: '18vw', y: '20vw' },
    { x: '-25vw', y: '2vw' },
    { x: '20vw', y: '-10vw' },
    { x: '20vw', y: '-19vw' },
    { x: '38vw', y: '2vw' },
  ];
  return (
    <>
      <h1 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h1>
      <div className='w-full h-screen relative flex-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div
          className='flex-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark p-8 shadow-dark dark:shadow-light cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2'
          whileHover={{ scale: 1.05 }}
        >
          {skills[0]}
        </motion.div>
        {skills.map((skill, index) => {
          if (index === 0) return; // no need to
          const position = positions[index];
          return <Skill key={index} name={skill} x={position.x} y={position.y} />;
        })}
      </div>
    </>
  );
}

export default Skills;
