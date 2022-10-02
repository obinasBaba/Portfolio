import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const OverflowOuter = styled(motion.div)`
  overflow: hidden;
  width: max-content;
  pointer-events: initial;

  //border: thin solid red;

  &:hover {
    overflow: visible;
  }

  ${({ cstyle }) => css`
    ${cstyle}
  `};
`;

const OverFlowInner = styled(motion.div)``;

function OverFlowBox({ children, variants, customStyle }) {
  return (
    <OverflowOuter cstyle={customStyle}>
      <OverFlowInner
        variants={variants.inner}
        custom={variants.custom}
        transition={variants.transition}
      >
        {children}
      </OverFlowInner>
    </OverflowOuter>
  );
}

export default OverFlowBox;
