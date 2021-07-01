// noinspection JSIgnoredPromiseFromCall

import React, {useContext, useState} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  effectVariant,
  imgContainerVariant,
  imgCover,
  imgOverVariants,
  innerVariant,
  transition,
} from './Variants'
import {InnerWrapper, OverflowWrapper, ProjectImg} from './components'
import {AppStateContext} from '../../../../contexts/AppStateContext'

import img from './preview-111.jpg'

const ProjectImage = ({
  reversed,
  alt,
  link,
  preview,
  title,
  index,
  url,
}) => {
  const { show } = useContext(AppStateContext)

  const [max, setMax] = useState('400px')

  return (
    <ProjectImg
      reversed={reversed}
      variants={imgContainerVariant}
      transition={transition}
    >
      <Link to={link} state={{path: url}}>

          <InnerWrapper
            className="inner-div"
            variants={innerVariant}
            transition={transition}
          >

            <motion.img  src={img}  />

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
      </Link>

      <OverflowWrapper>
        <motion.div
          className="effect"
          variants={effectVariant}
          transition={transition}
        >
          0{index + 1}
        </motion.div>
      </OverflowWrapper>
    </ProjectImg>
  )
}

export default ProjectImage
