// noinspection JSIgnoredPromiseFromCall

import React, { useContext, useEffect, useRef, useState } from 'react'
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

  ${mediumUp(css`
    ${({ reversed }) =>
      reversed ? gridColWidth(24, 65) : gridColWidth(1, 42)};
    grid-row: 1;
    //margin-right: 0;
  `)};

  .outer-div {
    background: ${({ theme }) => theme.palette.secondary.main};
    ${spacing('pt', 1)};
    ${spacing('pb', 1)};

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

  .inner-img-wrapper {
    position: relative;
  }
`

const transition = {
  duration: 0.6,
  ease: [0.075, 0.82, 0.165, 1],
}

const containerVariants = {

}

const outerDivWrapper = {

}

const innerDivWrapper = {

}

const ProjectImage = ({ reversed, alt, link, preview, title }) => {

  const { show } = useContext(ExitStateContext)
  const controls = useAnimation()

  return (
    <ProjectImg
      reversed={reversed}
      variants={containerVariants}
      transition={transition}
      animate={'animate'}
      exit='exit'
      initial="initial"
      whileHover="hover"
      custom={show}
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
          <Link to={link}  >
            <GatsbyImage
              onClick={() => {
                // setExit(!exit)
                // console.log(exit)
              }}
              alt={alt}
              key={title}
              className={'project-image'}
              image={getImage(preview)}
            />
            </Link>
        </motion.div>
      </motion.div>
    </ProjectImg>
  )
}

export default ProjectImage
