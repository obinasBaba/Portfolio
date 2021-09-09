import React, { useContext, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { motion, useSpring, useTransform } from 'framer-motion'
import { AppStateContext } from '../../contexts/AppStateContext'
import ImageGrid from '../../scenes/HomePage/RecentDesigns/ImageGrid'
import { Typography } from '@material-ui/core'
import { spacing } from '../../styles/mixins'

const ScrollContainer = styled.section`
  position: relative;
  width: 100%;
  
  //border: 3px solid red;

  
`

const ScrollWrapper = styled.div`
  position: relative;
  padding: 1rem 0;
  transform: translateX(-50%);

  &:nth-of-type(2) {
    transform: translateX(-20%);
  }

  ${spacing('mb', 13)};
`

const ScrollTrack = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  transition: transform cubic-bezier(0.6, 0.01, 0, 0.9);
`

const ScrollTrackText = styled(Typography)`
  position: absolute;
  left: 7%;
  bottom: 40%;

  font-family: 'Bodoni Moda', serif;
  font-weight: 900;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.61);
  // border: 1px solid black;
  mix-blend-mode: difference;
  
`

const Gallery = ({
  imageRow,
  speed = 3,
  delay = 0.03,
  target,
  right = false,
  txt=''
}) => {
  return (
    <ScrollContainer>
      <ScrollWrapper id={`image_row_container${target}`}>
        <ScrollTrack
          data-scroll
          data-scroll-speed={speed}
          // data-scroll-target={`#image_row_container${target}`}
          data-scroll-direction="horizontal"
          data-scroll-delay='.3'
        >
          {imageRow.map((item, index) => {
            return <ImageGrid images={item} idx={index} key={item[0].name + index} />
          })}
        </ScrollTrack>
      </ScrollWrapper>

    {/*  <ScrollTrackText
        variant="h1"
        data-scroll
        data-scroll-speed="2"
        right={right}
      >
        {txt}
      </ScrollTrackText>*/}
    </ScrollContainer>
  )
}

export default Gallery
