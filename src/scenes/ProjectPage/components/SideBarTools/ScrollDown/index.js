import React, {useEffect, useLayoutEffect} from 'react'
import {AnimatePresence, motion, useAnimation} from 'framer-motion'
import styled from 'styled-components'
import {heightWidth, spacing, text} from '../../../../../styles/mixins'
import {Typography} from '@material-ui/core'

const ScrollDownContainer = styled( motion.div )`
  position: fixed;
  left: 0;
  ${ spacing('ml', 2.1) };

  bottom: 4%;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-items: center;
  grid-gap: 0.6rem;

`


const ScrollTxt = styled(Typography)`
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 3px;
  color: #b3afaf;
  z-index: 999999;
  
  ${ text(.7) };
`


const parentVariant = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .8,
      ease: 'easeIn'
    },
  },

  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeOut'
    },
  },
}

const pathVariant = {
  initial: {
    pathLength: 1,
  },
  animate :{
    pathLength: [0, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  },

}

const thumbVariant = {
  initial: {
    transform : "translate(62px, 703px)"
  },
  animate: {
    transform : ["translate(62px, 703px)", "translate(62px, 720px)", "translate(62px, 703px)"],

    transition: {
      duration: 2,
      repeat: Infinity
    }
  },
}

const ScrollDown = ( {show} ) => {

  console.log(show)
  const control = useAnimation();



  return (
    <>
      {
        <ScrollDownContainer  variants={parentVariant}
                                                   initial='initial'
                                                   animate='animate'
                                                   exit='exit'
        >

          <AnimatePresence>

            {
              show && <motion.div  variants={parentVariant}
                                            initial='initial'
                                            animate='animate'
                                            exit='exit'
                                   style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     flexFlow: 'column',
                                     justifyItems: 'center',
                                     gap: '.5rem'
                                   }}
              >

                <motion.svg xmlns="http://www.w3.org/2000/svg" width="26.091" height="43.103" viewBox="0 0 26.091 43.103"
                            initial='initial'
                            animate='animate'
                >

                  <g id="Group_17" data-name="Group 17" transform="translate(-50.955 -692.897)">
                    <g id="Rectangle_42" data-name="Rectangle 42" transform="translate(51 693)" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1">
                      <rect width="26" height="43" rx="13" stroke="none"/>
                      <rect x="0.5" y="0.5" width="25" height="42" rx="12.5" fill="none"/>
                    </g>

                    <motion.rect id="Rectangle_43"  data-name="Rectangle 43" width="3" height="5" rx="1.5" transform="translate(62 703)" fill="#fff"
                                 variants={thumbVariant}

                    />

                    <motion.path id="overlay-right" d="M2229,682.48s-10.071-.271-12.409,10.793c.061.047-.341,2.278.016,20.266,2.053,11.153,12.408,11.059,12.393,10.932"
                                 variants={pathVariant}
                                 transition={{
                                   duration: 2,
                                   repeat: Infinity
                                 }}
                                 transform="translate(-2165 10.921)" fill="none" stroke="#fff" stroke-width="3"/>

                    <motion.path id="overlay-left" d="M2216.458,682.48s10.071-.271,12.409,10.793c-.061.047.341,2.278-.016,20.266-2.053,11.153-12.408,11.059-12.393,10.932"
                                 variants={pathVariant}
                                 transition={{
                                   duration: 2,
                                   repeat: Infinity
                                 }}
                                 transform="translate(-2152.458 10.921)" fill="none" stroke="#fff" stroke-width="3"/>
                  </g>
                </motion.svg>

                <ScrollTxt variant={'subtitle2'}> SCROLL </ScrollTxt>

              </motion.div>

            }


          </AnimatePresence>




    </ScrollDownContainer>
      }
    </>


  )
}

export default ScrollDown
