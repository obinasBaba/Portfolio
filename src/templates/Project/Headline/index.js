import React from 'react'
import {
  HeadlineContainer,
  ImageWrapper,
  InnerWrapper,
  MetaTexts,
} from './Components'
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

}

const descTopVariant = {}

const titleVariant = {
  exit: {

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
    opacity: 0,
  },
}

const imgVariant = {
  initial: {
    ['margin-right']: 'calc(100vw / 64 * 6)',
    background: 'transparent',
    padding: 'calc(100vw / 64 * .5)',
    ['padding-left']: 'calc(100vw / 64 * 4)',
  },

  animate: {
    // height: '100vh',
    ['margin-right']: 0,
    padding: 'calc(100vw / 64 * 0)',
    ['padding-left']: 'calc(100vw / 64 * 0)',
  },
  exit: {
    // height: '400px',
    background: '#3719ca',
    ['margin-right']: 'calc(100vw / 64 * 6)',

    padding: 'calc(100vw / 64 * .5)',
    ['padding-left']: 'calc(100vw / 64 * 4)',


  }
}

const innerVariant = {
  initial: {
    height: 400
  },
  animate: {
    height: '100vh'
  },

  exit: {
    height: 400,
  }
}

const bgVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
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
      <BG variants={bgVariant} transition={transition} />

      <MetaTexts variants={descTopVariant} transition={transition}>
        <motion.h1 className="pro-title" variants={titleVariant} transition={transition}>
          Digital Creative Agency.
        </motion.h1>

        <Lines />

        <h2 className="type">WebApp</h2>

        <motion.div variants={btnVariant} transition={transition}>
          <MotionBtn margin={false} text="Visit Site" />
        </motion.div>
      </MetaTexts>

      <ImageWrapper transition={transition} variants={imgVariant}>

        <InnerWrapper variants={innerVariant} transition={transition}>
          <motion.img src={img} />

        </InnerWrapper>


        <motion.div className="overlay" />
      </ImageWrapper>
    </HeadlineContainer>
  )
}

export default Headline
