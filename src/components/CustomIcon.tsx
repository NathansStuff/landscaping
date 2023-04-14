import { motion } from 'framer-motion';
import React from 'react';

interface CustomIconProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function CustomIcon({ children, href, className }: CustomIconProps) {
  return (
    <motion.a href={href} target={'_blank'} className={`w-6 h-6 ${className}`} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.a>
  );
}

export default CustomIcon;
