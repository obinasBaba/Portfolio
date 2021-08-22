// noinspection JSIgnoredPromiseFromCall

import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import {
  effectVariant,
  imgContainerVariant,
  imgCover,
  imgOverVariants, imgVariant,
  innerVariant,
  transition,
} from './Variants'
import { InnerWrapper, OverflowWrapper, ProjectImg } from './components'
import { AppStateContext } from '../../../../contexts/AppStateContext'

import StackUsed from '../StackUsed'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

const ProjectImage = ({
  reversed,
  alt,
  link,
  preview,
  title,
  index,
  url,
  exit,
  items,
  custom,
}) => {

  console.log(preview)

  return (
    <ProjectImg
      reversed={reversed}
      variants={imgContainerVariant}
      transition={transition}
      // custom={custom}
    >

      <InnerWrapper
        className="inner-div"
        variants={innerVariant}
        transition={transition}
      >

        <Link to={link} state={{ path: url }} />

        <motion.img src={preview.publicURL}
                    variants={imgVariant}
                    transition={transition}
        />

        <motion.div className="image-over" variants={imgOverVariants}>

          <motion.div
            className="image-cover cover-1"
            variants={imgCover}
            transition={transition}
          />

          <motion.div
            className="image-cover cover-2"
            variants={imgCover}
            transition={transition}

          />
        </motion.div>

      </InnerWrapper>

      <OverflowWrapper>
        <motion.div
          className="effect"
          variants={effectVariant}
          transition={transition}
          custom={{ exit: exit }}
        >
          0{index + 1}
        </motion.div>
      </OverflowWrapper>

      <StackUsed items={items} custom={{ exit: exit }} />

    </ProjectImg>
  )
}

export default ProjectImage
