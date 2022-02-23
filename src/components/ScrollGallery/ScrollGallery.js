import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import {animate, motion, useMotionTemplate, useSpring, useTransform} from 'framer-motion'
import ImageGrid from '../../scenes/HomePage/RecentDesigns/ImageGrid'
import { spacing } from '../../styles/mixins'
import { MotionValueContext } from "../../contexts/MotionStateWrapper";
import useHomeWorksAssets from "../../hooks/queries/useHomeWorksAssets";
import { map } from '../../helpers/utils';
import useMo from "./useMo";

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

 /* const mapped = useTransform(moScroll.y , v => {
    // [0, moScroll.limit.get()], [0, -100]
    let m = map(v, 0, moScroll.limit.get(), 0, -100);
    console.log('maped: ', m)
    return m;

  } )

  const x = useSpring( refresh ? mapped : 0, {
    mass: .5,  damping: 10, stiffness: 50,
  })*/
  const [refresh, setRefresh] = useState(false)

  // const template = useMotionTemplate`${x}%`
  const template = useMo(refresh)



  useEffect(() => {


  }, [])

  useEffect(() => {
    setRefresh(!refresh)
    console.log('moFirst: ', moScroll.y.get())
    moScroll.y.onChange(v => {
      // console.log('yScroll: ', v)

    })
  }, [])


  return (
    <ScrollContainer>
      <ScrollWrapper id={`image_row_container`}>

        {/*<motion.div />*/}
        <ScrollTrack
            className='rd-scroll-track'
            transition={{
              type: 'spring',
              mass: .5,  damping: 10, stiffness: 50,
            }}
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
