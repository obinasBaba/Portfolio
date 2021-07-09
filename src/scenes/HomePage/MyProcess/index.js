import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { useIntersection } from 'react-use'
import { Typography } from '@material-ui/core'
import { processData } from './data'
import Card from './Card'

const ProcessContainer = styled.div`
  //border: thin dashed red;
  height: 380vh; 
  overflow: visible;
  position: relative;
  //margin: 10rem 0;
  padding: 14rem 0 15rem;
`

const ProcessTxt = styled( Typography )`
  position: sticky;
  top: 3rem;
  //border: thin dashed burlywood;
  margin-bottom: 3rem;
  margin-left: 7rem;
  //line-height: 100%;
  color: transparent;
  -webkit-text-stroke: 1.5px #f9d6ac;
`

const ProcessMask = styled(motion.div)`
  //border: thick dashed #89dc14;
  margin-top: 4rem;
  padding: 10rem 0 0 17rem;
  top: 4.5rem;
  position: sticky;
  overflow: hidden;
  z-index: 5;
`

const ProcessTrack = styled(motion.div)`
  display: flex;
  //border: thin dashed #ec1f30;
  width: 210vw;
  & > :not( :last-child ){
    margin-right: 11rem;
  }
`




const MyProcess = () => {
  const maskRef = useRef(null);
  const containerRef = useRef(null);

  let lastScrollTop = useMotionValue(0);
  let dir = useMotionValue('down');

  const { scrollYProgress } = useViewportScroll()
  const [ rootMargin, setRootMargin ] = useState(0)


  const intersection = useIntersection(maskRef, {
    root: null,
    rootMargin: `100px 0px -${rootMargin}px 0px`,
    threshold: 0,
  });


  // const background = useMotionValue('#6797c7')
  const intersected = useMotionValue(false);

  const yBeforeIntersection = useMotionValue(0);

  const yAfterIntersection = useMotionValue(0);

  let scroll = useTransform(yAfterIntersection, [0, .5], [0, -4000])

  const x = useSpring(scroll, {
    mass: 1, damping: 10, stiffness: 50
  })

  useTransform(scrollYProgress, (i) => {
    if ( intersection && intersection.isIntersecting ){
      // background.set('#d95b09')
      intersected.set( true )
      yAfterIntersection.set(i - yBeforeIntersection.get())

    }else {

      if ( !intersected.get() )
        yBeforeIntersection.set( i )
      // background.set('#6797c7')
    }

  })

  useEffect(() => {

    let style = getComputedStyle(maskRef.current);
    const rootMargin = window.innerHeight - style.top.substring(0, style.top.length - 2);
    setRootMargin(rootMargin);

    const ff = () => {
      // console.log('root', style.top, window.innerHeight)
      console.log(containerRef.current.getBoundingClientRect())
      // console.log('scroll: ', scroll.get())

      // console.log('vpScroll: ', scrollYProgress.get())

      // console.log('yLatest2: ', yAfterIntersection.get())
    };
    window.addEventListener('scroll', ff)
      return () => window.removeEventListener('scroll', ff)

    }, [])


  useEffect(() => {

    const detectScrollDirection = () => {

      let current = window.pageYOffset || document.body.scrollTop;

      if ( current > lastScrollTop.get() )
        dir.set('down')
      else
        dir.set('up')


      lastScrollTop.set( current <= 0 ? 0 : current )

    };
    window.addEventListener('scroll', detectScrollDirection)
    return () => window.removeEventListener('scroll', detectScrollDirection)

    }, [])


  return (
    <ProcessContainer ref={containerRef} >

      <ProcessTxt variant='h1' noWrap={true}>My Process</ProcessTxt>


      <ProcessMask ref={maskRef} >
        <ProcessTrack  style={{ x }}  >

          {
            processData.map(( {no, title, txt, icon} ) =>
              <Card no={no} title={title} txt={txt} Icon={icon}  />
            )

          }

        </ProcessTrack>
      </ProcessMask>
    </ProcessContainer>
  )
}

export default MyProcess
