// noinspection JSIgnoredPromiseFromCall

import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import {
  effectVariant,
  imgContainerVariant,
  imgCover,
  imgOverVariants,
  innerVariant,
  transition,
} from './Variants'
import { InnerWrapper, OverflowWrapper, ProjectImg } from './components'
import { AppStateContext } from '../../../../contexts/AppStateContext'

import img from './preview-111.jpg'
import StackUsed from '../StackUsed'

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
  const { show } = useContext(AppStateContext)

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

        <motion.img data-src={img} />

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
