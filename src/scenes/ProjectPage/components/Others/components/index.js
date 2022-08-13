import styled, { css } from "styled-components";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { spacing } from "@/styles/mixins";
import { mediumUp } from "@/styles/mixins/breakpoints";

export const OthersContainer = styled( motion.div )`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;


  svg {
    position: absolute;
    //border: thin solid lightblue;
    pointer-events: none;
    //will-change: transform;
    //border: thin solid red;


    .distort__img {
      //opacity: 0;
      z-index: -1;
      object-fit: cover;
      //width: 400px;
      //max-width: 500px;
    }
  }
`;


export const Title = styled( Typography )`
  line-height: 1.25em;
  font-weight: 900;
  grid-row: 1;
  -webkit-text-stroke: 1px white;
  color: transparent;
  text-align: left;
  writing-mode: vertical-lr;
  letter-spacing: 6px;
  text-orientation: mixed;

  ${spacing( "ml", 1 )};


  ${mediumUp( css`
    ${spacing( "ml", 15 )};

  ` )};

`;

export const List = styled( motion.ul )`
  z-index: 1;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  flex-flow: wrap;
  justify-content: space-around;

  //border: thin solid red;


  ${spacing( "gap", 2 )};

  ${mediumUp( css`
    ${spacing( "m", 5 )};
    ${spacing( "mh", 10 )};
    ${spacing( "gap", 5 )};
  ` )};

`;


