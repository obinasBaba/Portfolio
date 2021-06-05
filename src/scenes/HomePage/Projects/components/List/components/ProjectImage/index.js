// noinspection JSIgnoredPromiseFromCall

import React, { useContext, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import {
  gridColWidth,
  largeUp,
  mediumUp,
  spacing,
} from '../../../../../../../styles/mixins'
import { motion, useAnimation } from 'framer-motion'
import { Link, navigate } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ExitStateContext } from '../../../../../../../contexts/ExitStateContext'
import {
  containerVariants,
  effectVariant,
  transition,
  imgCover,
  imgCover2,
  imgOverVariants,
  outerDivWrapper,
} from './Variants'
import { OverflowWrapper, ProjectImg } from './Components'

const ProjectImage = ({ reversed, alt, link, preview, title, index }) => {
  const { show } = useContext(ExitStateContext)
  const controls = useAnimation()

  return (
    <ProjectImg
      reversed={reversed}
      variants={containerVariants}
      transition={transition}
      animate={controls}
      exit="exit"
      initial="initial"
      whileHover="hover"
      custom={show}
    >
      <motion.div
        className="outer-div"
        variants={outerDivWrapper}
        transition={transition}
      >
        <Link to={link}>
          <GatsbyImage
            alt={alt}
            key={title}
            className={'project-image'}
            image={getImage(preview)}
          />
        </Link>
      </motion.div>

      <motion.div className="image-over" variants={imgOverVariants}>
        <motion.div
          className="image-cover cover-1"
          variants={imgCover}
          transition={transition}
        />

        <motion.div
          className="image-cover cover-2"
          variants={imgCover2}
          transition={transition}
        />
      </motion.div>

      <OverflowWrapper>
        <motion.div
          className="effect"
          variants={effectVariant}
          transition={transition}
          onClick={() => console.log('clicked')}
        >
          0{index + 1}
        </motion.div>
      </OverflowWrapper>
    </ProjectImg>
  )
}

export default ProjectImage
