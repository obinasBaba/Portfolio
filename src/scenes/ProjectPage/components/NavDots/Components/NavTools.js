import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {spacing} from '../../../../../styles/mixins'
import {Link} from 'gatsby'

const BigDotContainer = styled( motion.div )`
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  margin: 5px;
  margin-bottom: 8px;
  
  //border: thin solid red;
  
  a{
    text-decoration: none;
    //all: unset;
  }
  
  svg{
    //margin-top: -5px;
  }
`

export const BigDot = ( {onClick, anchor} ) => {
  return (
    <BigDotContainer layout onClick={() => {onClick();}}  >


        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9">
          <circle id="bigDot" cx="4.5" cy="4.5" r="4.5" fill="#cbc3af"/>
        </svg>




    </BigDotContainer>
  )
}


const DottedLineContainer = styled( motion.div )`
  
`
export const DottedLine = () => {
  return (
    <DottedLineContainer >
      <svg xmlns="http://www.w3.org/2000/svg" width="1.691" height="35.521" viewBox="0 0 1.691 35.521">
        <ellipse id="Ellipse_6" data-name="Ellipse 6" cx="0.846" cy="0.846" rx="0.846" ry="0.846" fill="#cbc3af"/>
        <ellipse id="Ellipse_6-2" data-name="Ellipse 6" cx="0.846" cy="0.846" rx="0.846" ry="0.846" transform="translate(0 6.766)" fill="#cbc3af"/>
        <ellipse id="Ellipse_6-3" data-name="Ellipse 6" cx="0.846" cy="0.846" rx="0.846" ry="0.846" transform="translate(0 13.532)" fill="#cbc3af"/>
        <ellipse id="Ellipse_6-4" data-name="Ellipse 6" cx="0.846" cy="0.846" rx="0.846" ry="0.846" transform="translate(0 20.298)" fill="#cbc3af"/>
        <ellipse id="Ellipse_6-5" data-name="Ellipse 6" cx="0.846" cy="0.846" rx="0.846" ry="0.846" transform="translate(0 27.064)" fill="#cbc3af"/>
        <ellipse id="Ellipse_6-6" data-name="Ellipse 6" cx="0.846" cy="0.846" rx="0.846" ry="0.846" transform="translate(0 33.83)" fill="#cbc3af"/>
      </svg>
    </DottedLineContainer>
  )
}

const ThumbContainer = styled( motion.div)`
  height: min-content;
  width: min-content;
  //border: thin solid black;
  svg{
    margin-bottom: -2px;

  }
`

const thumbVariants = {
  initial: {
    scale: 1,
  },
  exit: {
    scale: 0,
    transition: {
      duration: .2,
    }
  },
}
export const Thumb = () => {
  return (
    <ThumbContainer variants={thumbVariants}
                    initial='initial'
                    exit='exit'
    >
      <svg xmlns="http://www.w3.org/2000/svg"   width="46" height="58" viewBox="0 0 46 58">
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" y1="0.229" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#3719ca"/>
            <stop offset="1" stopColor="#fff"/>
          </linearGradient>
        </defs>
        <g id="thumb" transform="translate(-65.268 -419.807)">
          <g id="Group_40" data-name="Group 40" transform="translate(81.62 420)">
            <path id="arrow-up" d="M4,0,8,7H0Z" transform="translate(2.648 -0.193)" fill="url(#linear-gradient)"/>
            <circle id="Ellipse_15" data-name="Ellipse 15" cx="7" cy="7" r="7" transform="translate(-0.352 21.807)" fill="url(#linear-gradient)"/>
            <path id="arrow-up-2" data-name="arrow-up" d="M4,0,8,7H0Z" transform="translate(10.648 57.807) rotate(180)" fill="url(#linear-gradient)"/>
          </g>
          <g id="Ellipse_11" data-name="Ellipse 11" transform="translate(68.268 428.807)" fill="none" stroke="#5741c2" stroke-width="1">
            <circle cx="20" cy="20" r="20" stroke="none"/>
            <circle cx="20" cy="20" r="19.5" fill="none"/>
          </g>
          <g id="Ellipse_16" data-name="Ellipse 16" transform="translate(65.268 425.807)" fill="none" stroke="#5741c2" stroke-width="1">
            <circle cx="23" cy="23" r="23" stroke="none"/>
            <circle cx="23" cy="23" r="22.5" fill="none"/>
          </g>
        </g>
      </svg>



    </ThumbContainer>
  )
}


