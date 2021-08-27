import React, {useEffect, useRef} from 'react'
import {
  HeadLineBG,
  HeadlineContainer,
  ImageWrapper,
  InnerWrapper,
  Texts,
} from './Components'
import { motion } from 'framer-motion'
import MotionBtn from '../../../components/MotionBtn'

import img from './preview-111.jpg'
import {
  bgVariant,
  btnVariant, containerVariants,
  imgVariant,
  innerVariant,
  metaVariant,
  transition,
} from './variants'
import Title from './components/Title'
import Tags from './components/Tags'




const Headline = ({ subTitle, title, about, media }) => {

  let t = 'Digital Creative Agency.'

  return (
    <HeadlineContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      data-scroll-section
    >

      <HeadLineBG  variants={bgVariant} transition={transition} />

      <Texts variants={metaVariant}
             transition={transition}>

        <Tags txt='Analytics, UX, UI, Icons, Front-end' />

        <Title title={t} />

        <motion.div variants={btnVariant} transition={transition}>
          <MotionBtn margin={false} text="Visit Site" />
        </motion.div>
      </Texts>

      <ImageWrapper variants={imgVariant} transition={transition} >
        <InnerWrapper variants={innerVariant} transition={transition}>
          <motion.img src={img} />
        </InnerWrapper>
      </ImageWrapper>

    </HeadlineContainer>
  )
}

export default Headline
