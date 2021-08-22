import React from 'react'
import {
  BG,
  HeadlineContainer,
  ImageWrapper,
  InnerWrapper,
  MetaTexts,
  Tags,
} from './Components'
import { motion } from 'framer-motion'
import MotionBtn from '../../../components/MotionBtn'

import img from './preview-111.jpg'
import {
  bgVariant,
  btnVariant,
  headLine,
  imgVariant,
  innerVariant,
  metaVariant,
  titleVariant,
  transition,
} from './variants'
import styled from 'styled-components'
import ReturnBtn from '../../../components/ReturnBtn'
import ScrollDown from '../../../components/ScrollDown'

const FixedItems = styled.div`
  position: fixed;
  left: 3%;
  top: 29%;
  bottom: 5%;
  z-index: 99999;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
`

const Headline = ({ subTitle, title, about, media }) => {

  let t = 'Digital Creative Agency.'

  return (
    <HeadlineContainer
      maxWidth={'xl'}
      disableGutters={false}
      variants={headLine}
      initial="initial"
      animate="animate"
      exit="exit"
    >

      <FixedItems>
        <ReturnBtn to="/projects" />
        <ScrollDown/>
      </FixedItems>

      <BG variants={bgVariant} transition={transition} />

      <MetaTexts variants={metaVariant} transition={transition}>
        <Tags variant={'subtitle2'}> Analytics, UX, UI, Icons, Front-end </Tags>

        <motion.h1
          layout
          className="pro-title"
          variants={titleVariant}
          transition={transition}
        >
          {t.split(' ').map((word, i) => (
            <motion.span className="word">{word}&#160;</motion.span>
          ))}
        </motion.h1>

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
