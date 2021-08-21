import React, {useEffect, useLayoutEffect} from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { useProjectSvg } from '../../../../../hooks/queries/useProjectSvg'
import { ReactSVG } from 'react-svg'
import { spacing, text } from '../../../../../styles/mixins'
import {Link} from 'gatsby'

const RightArrowContainer = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  //margin-top: -5px;
  width: ${({ len }) => len};

  ${({ mt }) => css`
    ${spacing('mt', mt)}
  `};
  
  & :hover{
    .arrow{
      transform: translateX(50%) ;
      transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);
    }
  }
`

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: -5px;
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
  max-width: 50px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  z-index: 0;
  transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);

  

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);


    svg {
      max-width: 100%;
      width: 100%;
    }

    & :hover{
      transform: scale(1.2);
      transition: transform 1s cubic-bezier(0.6, 0.01, 0, 0.9);
    }
  }

  a{
    position: absolute;
    //pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //z-index: 1;
  }
  
`


const Text = styled.p`
  ${({ txtStyle }) => txtStyle ?? css`
    margin: 0;
    padding: 0;
    display: block;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;

    ${text(0.8)};

  ` };
`

const RightArrowLink = ({
  mt = 0,
  txt,
  lineLength = '100%',
  txtStyle ,
  link = '/',
  target,
  tooTipTxt
}) => {
  const { rightArrow } = useProjectSvg()

  return (
    <RightArrowContainer len={lineLength} mt={mt}>
      <Text txtStyle={txtStyle} >{txt}</Text>

      <ArrowContainer>
        <ArrowLine />
        <Arrow className='arrow' data-tooltip data-tooltip-text={tooTipTxt} >
          { target ? <a href={link} target={target}/> : <Link to={link} /> }
          <ReactSVG src={rightArrow.publicURL} />
        </Arrow>
      </ArrowContainer>
    </RightArrowContainer>
  )
}

export default RightArrowLink
