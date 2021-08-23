import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import {
  gridColWidth,
  largeUp,
  mediumUp,
  spacing,
} from '../../../../styles/mixins'
import img from './preview-111.jpg'

export const ProjectImg = styled(motion.div)`
  ${gridColWidth()}; //mobile-first
  position: relative;
  background: ${({ theme }) => theme.palette.secondary.main};

  padding: calc(100vw / 64 * 0.5);
  padding-left: calc(100vw / 64 * 4);

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
    ${gridColWidth(25, 65)};
    margin-right: calc(100vw / 64 * 6); ;
  `)};
  
  //border: thin solid rebeccapurple;
`


export const InnerWrapper = styled(motion.div)`
  //display: none;
  position: relative;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  //max-height: 400px;
  height: 400px;
  //border: thin solid red;

  img {
    //display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    //transition: filter 1.5s cubic-bezier(0.77, 0, 0.175, 1)
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

      &:last-child {
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
  
  a{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
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
