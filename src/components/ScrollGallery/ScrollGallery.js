import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useSpring, useTransform } from 'framer-motion'
import { AppStateContext } from '../../contexts/AppStateContext'
import ImageGrid from '../../scenes/HomePage/RecentDesigns/ImageGrid'
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


const Gallery = ({
  imageRow,
  target,
}) => {

  const {
    moScroll,
  } = useContext(AppStateContext)

  const [a, setA] = useState(false)

  const mapped = useTransform(moScroll.y, [0, moScroll.limit.get()], [-40, -1300])

  const x = useSpring(mapped, {
    mass: .5,  damping: 10, stiffness: 50,
  })

  useEffect(() => {
    setA(true)
  }, [])

  return (
    <ScrollContainer>
      <ScrollWrapper id={`image_row_container${target}`}>
        <ScrollTrack
          // data-scroll
          // data-scroll-speed={speed}
          // // data-scroll-target={`#image_row_container${target}`}
          // data-scroll-direction="horizontal"
          // data-scroll-delay='.08'
          style={{x: x}}
        >
          {imageRow.map((item, index) => {
            return <ImageGrid images={item} idx={index} key={item[0].name + index} />
          })}
        </ScrollTrack>
      </ScrollWrapper>

    </ScrollContainer>
  )
}

export default Gallery
