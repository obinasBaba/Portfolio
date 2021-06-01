// noinspection JSIgnoredPromiseFromCall

import React, {useContext, useEffect, useRef, useState} from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  mediumUp,
  spacing,
} from '../../../../../../styles/mixins'
import { motion, useAnimation } from 'framer-motion'
import { Link, navigate } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ExitStateContext } from '../../../../../../contexts/ExitStateContext'

const ProjectImg = styled(motion.div)`
  ${gridColWidth()}; //mobile-first
  padding: 0;
  cursor: pointer;
  position: relative;
  //border: thick solid red;

  ${mediumUp(css`
    ${({ reversed }) =>
      reversed ? gridColWidth(24, 65) : gridColWidth(1, 42)};
    grid-row: 1;
    //margin-right: 0;
  `)};

  .outer-div {
    background: ${({ theme }) => theme.palette.secondary.main};
    //border: thick solid yellow;

    ${spacing('pt', 6)};
    ${spacing('pb', 7)};

    ${({ reversed }) =>
            reversed
                    ? css`
            ${spacing('pl', 9)};
            ${spacing('pr', 1)};
            justify-content: flex-end;
          `
                    : css`
            ${spacing('pr', 9)};
            ${spacing('pl', 1)};
          `};
  }

  .inner-div {
    z-index: 999;
    overflow: hidden;
    display: flex;
    justify-content: start;
    align-items: center;
    //border: thick solid green;
  }
  
  .inner-img-wrapper{
    position: relative;
  }
`

const transition = {
  duration: 0.6,
  ease: [0.075, 0.82, 0.165, 1],
}

const animateTransition = {
  duration: 1,
}

const containerVariants = {
  initial: {
    // opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 2
    },
  },
  exit: {
    // opacity: 0,
  },
  hover: {},

  transition: {
    delayChildren: 3.5,
  },
}

const outerDivWrapper = {
  initial: {
    // scale: 1,
  },
  hover: {
    scale: 0.94,
    transition: {
      ...transition,
    },
  },
  exit: {
    // x: -1400,
  }
}

const innerScale = {
  hover: {
    // scale: .96,
    // transition: {
    //   delay: .1,
    //   duration: 1.2,
    //   ease: [0.075, 0.82, 0.165, 1],
    // }


    // top: '100px',
    // left: '50px',

    transition: {
        delay: .1,
        duration: .8,
        ease: [0.075, 0.82, 0.165, 1],
      }

  },
}

const innerDivWrapper = {
  initial: {
    // scale: 1,
    // x: 0,

  },

  hover: dynamicData => ({
    // x: dynamicData.reversed ? -20 : 20,
    // scale: '1.2',

    transition: {
      duration: 0.8,
      ease: [0.075, 0.82, 0.165, 1],
    }
  }),

  exit: {
    position: 'fixed',
    scale: .9,
    x: '50%',
    transition: {
      duration: 1,
    }
  }
}

const ProjectImage = ({ reversed, alt, link, preview, title }) => {
  // const { exit, toggle } = useContext(ExitStateContext)
  // let exit = useRef(null);
  const [exit, setExit] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start(exit ? 'exit' : 'animate')
    console.log(' sdlfjs ',exit)
  }, [exit])

  return (
    <ProjectImg
      reversed={reversed}
      variants={containerVariants}
      transition={transition}
      animate={controls}
      initial='initial'
      whileHover='hover'
      onAnimationComplete={ (type) => {
        if ( type === 'exit' ) {
          console.log(link)
          // navigate(link)
          // controls.set('animate');
        }
      } }

    >
      <motion.div

        className="outer-div"
        variants={outerDivWrapper}
        transition={transition}
      >
        <motion.div
          className="inner-div"
          variants={innerDivWrapper}
          transition={transition}
          custom={{ reversed }}
        >
          {/*<Link to={link}  >*/}
          <motion.div variants={innerScale}
                      className='inner-img-wrapper'
                      transition={{
                        ...transition,
                        duration: 1.2,

                      }}

          >

          <GatsbyImage
            onClick={() => {
              setExit( !exit )
              console.log(exit);
            }}
            alt={alt}
            key={title}
            className={'project-image'}
            image={getImage(preview)}
          />
          {/*</Link>*/}

          </motion.div>

        </motion.div>
      </motion.div>
    </ProjectImg>
  )
}

export default ProjectImage
