import React, {useContext, useEffect, useRef, useState} from 'react'
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
import {useApproachAssets} from '../../../hooks/queries/useApproachAssets'
import WavyLines from './WavyLines'
import {AppStateContext} from '../../../contexts/AppStateContext'

const ProcessContainer = styled.div`
  // --bg : ${ ({inView}) => inView ? '#02021e' : 'rgba(2,2,30,0)' };
  
  height: 500vh; 
  overflow: visible;
  position: relative;
  //margin: 10rem 0;
  padding: 14rem 0 10rem;
  //background: var(--bg);
  
  transition: background 1s cubic-bezier(0.6, 0.01, 0, 0.9);
  
  .wavy{
    position: sticky;
    top: 0;
  }
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
  //border: thin dashed #89dc14;
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
  width: 250vw;
  & > :not( :last-child ){
    margin-right: 11rem;
  }
`



//
const MyProcess = () => {
   const { top, setTop, } = useContext(AppStateContext);

  const { build, design, pentool, phone, rocket } = useApproachAssets();
  const icons = [ phone,  pentool, design, build, rocket ];

  const maskRef = useRef(null);
  const containerRef = useRef(null);
  const [inView, setInview] = useState(false)



  let lastScrollTop = useMotionValue(0);
  let dir = useMotionValue('down');

  const { scrollYProgress } = useViewportScroll()
  const rootM = useMotionValue(0);


  const intersection = useIntersection(maskRef, {
    root: null,
    rootMargin: `100px 0px -${rootM.get()}px 0px`,
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
      // setTop(yBeforeIntersection.get())
      intersected.set( true )
      yAfterIntersection.set(i - yBeforeIntersection.get())

    }else {

      if ( !intersected.get() )
        yBeforeIntersection.set( i )
    }

  })

  useEffect(() => {

    let style = getComputedStyle(maskRef.current);
    const rootMargin = window.innerHeight - style.top.substring(0, style.top.length - 2);
    rootM.set(rootMargin)

    let rect = maskRef.current.getBoundingClientRect();

    const ff = (e) => {

      // console.log('yBefore : ', yBeforeIntersection.get(), 'top: ', top)
      // console.log(rect.top + window.scrollY, window.scrollY)

      // console.log('root', style.top, window.innerHeight)
      // console.log(containerRef.current.getBoundingClientRect())
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


    }, [])


  return (
    <ProcessContainer ref={containerRef} inView={inView} >

      <div className="wavy">
        <WavyLines/>
      </div>

      <ProcessTxt  inView={inView} variant='h1' className='title' noWrap={true}>My Approach</ProcessTxt>

      <ProcessMask ref={maskRef} >

        <ProcessTrack  style={{ x }}  >

          {
            processData.map(( {no, title, txt, icon, keys, path}, index ) =>
              <Card key={title} no={no} title={title} txt={txt} Icon={icon}
                    index={index}
                    path={icons[index].publicURL }
                    methodologies={keys}  />
            )

          }

        </ProcessTrack>
      </ProcessMask>
    </ProcessContainer>
  )
}

export default MyProcess
