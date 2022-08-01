import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import loadable from "@loadable/component";
import Hero from "./Hero";
import { MotionValueContext } from "../../contexts/MotionStateWrapper";
import RecentWorks from "./RecentDesigns";
import ToProjects from "./ToProjects";
import { SectionWrapper } from "../../components/Container";
import BlogPosts from "./BlogPosts";
import Experiments from "./Experiments";

const MailUs = loadable( () => import("../../components/MailUs") );

const containerVariants = {
  exit( arg ){
    if ( arg?.inView.get() ) return {};

    return {
      opacity: 0
    };

  }
};

const transition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9]
};

function HomePage(){

  const {
    mainAnimationController,
    screenOverlayEvent
  } = useContext( MotionValueContext );

  useEffect( () => {

    },
    [] );

  return (< motion.main variants={containerVariants}
                        className="homepage-container"
                        transition={transition}
                        initial="initial"
                        animate={screenOverlayEvent.get() === "closed"
                          ? "animate"
                          : mainAnimationController}
                        exit="exit"
                        whileInView="inView"
  >

    <Hero />

    <RecentWorks />

    <ToProjects />

    <SectionWrapper>
      <Experiments />
    </SectionWrapper>


    <SectionWrapper>
      <BlogPosts />
    </SectionWrapper>


    <MailUs />

  </motion.main>);
}

export default HomePage;
