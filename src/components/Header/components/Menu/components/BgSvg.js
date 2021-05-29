import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useMediaQuery} from '@material-ui/core'


const BgSvg = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
  //border: var(--thin);
`

const BackgroundSvg = () => {

  const lg = "0 0 1200 870";
  const md = "0 0 600 870";
  let sm = "0 0 425 870";

  const [vb, setVb] = useState(sm);

  const lgMatch = useMediaQuery( theme => theme.breakpoints.up('lg') );
  // const smMatch = useMediaQuery( theme => theme.breakpoints.up('sm') );
  const mdMatch = useMediaQuery( theme => theme.breakpoints.up('md') );


  useEffect( () => {

    console.log('lg : ', lgMatch )
    console.log('md : ', mdMatch )

    if ( mdMatch && !lgMatch )
      setVb( md );
    else if ( lgMatch )
      setVb( lg );
    else
      setVb( sm );


  }, [mdMatch, lgMatch] )

  return (
    <BgSvg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox={vb}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.177"
            y1="0.104"
            x2="0.949"
            y2="0.947"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#e7a28f" />
            <stop offset="0.482" stopColor="#f9d6ac" />
            <stop offset="1" stopColor="#fbfefc" />
          </linearGradient>

          <filter
            id="Subtraction_15"
            x="0"
            y="0"
            width="1326"
            height="932"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feFlood floodOpacity="0.59" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>

        <path
          filter="url(#Subtraction_15)"
          id="Subtraction_16"
          data-name="Subtraction 16"
          d="M1243,872H87a3.972,3.972,0,0,1-3.192-1.592A26.94,26.94,0,0,1,107,850.164a27.556,27.556,0,0,0-3-.165H204a27.031,27.031,0,0,0,27-27v-1a27.031,27.031,0,0,0-27-27H104.11a27.513,27.513,0,0,0,2.891-.165A26.952,26.952,0,0,1,83,768V694a26.951,26.951,0,0,0-24-26.835A27.635,27.635,0,0,1,62,667H27A26.979,26.979,0,0,1,0,640v-1a26.976,26.976,0,0,1,27-27H83v-.018c.327.012.662.018,1,.018h35a27.031,27.031,0,0,0,27-27v-1a27.031,27.031,0,0,0-27-27H84c-.312,0-.648.006-1,.018V557H55a26.975,26.975,0,0,1-27-27v-1a26.976,26.976,0,0,1,27-27h4.3A27.006,27.006,0,0,0,83,475.2V249a26.953,26.953,0,0,1,24-26.836,27.577,27.577,0,0,0-3-.165h77a27.03,27.03,0,0,0,27-27v-1a27.031,27.031,0,0,0-27-27h-76.89a27.333,27.333,0,0,0,2.89-.165A26.952,26.952,0,0,1,83,140V23A22.98,22.98,0,0,1,106,0H1243a22.98,22.98,0,0,1,23,23V849a22.98,22.98,0,0,1-23,23Z"
          transform="translate(0)"
          fill="url(#linear-gradient)"
        />
      </svg>
    </BgSvg>
  )
}

export default BackgroundSvg;
