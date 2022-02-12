import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion, useMotionTemplate, useSpring, useTransform} from 'framer-motion'
import ImageGrid from '../../scenes/HomePage/RecentDesigns/ImageGrid'
import { spacing } from '../../styles/mixins'
import { MotionValueContext } from "../../contexts/MotionStateWrapper";
import useHomeWorksAssets from "../../hooks/queries/useHomeWorksAssets";

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


const Gallery = () => {

  const {
    moScroll,
  } = useContext(MotionValueContext)

  const {
    Art,
    eScooter,
    Web,
    Hommy,
    Investments,
    Lazy,
    Starbank,
    Teampoint,
    Travel,
    Tude,
    Realty,
    North,
  } = useHomeWorksAssets();

  const imageList = [
    [Web],
    [Investments, Travel, Starbank],
    [eScooter],
    [Art, Lazy, Teampoint],
    [North],
    [Realty, Hommy, Tude],
    [Web],

  ];

  const mapped = useTransform(moScroll.y, [0, moScroll.limit.get()], [0, -100])

  const x = useSpring(mapped, {
    mass: .5,  damping: 10, stiffness: 50,
  })

  const template = useMotionTemplate`${x}%`


  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    setRefresh(true)

  }, [refresh])


  return (
    <ScrollContainer>
      <ScrollWrapper id={`image_row_container`}>
        <ScrollTrack
            className='rd-scroll-track'
            style={{x: template}}
        >
          {imageList.map((item, index) =>
              <ImageGrid images={item} idx={index} key={item[0].name + index} />
          )}
        </ScrollTrack>
      </ScrollWrapper>

    </ScrollContainer>
  )
}

export default Gallery
