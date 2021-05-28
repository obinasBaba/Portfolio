import React from 'react'
import { Typography } from '@material-ui/core'
import styled, {css} from 'styled-components'
import { motion } from 'framer-motion'
import NavBtn from '../NavBtn'
import MotionBtn from '../../../MotionBtn'
import {largeUp, smallUp, spacing} from '../../../../styles/mixins'
import {MenuContainer, MenuList, Overlay} from './components'
import CloseBtn from '../CloseBtn'

const menuVariants = {}

const overlayVariant = {
  transition: {
    duration: 0.8,
    ease: [0.5, 0, 0.75, 0],
  },

  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const menuListVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    clipPath: 'polygon( 30% 0%, 100% 0%, 100% 100%, 0% 100% )',
    transition: {
      duration: 0.8,
      ease: [1, 0, 0.68, 1],
      staggerChildren: 0.05,
      delayChildren: 0.7,
    },
  },
  exit: {
    opacity: 1,
    clipPath: 'polygon( 100% 0%, 100% 0%, 100% 100%, 100% 100% )',
    transition: {
      duration: 0.8,
      ease: [1, 0, 0.68, 1],
      staggerChildren: 0.06,
    },
  },
}

const motionBtnVariant = {
  transition: {
    duration: 0.8,
    ease: [1, 0, 0.68, 1],
    // delayChildren: 2,
  },

  initial: {},
  animate: {
    //
  },
  exit: {},
}

const innerBtnVariant = {
  initial: { y: '120%' },
  animate: {
    y: 0,
  },

  exit: {
    y: '-125%',
    transition: {
      type: 'spring',
    }
  },
}

const navBtnVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: .6
    }
  },
  exit: {
    opacity: 0,
  },
};


const Menu = ({ toggleMenu: { setMenuIsOpen, menuIsOpen } }) => {
  return (
    <MenuContainer
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"

      onAnimationComplete={(t) => {
        if ( t === 'exit' )
          document.body.classList.remove('locked')
      }}
    >

      <motion.div
      />

      <Overlay
        variants={overlayVariant}
        transition={overlayVariant.transition}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />

      <MenuList variants={menuListVariants} key={3}>
        {['Works', 'Recent Designs', 'Blogs', 'Experiments', 'Contact'].map(
          (txt, i) => (
            <motion.div
              key={i}
              variants={motionBtnVariant}
              style={{ overflow: 'hidden', }}
            >
              <motion.div variants={innerBtnVariant} >
                <MotionBtn arrow={false} text={txt} clr="#3719ca" />
              </motion.div>
            </motion.div>
          )
        )}

        {/*<NavBtn toggleMenu={{ setMenuIsOpen, menuIsOpen }}
                variants={navBtnVariant}
                pos="absolute" />*/}

        <CloseBtn  toggleMenu={{ setMenuIsOpen, menuIsOpen }}/>

      </MenuList>


    </MenuContainer>
  )
}

export default Menu
