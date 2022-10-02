import React from "react";
import styled, { css } from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Link } from "gatsby";
import { AnchorDot, DottedLine, Thumb } from "./NavTools";
import { spacing } from "../../../../../styles/mixins";
import { xLargeUp, xxLargeUp } from "../../../../../styles/mixins/breakpoints";

const ThumbAndDotContainer = styled.li`
  //border: thin solid lightblue;
  position: relative;
  display: grid;
  place-items: center;
  padding: 0;
  margin: 0;
  background-color: white;
  //height: 11px;
  //width: 11px;
  border-radius: 50%;
  transition: transform 0.5s cubic-bezier(0.6, 0.01, 0, 0.9),
    border 0.2s ease-in-out;

  ${spacing("height", 1.2)};
  ${spacing("width", 1.2)};

  & :hover {
    transform: scale(1.4);
    border: 0.5px solid blue;
    transition: transform 0.5s cubic-bezier(0.6, 0.01, 0, 0.9),
      border 0.2s ease-in-out;
  }

  &::after {
    //z-index: -1;
    //content: '';
    display: block;
    position: absolute;
    inset: -30px;
    border-radius: 50%;
  }

  & .thumb {
    z-index: 2;
    position: absolute;
    display: grid;
    place-items: center;

    height: 20px;
    width: 20px;
    //filter: url("#dots-gooey");

    p {
      color: blue;
      font-family: "shapes", serif;
      font-size: 1.4rem;
      line-height: 0;
      margin: 0;
      padding: 0;

      ${xxLargeUp(css`
        font-size: 1.6rem;
      `)};
    }
  }

  & .hover-area {
    grid-column: 1;
    grid-row: 1;
    width: 300%;
    height: 300%;
    border-radius: 50%;
    //border: thin solid crimson;
  }
`;

const spring = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1.5,

  // repeat: Infinity,
  // repeatType: 'mirror',
};

function ThumbAndDot({ hidden, clickEvent, index, anchor, dataAnchor }) {
  return (
    <ThumbAndDotContainer
      onClick={clickEvent}
      key={anchor}
      // layout
    >
      <a
        className="hover-area"
        data-anchor={dataAnchor}
        href={`#${anchor}`}
        data-pointer="focus"
        data-tooltip
        data-tooltip-text="Next project"
        data-pointer-color="#3719ca"
      />

      {hidden && (
        <motion.span
          layoutId="outline"
          // inherit={false}
          initial={false}
          animate={{}}
          transition={spring}
          className="thumb"
        >
          <motion.p>i</motion.p>
        </motion.span>
      )}
    </ThumbAndDotContainer>
  );
}

export default ThumbAndDot;
