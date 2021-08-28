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

import img from './preview-111.jpg'
import {
  bgVariant,
  btnVariant, containerVariants,
  imgVariant,
  innerVariant,
  textsVariant,
  transition,
} from './variants'
import Title from './components/Title'
import Tags from './components/Tags'
import {AppStateContext} from '../../../contexts/AppStateContext'




const Headline = ({ subTitle, title, about, media }) => {

  const { variantsUtil: {fromProjectList} } = useContext(AppStateContext)


  const moInitial = useMotionValue(fromProjectList.get() ? ['fromProjectsInitial'] : ['initial'])
  const moAnimate = useMotionValue(fromProjectList.get() ? ['fromProjectsAnimate'] : ['animate'])

  useEffect(() => {
    // console.log('fromProject : ', fromProjectList)
    fromProjectList.set(false)
  }, [])


  return (
    <HeadlineContainer
      variants={containerVariants}
      initial={moInitial.get()}
      animate={moAnimate.get()}
      exit="exit"
      data-scroll-section
    >

      <HeadLineBG  variants={bgVariant} transition={transition} />

      <Texts variants={textsVariant}
             transition={transition}>

        <Tags txt='Analytics, UX, UI, Icons, Front-end' />

        <Title title='Digital Creative Agency.' />

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
