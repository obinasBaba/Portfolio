import React, {useContext, useEffect, useLayoutEffect, useRef} from 'react'
import {
  HeadLineBG,
  HeadlineContainer,
  ImageWrapper,
  InnerWrapper,
  Texts,
} from './Components'
import {motion, useMotionValue} from 'framer-motion'
import MotionBtn from '../../../components/MotionBtn'

import {
  bgVariant,
  btnVariant, containerVariants,
  imgWrapperVariant,
  innerVariant,
  textsVariant, titleVariant,
  transition,
} from './variants'
import Tags from './components/Tags'
import {AppStateContext} from '../../../contexts/AppStateContext'
import Title
  from '../../../scenes/ProjectPage/components/ProjectDescription/components/Title'




const Headline = ({ subTitle, title, about, media }) => {





  return (
    <HeadlineContainer
      variants={containerVariants}
      data-scroll-section
    >


      <Texts variants={textsVariant} transition={transition}>

        <Tags txt='Analytics, UX, UI, Icons, Front-end' />

        <Title title={title} variants={{
          title: titleVariant,
          transition: transition,
        }} />

        <motion.div variants={btnVariant} transition={transition}>
          <MotionBtn margin={false} text="Visit Site" />
        </motion.div>
      </Texts>

      <ImageWrapper variants={imgWrapperVariant} transition={transition} >
        <InnerWrapper variants={innerVariant} transition={transition}>
          <motion.img src={media} />
        </InnerWrapper>
      </ImageWrapper>

    </HeadlineContainer>
  )
}

export default Headline
