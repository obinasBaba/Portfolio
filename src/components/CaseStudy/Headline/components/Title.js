import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { transition } from "../variants";
import { spacing, titleTxt } from "../../../../styles/mixins";

const HeaderTitle = styled(motion.h1)`
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
  //border: thin solid lightblue;
  letter-spacing: 2.5px;
  font-family: "Poppins Black", serif;
  word-break: break-word;

  ${spacing("mt", 2)}
  ${titleTxt(3.35)};

  .word {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-word;
    vertical-align: top;
    border: thin solid red;
  }
`;

function Title({ titleTxt }) {
  return (
    <HeaderTitle className="titleTxt" variants={{}} transition={transition}>
      {titleTxt.split(" ").map((word, i) => (
        <motion.span key={word + i} className="word">
          {word}&#160;
        </motion.span>
      ))}
    </HeaderTitle>
  );
}

export default Title;
