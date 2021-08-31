import React, { useEffect, useLayoutEffect } from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { useProjectSvg } from '../../../../../hooks/queries/useProjectSvg'
import { ReactSVG } from 'react-svg'
import {heightWidth, spacing, text} from '../../../../../styles/mixins'
import { Link } from 'gatsby'

const RightArrowContainer = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: ${({ len }) => len};

  ${({ mt }) => css`
    ${spacing('mt', mt)}
  `};
  
`

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  //border: thin solid red;
  margin-top: -5px;
  //gap: .5rem;
`

const ArrowLine = styled.div`
  height: 1px;
  background-image: linear-gradient(
    to right,
    #e7a28f 13.52%,
    #f9d6ac 41.89%,
    #fbfefc 86.77%
  );
  border-radius: 500px;
  flex: 1;
`

const Arrow = styled.div`
  //border: thin solid green;
  position: relative;
  z-index: 0;
  margin: 0 auto;
  max-width: 50px;
  ${heightWidth('width', 5)};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);
  

  & :hover {
    .svg-wrapper {
      transform: scale(1.1) translateX(0);
      transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-30% , -35%);
    display: block;
    
    ${spacing('p', 4)};
  }

  & .svg-wrapper {
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);
    transform: translateX(-12px);
    //border: thin solid black;

    svg {
      max-width: 100%;
      width: 100%;
    }
  }

  a {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //z-index: 1;
  }
`

const Text = styled.p`
  ${({ txtStyle }) =>
    txtStyle ??
    css`
      margin: 0;
      padding: 0;
      display: block;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 300;

      ${text(0.8)};
    `};
`

const RightArrowLink = ({
  mt = 0,
  txt,
  lineLength = '100%',
  txtStyle,
  link = '/',
  target,
  tooTipTxt,
}) => {
  const { rightArrow } = useProjectSvg()

  return (
    <RightArrowContainer len={lineLength} mt={mt}>
      <Text txtStyle={txtStyle}>{txt}</Text>

      <ArrowContainer>
        <ArrowLine />
        <Arrow
          className="arrow"
          data-tooltip
          data-pointer='stuck'
          data-tooltip-text={tooTipTxt}
        >
          {target ? (
            <a href={link} target={target}>
              <ReactSVG className="svg-wrapper" src={rightArrow.publicURL} />
            </a>
          ) : (
            <Link to={link}>
              <ReactSVG className="svg-wrapper" src={rightArrow.publicURL} />
            </Link>
          )}
        </Arrow>
      </ArrowContainer>
    </RightArrowContainer>
  )
}

export default RightArrowLink
