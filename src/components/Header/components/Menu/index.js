import React from 'react'
import { Typography } from '@material-ui/core'
import styled, {css} from 'styled-components'
import { motion } from 'framer-motion'
import NavBtn from '../NavBtn'
import MotionBtn from '../../../MotionBtn'
import {largeUp, smallUp, spacing} from '../../../../styles/mixins'

const menuVariants = {}

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

const MenuContainer = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 110;
  display: flex;
  justify-content: flex-end;
`

const MenuList = styled(motion.div)`
  position: relative;
  background-color: #02021e;
  z-index: 130;
  flex-basis: 80%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
  ${ spacing('pl', 10) };

${ css`
    
    ${ smallUp( css`
      flex-basis: 62%;
      
    ` ) };
    
    ${ largeUp( css`
      flex-basis: 53%;
    ` ) }
    
  ` };
`

const Overlay = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 120;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
`

const Menu = ({ toggleMenu: { setMenuIsOpen, menuIsOpen } }) => {
  return (
    <MenuContainer
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
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

        <NavBtn toggleMenu={{ setMenuIsOpen, menuIsOpen }} pos="absolute" />

      </MenuList>


    </MenuContainer>
  )
}

export default Menu
