import React, { useEffect } from 'react'
import {largeUp, smallUp} from '../../styles/mixins'
import styled, { css } from 'styled-components'
import { motion, useSpring } from 'framer-motion'
import { getMousePos } from '../../helpers/utils'

const MoonBg = styled(motion.div)`
  position: ${ ({pos}) => pos ?? 'absolute' };
  top: 0;
  left: 0;
  right: 0;
  height: 1185px;
  width: 100%;
  margin-left: auto;
  //overflow: hidden;
  //z-index: -1;
  pointer-events: none;
  //border: thick solid red;

  .moonlight {
    //border: thick solid yellow;
    position: absolute;
    margin: auto;
    height: 1185px;
    bottom: 0;
    left: -40%;
    right: -40%;
    top: -66%;
    width: initial;
    //transform: translateX(-20%);
    
    ${smallUp(css`
      transform: translateX(0%);
      left: 0%;

      right: -70%;
      width: 170%;
      //top: 0;
      top: -45%;
    `)};
    
    ${largeUp( css`
    
      right: 0;
      width: 150%;
    ` )};
    

    & > svg {
      
      .path_73{
        filter: blur(10px);
        transform: scale(.95);

      }

    }
  }
`

const defaultMoonVariant = {
  transition: {
    duration: 1,
    ease: [0.6, 0.01, 0, 0.9],
  },

  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
  },
}

const config = {
  mass: 0.5,
  stiffness: 30,
  damping: 10,
}

const MoonLight = ({ zIndex, pos = 'fixed', showMoon = true, show = true, variants = {} }) => {
  const x = useSpring(0, config)
  const y = useSpring(0, config)

  // const x = useTransform(xs, x => x / 38 * -1)
  // const y = useTransform(ys, y => y / 25 * -1)

  useEffect(() => {
    let trackMousePos = ev => {
      x.set((getMousePos(ev).x / 38) * -1)
      y.set((getMousePos(ev).y / 25) * -1)
    }

    window.addEventListener('mousemove', trackMousePos)

    return () => window.removeEventListener('mousemove', trackMousePos)
  }, [])

  return (
    // <AnimatePresence>

    // {
    <MoonBg
      pos={pos}
      moon={showMoon}
      zIndex={zIndex}
      variants={{ ...defaultMoonVariant, ...variants }}
      transition={defaultMoonVariant.transition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ x, y }}
    >
      <div className="moonlight">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="100%" height="100%" viewBox="0 0 1302.799 1302.8">


          <g id="Moon_and_Moonlight" transform="translate(-367 238)">
            <g id="Moonlight" transform="translate(367 -238)">
              <path id="Path_57" data-name="Path 57" d="M651.4,1302.8A651.468,651.468,0,0,1,397.724,51.352a651.465,651.465,0,0,1,507.353,1200.09A647.531,647.531,0,0,1,651.4,1302.8" transform="translate(0 0)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
              <path id="Path_58" data-name="Path 58" d="M655.545,1241.09A585.612,585.612,0,0,1,427.524,116.15,585.609,585.609,0,0,1,883.568,1194.935a582.036,582.036,0,0,1-228.023,46.155" transform="translate(-4.145 -4.145)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
              <path id="Path_59" data-name="Path 59" d="M659.69,1179.38a518.925,518.925,0,1,1,202.369-40.953A516.55,516.55,0,0,1,659.69,1179.38" transform="translate(-8.29 -8.29)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
              <path id="Path_60" data-name="Path 60" d="M663.835,1117.67a453.091,453.091,0,1,1,176.714-35.75,451.052,451.052,0,0,1-176.714,35.75" transform="translate(-12.435 -12.435)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
              <path id="Path_61" data-name="Path 61" d="M667.98,1055.96a387.225,387.225,0,1,1,151.059-30.547A385.549,385.549,0,0,1,667.98,1055.96" transform="translate(-16.58 -16.58)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
              <path id="Path_62" data-name="Path 62" d="M672.125,994.25a321.364,321.364,0,1,1,125.406-25.345A320.066,320.066,0,0,1,672.125,994.25" transform="translate(-20.725 -20.725)" fill="rgba(255,255,250,0.05)" fillRule="evenodd"/>
            </g>
            {
              showMoon &&   <g id="moon" transform="translate(760 161)">
                <path id="Path_73" className='path_73' d="M544.8,272.4c0,150.442-121.957,272.4-272.4,272.4S0,422.842,0,272.4,121.958,0,272.4,0,544.8,121.958,544.8,272.4" fill="#fffffa" fillRule="evenodd"/>
                <path id="Path_74"
                        d="M199.374,191.592a59.5,59.5,0,1,1-59.5-59.5,59.5,59.5,0,0,1,59.5,59.5m97.58-95a38.08,38.08,0,1,1-38.08-38.08,38.08,38.08,0,0,1,38.08,38.08m-3.709,105a24.371,24.371,0,1,1-24.371-24.371,24.371,24.371,0,0,1,24.371,24.371" fill="rgba(230,230,230,0.3)" fillRule="evenodd"/>
              </g>
            }
          </g>
        </svg>
      </div>
    </MoonBg>
    // }

    // </AnimatePresence>
  )
}

export default MoonLight
