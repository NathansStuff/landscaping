'use client';

import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

function Skill({ name, x, y }: SkillProps) {
  return (
    <motion.div
      className='flex-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark py-3 px-6 shadow-dark dark:shadow-light cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold '
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
}

export default Skill;
