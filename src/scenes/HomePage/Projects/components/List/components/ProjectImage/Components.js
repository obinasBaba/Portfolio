import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'
import {
  gridColWidth,
  largeUp,
  mediumUp, spacing,
} from '../../../../../../../styles/mixins'

export const ProjectImg = styled(motion.div)`
  ${gridColWidth()}; //mobile-first
  padding: 0;
  cursor: pointer;
  position: relative;
  height: 100%;

  &:hover > .outer-div {
    //transform: scale(0.97);
  }

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
    ${({ reversed }) =>
  reversed ? gridColWidth(21, 59) : gridColWidth(6, 46)};
  `)};

  img {
    ${largeUp(css`
      min-height: 400px;
      width: 100%;
      height: 100%;
    `)};
  }

  .outer-div {
    background: ${({ theme }) => theme.palette.secondary.main};
    transition: transform 1.2s cubic-bezier(0.075, 0.82, 0.005, 1);
    pointer-events: none;
    

    ${spacing('p', 1)};
    ${largeUp(css`
      ${({ reversed }) =>
  reversed
    ? css`
              ${spacing('pl', 9)};
              justify-content: flex-end;
            `
    : css`
              ${spacing('pr', 9)};
            `};
    `)};
  }
  
  .image-over{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1000;
    
    .image-cover{
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: tomato;
    }
    
    .image-cover:last-child{
      background-image: linear-gradient(
              137.81deg,
              #e7a28f 3.52%,
              #f9d6ac 41.89%,
              #fbfefc 96.77%
      );
    }
    
  }
  
`

export const OverflowWrapper = styled( motion.div )`
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