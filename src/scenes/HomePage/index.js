import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MotionValueContext } from '@contexts/MotionStateWrapper';
import ToProjects from './ToProjects';
import { SectionWrapper } from '@components/Container';
import BlogPosts from '@scenes/HomePage/BlogPosts';
import Experiments from '@scenes/HomePage/Experiments';
import RecentWorks from '@scenes/HomePage/RecentDesigns';
import Hero from '@scenes/HomePage/Hero';

const containerVariants = {
  exit (arg) {
    if (arg?.inView.get()) return {};

    return {
      opacity: 0,
    };
  },
};

export const pageTransition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],
};

function HomePage () {

  return (
    <motion.main
      variants={containerVariants}
      className='homepage-container'
      transition={pageTransition}
      initial='initial'
      animate={'animate'}
      exit='exit'
      // whileInView='inView'
    >
      <Hero />

      <RecentWorks />

      <ToProjects />

      <SectionWrapper dataScrollSection>
        <Experiments />
      </SectionWrapper>

      <SectionWrapper dataScrollSection>
        <BlogPosts />
      </SectionWrapper>
    </motion.main>
  );
}

export default HomePage;
