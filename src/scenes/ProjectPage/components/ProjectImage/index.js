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

  index,

  exit,
  items,


}) => {
  // console.log(preview)
  const {
    variantsUtil: { fromProjectList },
  } = useContext(MotionValueContext)

  const { partners, tags, preview, alt, link, title, url } = items

  return (
    <ProjectImg
      reversed={true}
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
          data-pointer='focus'
          data-pointer-color='#02021e'
          data-tooltip
          data-tooltip-text='Let me tell you a story'
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

      <StackUsed items={partners} custom={{ exit: exit }} />
    </ProjectImg>
  )
}

export default React.memo(ProjectImage)
