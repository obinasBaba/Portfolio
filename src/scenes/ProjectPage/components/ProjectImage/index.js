// noinspection JSIgnoredPromiseFromCall

import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import {
  effectVariant,
  imgContainerVariant,
  imgCover,
  imgOverVariants,
  imgVariant,
  innerVariant,
  transition,
} from './Variants'
import { InnerWrapper, OverflowWrapper, ProjectImg } from './components'

import StackUsed from '../StackUsed'
import { MotionValueContext } from '../../../../contexts/MotionStateWrapper'

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
  // console.log(preview)
  const {
    variantsUtil: { fromProjectList },
  } = useContext(MotionValueContext)

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
        <Link
          to={link}
          state={{ path: url }}
          onClick={() => fromProjectList.set(true)}
        />

        <motion.img
          data-src={preview.publicURL}
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
