import React from "react";
import styled, { css } from "styled-components";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { transition } from "../variants";
import { largeUp } from "../../../../styles/mixins/breakpoints";

const TagsContainer = styled(Typography)`
    display: none;
    font-weight: 300;
    line-height: 1.6em;
    letter-spacing: 0.5px;
    //color: #b3afaf;
    opacity: 0.45;

    color: tomato;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // this one fixes gradient text line breaks safari bug: https://zellwk.com/blog/multi-line-gradient-links/
    -webkit-box-decoration-break: clone;

    background-image: linear-gradient(
            137.81deg,
            #e7a28f 3.52%,
            #f9d6ac 41.89%,
            #fbfefc 100.77%
    );

    //border: thin solid red;

    ${largeUp(css`
        display: block;
        //margin-top: -1rem;
    `)};
`;

const tagVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },

  animate: {
    opacity: 1,
    y: "-150%",
  },

  fromProjectsInitial: {
    opacity: 0,
    y: 0,
  },

  fromProjectsAnimate: {
    opacity: 1,
    y: "-150%",
  },

  exit: {
    opacity: 0,
    y: "-140%",
    transition: {
      duration: 0.3,
      delay: 0,
    },
  },

  transition: {
    ease: [0.6, 0.01, 0, 0.9],
    duration: 2,
    delay: 0.8,
  },
};

const Tags = ({ txt }) => {
  return (
    <motion.div variants={tagVariants} transition={tagVariants.transition}>
      <TagsContainer variant={"subtitle2"}>{txt}</TagsContainer>
    </motion.div>
  );
};

export default Tags;
