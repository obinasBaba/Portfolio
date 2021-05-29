import React from 'react'
import {motion} from 'framer-motion'
import {heightWidth, mediumUp, spacing} from '../../../styles/mixins'
import styled, {css} from 'styled-components'

const CloseContainer = styled( motion.div )`
  //border: thin solid crimson;
  position: absolute;
  cursor: pointer;
  top: 2.2rem;
  right: 2rem;
  
  ${heightWidth('height', 6)};
  ${heightWidth('width', 6)};
  
  ${mediumUp(css`
    ${spacing('top', 2)};
    ${spacing('right', 8)};
  `)};
  
  
  
`

const svgVariants = {
  initial: {opacity: 0},
  animate: {
    opacity: 1,
    transition: {
      delay: .6
    }
  },
  exit: {opacity: 0},
  hover: {
    transition: {
      staggerChildren: .1
    }
  }
}

const groupVariants = {
  transition: {
    type: 'tween',
    duration: 0.4,
    ease: 'easeOut',
  },
  initial: {

  },
  animate: {},
  hover: {
    fill: '#32344d',
    // stroke: 'rgba(112, 112, 112, 0)',
    transition: {
      type: 'tween',
      duration: 0.4,
      ease: 'easeOut',
    },
  }
}

const borderVariants = {
  hover: {
    fill: 'rgba(112,112,112,0)',
    // stroke: 'rgba(112, 112, 112, 0)',
    transition: {
      type: 'tween',
      duration: 0.4,
      ease: 'easeOut',
    },
  }
}

const path2Variants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    delay: 2
  },

  hover: {
    pathLength: [0, 1],
    // scale: '1.1',
    transition: {
      type: 'tween',
      duration: 0.4,
      ease: 'easeOut',
    },
  }
}

const CloseBtn = ( { toggleMenu: {setMenuIsOpen, menuIsOpen} } ) => {
  return (
    <CloseContainer onClick={ () => setMenuIsOpen( !menuIsOpen ) } >

      <motion.svg xmlns="http://www.w3.org/2000/svg"
                  width="100%" height="100%"
                  viewBox="0 0 64 64"
                  fill='red'
                  variants={svgVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  whileHover='hover'

      >

        <g id="Group_1" data-name="Group 1" transform="translate(-671 -303)">

          <motion.g id="Path_4" data-name="Path 4" transform="translate(671 303)"
                    fill="rgba(50,52,77,0)"
                    variants={groupVariants}
                    transition={groupVariants.transition}
          >

            <motion.path d="M32,0A32,32,0,1,1,0,32,32,32,0,0,1,32,0Z"
                         stroke="none"

            />
            <motion.path d="M 32 1 C 27.81459045410156 1 23.75490188598633 1.819499969482422 19.93370819091797 3.435718536376953 C 16.24237060546875 4.997028350830078 12.92699813842773 7.232379913330078 10.07968902587891 10.07968902587891 C 7.232379913330078 12.92699813842773 4.997028350830078 16.24237060546875 3.435718536376953 19.93370819091797 C 1.819499969482422 23.75490188598633 1 27.81459045410156 1 32 C 1 36.18540954589844 1.819499969482422 40.24510192871094 3.435718536376953 44.06629180908203 C 4.997028350830078 47.75762939453125 7.232379913330078 51.072998046875 10.07968902587891 53.92031097412109 C 12.92699813842773 56.76762008666992 16.24237060546875 59.00297164916992 19.93370819091797 60.56428146362305 C 23.75490188598633 62.18050003051758 27.81459045410156 63 32 63 C 36.18540954589844 63 40.24510192871094 62.18050003051758 44.06629180908203 60.56428146362305 C 47.75762939453125 59.00297164916992 51.072998046875 56.76762008666992 53.92031097412109 53.92031097412109 C 56.76762008666992 51.072998046875 59.00297164916992 47.75762939453125 60.56428146362305 44.06629180908203 C 62.18050003051758 40.24510192871094 63 36.18540954589844 63 32 C 63 27.81459045410156 62.18050003051758 23.75490188598633 60.56428146362305 19.93370819091797 C 59.00297164916992 16.24237060546875 56.76762008666992 12.92699813842773 53.92031097412109 10.07968902587891 C 51.072998046875 7.232379913330078 47.75762939453125 4.997028350830078 44.06629180908203 3.435718536376953 C 40.24510192871094 1.819499969482422 36.18540954589844 1 32 1 M 32 0 C 49.67311096191406 0 64 14.32688903808594 64 32 C 64 49.67311096191406 49.67311096191406 64 32 64 C 14.32688903808594 64 0 49.67311096191406 0 32 C 0 14.32688903808594 14.32688903808594 0 32 0 Z"
                         stroke="none"
                         variants={borderVariants}
                         fill="#707070"/>

          </motion.g>

          <motion.path id="Path_2" data-name="Path 2" d="M703.5,339.745v7.509"
                       transform="translate(445.596 -402.876) rotate(45)" fill="none"
                       stroke="#ffffff" strokeWidth="1"
                       variants={path2Variants}

          />

          <motion.path id="Path_3" data-name="Path 3" d="M703.5,339.745v7.509"
                transform="translate(450.906 -408.186) rotate(45)" fill="none"
                stroke="#ffffff" strokeWidth="1"
                       variants={path2Variants}

          />

          <motion.path id="Path_2-2" data-name="Path 2" d="M703.5,339.745v7.509"
                transform="translate(-34.876 592.023) rotate(-45)" fill="none"
                stroke="#ffffff" strokeWidth="1"
                       variants={path2Variants}

          />

          <motion.path id="Path_3-2" data-name="Path 3" d="M703.5,339.745v7.509"
                transform="translate(-40.186 586.713) rotate(-45)" fill="none"
                stroke="#ffffff" strokeWidth="1"
                       variants={path2Variants}

          />
        </g>

      </motion.svg>

    </CloseContainer>
  )
}

export default CloseBtn
