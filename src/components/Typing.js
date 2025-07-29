import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Typing = ({ text }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="animated-heading"
    >
      <Typewriter
        words={[text]}
        loop={1}
        cursor={false}
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </motion.h1>
  );
};

export default Typing;
