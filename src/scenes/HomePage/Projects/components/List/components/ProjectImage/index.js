// noinspection JSIgnoredPromiseFromCall

import React, { useContext } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ExitStateContext } from '../../../../../../../contexts/ExitStateContext'
import {
  imgContainerVariant,
  effectVariant,
  imgCover,
  imgOverVariants, innerDivWrapperVariants,
  outerDivWrapper,
  transition,
} from './Variants'
import { OverflowWrapper, ProjectImg } from './Components'
import reile from './preview-111.jpg';

const ProjectImage = ({ reversed, alt, link, preview, title, index, controller }) => {
  const { show } = useContext(ExitStateContext)


  return (
    <ProjectImg
      reversed={reversed}
      variants={imgContainerVariant}
      transition={transition}
      animate={controller}
      initial='initial'
      exit='exit'

      custom={show}
    >
      <Link to={link}>

      <motion.div
        className="outer-div"
        variants={outerDivWrapper}
        transition={transition}

      >
          <motion.div  className='inner-div'
                       variants={innerDivWrapperVariants}
                       transition={transition}
                       layoutId={`out-wra ${index}`}
          >
            <GatsbyImage
              alt={alt}
              key={title}
              className='project-image'
              image={getImage(preview)}
            />

            {/*<img  src={reile}  />*/}

            <motion.div className="image-over"
                        variants={imgOverVariants}>

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


          </motion.div>

      </motion.div>

      </Link>

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