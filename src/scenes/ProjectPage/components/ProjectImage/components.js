import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import {
  gridColWidth,
  largeUp,
  mediumUp,
  spacing
} from '../../../../styles/mixins'
import img from './preview-111.jpg'


export const ProjectImg = styled(motion.div)`
  ${gridColWidth()}; //mobile-first
  padding: 0;
  cursor: pointer;
  position: relative;
  height: 100%;

  & .effect {
    color: tomato;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    // this one fixes gradient text line breaks safari bug: https://zellwk.com/blog/multi-line-gradient-links/
    -webkit-box-decoration-break: clone;
    background-image: linear-gradient(
      137.81deg,
      #e7a28f 3.52%,
      //#f9d6ac 41.89%,
      #fbfefc 96.77%
    );
  }

  ${mediumUp(css`
    grid-row: 1;
    ${gridColWidth(21, 59)};
    
  `)};

  

  .outer-div {
    background: ${({ theme }) => theme.palette.secondary.main};
    z-index: -99;
    pointer-events: none;
    position: relative;
    //transition: transform 1.2s cubic-bezier(0.075, 0.82, 0.005, 1);
    //border: thick solid deeppink;


    ${spacing('p', 1)};

    ${largeUp(css`
      ${spacing('pl', 7)};
      //justify-content: flex-end;
    `)};
  }

  .inner-div {
    //display: none;
    position: relative;
    z-index: 1;
    //border: thick solid yellow;
    max-height: 400px;
    //overflow: hidden;
    
  }

  img {
    ${largeUp(css`
      //min-height: 400px;
      width: 100%;
      height: 100%;
      //width: 100%;
      object-fit: cover;
      //max-height: 65%;

      transition: opacity 0s !important;


    `)};
  }

  .project-image{
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    max-height: 400px;

  }

  .image-over {
    //display: none;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    //z-index: 1000;

    .image-cover {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: tomato;
      z-index: 1000;
      
      &:last-child{
        background-image: linear-gradient(
                137.81deg,
                #e7a28f 3.52%,
                #f9d6ac 41.89%,
                #fbfefc 96.77%
        );
      }
    }

    .image-cover:last-child {
      
    }
  }
`

export const OverflowWrapper = styled(motion.div)`
  z-index: 999;
  overflow: hidden;
  display: none;
  position: absolute;
  font-size: 9rem;
  font-family: Poppins Black, serif;
  font-weight: 900;
  bottom: 2%;
  right: -5%;

  ${largeUp(css`
    display: block;
  `)};
`