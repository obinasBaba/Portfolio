import React, { useEffect, useRef } from 'react'
import { List, OthersContainer, Title } from './components'
import { motion, useAnimation, useMotionValue } from 'framer-motion'

import one from './img/2.jpg'
import two from './img/1.jpg'
import three from './img/4.jpg'
import four from './img/5.jpg'
import { useIntersection } from 'react-use'
import { distance, getMousePos, lerp } from './util'
import Item from './components/Item'


const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
  },
  exit: {},

  hover(c){
    return{
      opacity: c.hovering() ? 1 : 0,
    }
  },

  hoverEnd: {
    opacity: 0,
    transition: {
      duration: .5,
      ease: 'easeOut'
    }
  }
}



const Others = ({ auth, kklLuzern, udemy, active }) => {


  const cancelId = useRef(null)
  const dmScale = useRef( 0);
  const current = useRef( -1);
  const containerRef = useRef(null)
  const feDisplacementMapEl = useRef(null)
  const svgRef = useRef(null)
  const svgRect = useRef({width: 0, height: 0})

  const mousePos = useRef({x:  0,
    y:   0})

  const lastMousePos = useRef({
    translation: {
      x:  0,
      y:   0
    },

    displacement: { x: 0, y: 0 },
  })

  const intersection = useIntersection(containerRef, {
    threshold: 1,
  });


  const titles = ['Watchbox', 'Landing-page', 'Following Filmore', 'Kayam' ]
  const svgController = useAnimation();
  const hoverIndex = useMotionValue(-1);

  useEffect(() => {
    feDisplacementMapEl.current = svgRef.current.querySelector('feDisplacementMap')
    svgRect.current = svgRef.current.getBoundingClientRect()

  }, [])


  useEffect(() => {

    // window.addEventListener('resize', calcWinsize);

    let trackMousePos = ev => {
      if ( mousePos.current )
        mousePos.current = getMousePos(ev)
    }

    window.addEventListener('mousemove', trackMousePos);

    if ( intersection && !intersection.isIntersecting )
      cancelAnimationFrame(cancelId.current)
    else
      track();

    return () => window.removeEventListener('mousemove', trackMousePos)

  }, [intersection])

  const track = () => {
    lastMousePos.current.translation.x =
      lerp(lastMousePos.current.translation.x, mousePos.current.x, 0.1);

    lastMousePos.current.translation.y =
      lerp(lastMousePos.current.translation.y, mousePos.current.y, 0.1);

    // console.log('x:', lastMousePos.current.translation.x, 'y: ', lastMousePos.current.translation.y)

    svgRef.current.style.transform =
      `translateX(${(lastMousePos.current.translation.x - window.innerWidth/2 )}px)
       translateY(${lastMousePos.current.translation.y - window.innerHeight/2}px)`;

    // console.log('x:', svgRef.current.getBoundingClientRect().x, 'y: ',
    //   svgRef.current.getBoundingClientRect().y)

    console.log('running : ', cancelId.current)

    // Scale goes from 0 to 100 for mouseDistance values between 0 to 100
    lastMousePos.current.displacement.x =
      lerp(lastMousePos.current.displacement.x, mousePos.current.x, 0.1);

    lastMousePos.current.displacement.y =
      lerp(lastMousePos.current.displacement.y, mousePos.current.y, 0.1);

    const mouseDistance =
      distance(lastMousePos.current.displacement.x, mousePos.current.x,
        lastMousePos.current.displacement.y, mousePos.current.y);

    dmScale.current = Math.min(mouseDistance, 100);
    feDisplacementMapEl.current.scale.baseVal = dmScale.current;

    // if ( intersection && intersection.isIntersecting )
    cancelId.current = requestAnimationFrame(() => track());
  }


  return (
    <>

      <OthersContainer ref={containerRef}>

        <motion.svg ref={svgRef} className="distort" width="350" height="450" viewBox="0 0 350 450"
                    initial='initial'
                    animate={svgController}
                    exit='exit'
        >
          <filter id="distortionFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.003"
                          numOctaves="5" seed="2" stitchTiles="noStitch" x="0%"
                          y="0%" width="100%" height="100%" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0"
                               xChannelSelector="R" yChannelSelector="B" x="0%"
                               y="0%" width="100%" height="100%"
                               filterUnits="userSpaceOnUse" />
          </filter>
          <g filter="url(#distortionFilter)">
            <motion.image custom={{ hovering: () =>  hoverIndex.get() === 0 }}
                          variants={imgVariants}  className="distort__img" x="50" y="50" xlinkHref={one} height="350" width="250"  />

            <motion.image custom={{ hovering: () => hoverIndex.get() === 1 }}
                          variants={imgVariants} className="distort__img" x="50" y="50" xlinkHref={two} height="350" width="250" />

            <motion.image custom={{ hovering: () => hoverIndex.get() === 2 }}
                          variants={imgVariants} className="distort__img" x="50" y="50" xlinkHref={three} height="350" width="250" />

            <motion.image custom={{ hovering: () => hoverIndex.get() === 3 }}
                          variants={imgVariants} className="distort__img" x="50" y="50" xlinkHref={four} height="350" width="250" />
          </g>
        </motion.svg>

        <Title variant='h2'>
          And Others
        </Title>


        <List variants={{}}
              initial='initial'
              animate='animate'
              exit='exit'
              whileHover='hover'
              onHoverEnd={(  ) => {
                svgController.start('hoverEnd')
              }}
        >

          {
            titles.map((word, index) => {
              let onHoverStart = () => {
                hoverIndex.set(index)
                svgController.start('hover')
              }

              return <Item title={word} onHoverStart={onHoverStart}
                           customData={{ hovering: () => hoverIndex.get() === index }}  />
            })
          }

        </List>
      </OthersContainer>

    </>
  )
}

export default Others
