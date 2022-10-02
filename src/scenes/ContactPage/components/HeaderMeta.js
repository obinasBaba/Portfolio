import React from "react";
import styled, { css } from "styled-components";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { spacing } from "../../../styles/mixins";
import { transition } from "./shared";
import { largeUp, mediumUp } from "../../../styles/mixins/breakpoints";

const HeaderMetaContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  ${spacing("gap", 3)};
  ${spacing("mt", 15)};

  ${largeUp(css`
    flex-flow: row;
    ${spacing("mt", 5)};
  `)};

  & * {
    font-weight: lighter;
    color: #617683;
    letter-spacing: 1px;
  }
`;

const metaVariants = {
  initial: {},

  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.17,
      staggerDirection: -1,
    },
  },

  exit: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.17,
      staggerDirection: 1,
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
    y: "-110%",
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  exit: {
    opacity: 0,
    y: "-110%",
  },
};

function HeaderMeta() {
  return (
    <HeaderMetaContainer variants={metaVariants} transition={transition}>
      <motion.div variants={childVariants} transition={transition}>
        <Typography variant="body2">hi@henzzo.com</Typography>
      </motion.div>

      <motion.div variants={childVariants} transition={transition}>
        <Typography variant="body2">+251 923 36 5539</Typography>
      </motion.div>
    </HeaderMetaContainer>
  );
}

export default HeaderMeta;
