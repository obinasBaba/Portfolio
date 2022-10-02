import React from "react";
import styled, { css } from "styled-components";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { spacing, text } from "../../../../styles/mixins";
import { mediumUp, xLargeUp } from "../../../../styles/mixins/breakpoints";

const TextWrapperContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  //width: 85%;
  padding: 0 8%;

  //border: thin solid red;

  .goal {
    //color: var(--medium-blue-color);
    //filter: drop-shadow(0 0 5px rgba(55, 25, 202, 0.64));
  }

  ${spacing("gap", 4)};

  ${mediumUp(css`
    padding: 0 0 0 7%;
    ${spacing("gap", 1)};

    .goal {
      font-weight: bold;
      letter-spacing: 0.1vmax;
      ${spacing("ml", 4)};
    }
  `)};

  .hello {
    font-family: var(--eli);
    font-weight: normal;
    color: white;
    margin-bottom: 0;

    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.69));

    ${xLargeUp(css`
      ${text(7.8)};
    `)};
  }

  .goal-long {
    max-width: 32ch;
    color: #7b8a9b;
    display: block;

    ${text(1.1)};
    ${mediumUp(css`
      ${spacing("ml", 4)};
      ${spacing("mt", 4)};
    `)};
  }
`;

const helloTxtVariants = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transitionEnd: {},
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 1,
      // ease: [0.6, 0.01, 0, 0.9],
      delay: 0.3,
    },
  },

  transition: {
    duration: 1,
    // ease: [0.6, 0.01, 0, 0.9],
  },
};

const introTxtVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 1,
      // ease: [0.6, 0.01, 0, 0.9],
      delay: 0.3,
    },
  },

  transition: {
    duration: 1,
    // ease: [0.6, 0.01, 0, 0.9],
  },
};

function TextWrapper() {
  return (
    <TextWrapperContainer>
      <motion.div
        variants={helloTxtVariants}
        transition={helloTxtVariants.transition}
      >
        <Typography variant="h1" className="hello">
          Hello
        </Typography>
      </motion.div>

      <motion.div
        className="intro-container"
        variants={introTxtVariants}
        transition={introTxtVariants.transition}
      >
        <Typography variant="h4" className="goal" gutterBottom>
          I create progress by designing and <br /> developing digital
          experiences,
        </Typography>

        <Typography className="goal-long" variant="body">
          I believe that we can live in a world in which every product or
          service has an easy to use experience on platforms and my mission is
          to contribute to it to make it happen
        </Typography>
      </motion.div>
    </TextWrapperContainer>
  );
}

export default TextWrapper;
