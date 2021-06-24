import React from 'react'
import { HeadlineContainer, ImgGradient, MetaTexts } from './Components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import MotionBtn from '../../../components/MotionBtn'
import { Lines } from '../../../scenes/HomePage/Hero/components'
import styled from 'styled-components'

import img from './preview-111.jpg'

const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1,
}

//this is a comment

const headLine = {
  /*initial: {
    background: 'transparent',
  },
  animate: {
    background: '#02021e',
    transition: {
      delay: 4,
      ease: [0.6, 0.01, 0, 0.9],
      duration: 2,
    },
  },*/
}

const descTopVariant = {}

const titleVariant = {
  exit: {
    transition: {
      ease: [0.6, 0.01, 0, 0.9],
      duration: 1,
    },
  },
}

const btnVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },

  exit: {
    transition: {
      ease: [0.6, 0.01, 0, 0.9],
      duration: 1,
    },
  },
}

const imgVariant = {
  exit: {
    transition: {
      ease: [0.6, 0.01, 0, 0.9],
      duration: 1,
    },
  },
}

const BG = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #02021e;

  //border: thick solid red;
`

const bgVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.7,
      ease: [0.6, 0.01, 0, 0.9],
      duration: 1.5,
    },
  },
  /*exit: {
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, 0, 0.9],
      duration: 1,
    },
  },*/
}

const Headline = ({ subTitle, title, about, media }) => {
  const { role, context, period } = about

  return (
    <HeadlineContainer
      maxWidth={'xl'}
      disableGutters={false}
      variants={headLine}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BG variants={bgVariant}
          transition={transition}
          layoutId={`bg 0`}

      />

      <motion.div layoutId={`tags 0`}>
        'tags>
      </motion.div>

      <MetaTexts variants={descTopVariant} transition={transition}>
        <motion.h1
          className="pro-title"
          variants={titleVariant}
          transition={transition}
          layoutId={`title 0`}
        >
          Digital Creative Agency.
        </motion.h1>

        <Lines />

        <h2 className="type">WebApp</h2>

        <motion.div
          layoutId={`btn-0`}
          variants={btnVariant}
          transition={transition}
        >
          <MotionBtn margin={false} text="Visit Site" />
        </motion.div>
      </MetaTexts>

      <ImgGradient
        transition={transition}
        layoutId={'out-wra 0'}
        variants={imgVariant}
      >
        <GatsbyImage
          image={getImage(media)}
          alt="project pic"
          objectFit="cover"
          className="project-image"
          loading="eager"
        />

        {/* <motion.img src={img}
                    transition={transition}
                    variants={imgVariant}
        />*/}

        <motion.div className="overlay" />
      </ImgGradient>
    </HeadlineContainer>
  )
}

export default Headline
