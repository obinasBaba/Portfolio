import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { MotionValueContext } from "@contexts/MotionStateWrapper";
import { SectionWrapper } from "@components/Container";
import RecentWorks from "./RecentDesigns";
import ToProjects from "./ToProjects";
import BlogPosts from "./BlogPosts";
import Experiments from "./Experiments";
import Hero from "@/scenes/HomePage/Hero";

const containerVariants = {
  exit(arg) {
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

function HomePage() {
  const { mainAnimationController, screenOverlayEvent } =
    useContext(MotionValueContext);

  useEffect(() => {}, []);

  return (
    <motion.main
      variants={containerVariants}
      className="homepage-container"
      transition={pageTransition}
      initial="initial"
      animate={
        screenOverlayEvent.get() === "closed"
          ? "animate"
          : mainAnimationController
      }
      exit="exit"
      whileInView="inView"
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
