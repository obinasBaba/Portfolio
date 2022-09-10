import styled from "styled-components";
import { motion } from "framer-motion";

export const PageContainer = styled( motion.div )`
  position: relative;
  display: flex;
  flex-flow: column;
  //border: thick solid crimson;
  //overflow: hidden;
  //z-index: 0;

`;

export const BottomGradient = styled.div`
  display: none;
  
  
  --opa: 1;
  
  position: fixed;
  //z-index: 1;
  top: 85%;
  left: 0;
  bottom: 0;
  right: 0;
  //border: 1px solid red;
  pointer-events: none;
  //opacity: var(--btm-gradient-opacity);
  opacity: var(--opa);
  background-image: var(--bottom-gradient);
  transition: all .8s ease-in-out;

  //display: none;

  &.hide-bg {
    --opa: 0;
  }
`;

export const Main = styled( motion.main )`
  position: relative;
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  width: 100%;
  //z-index: 8;
  height: min-content;
  //opacity: 0;
  //z-index: 4;

  &.loaded {
    opacity: 1;
  }

  & > * {
    //z-index: 1;
  }
`;

export const SkyColor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;

  background-image: -webkit-gradient(linear, left top, left bottom, from(#072142), color-stop(#061c37), color-stop(#07182b), color-stop(#061220), to(#020b16));
  background-image: -webkit-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
  background-image: -o-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
  background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);


  //z-index: -300

`;


