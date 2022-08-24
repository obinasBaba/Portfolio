import React from "react";
import { GradientText } from "../GradientText";

import { container, sub } from "./headline.module.scss";
import { motion, MotionConfig } from "framer-motion";

const titleVariants = {
  initial: {
    opacity: 0,
    y: "-100%"
  },
  inView: {
    opacity: 1,
    y: 0
  },
  animate: {},
  exit: {}
};

const subVariants = {
  initial: {
    opacity: 0,
    y: "100%"

  },
  inView: {
    opacity: 1,
    y: 0

  },
  animate: {},
  exit: {}
};

const transition = {
  duration: 2,
  // ease: [0.6, 0.01, 0, 0.9],
  ease: [0.165, 0.84, 0.44, 1]

};

function HeadlineTitle( { title, subtitle, mb, clsName, ...props } ){


  return (
    <motion.header className={container} {...props} mb={mb}
                   variants={{}}
                   initial="initial"
                   animate="animate"
                   exit="exit"
                   whileInView="inView"
                   viewport={{
                     amount: "all",
                     once: true
                   }}
    >

      <MotionConfig transition={transition}>

        <motion.div variants={titleVariants}>
          <GradientText variant="h1"
                        noWrap>
            {title}
          </GradientText>
        </motion.div>


        <motion.div variants={subVariants}>
          <GradientText className={sub}
                        align="right" variant="body1" noWrap>
            {subtitle}
          </GradientText>
        </motion.div>

      </MotionConfig>

    </motion.header>
  );
}

export default HeadlineTitle;
