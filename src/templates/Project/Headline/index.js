import React, { useContext, useEffect, useRef } from 'react'
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
import { AppStateContext } from '../../../contexts/AppStateContext'

const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1,
}

//this is a comment

const headLine = {

}

const metaVariant = {
  initial: {

  },
  animate: {
    margin: 0,

  },
  exit: {
    ['margin-left']: 'calc(100vw / 64 * 2)'
  }
}

const titleVariant = {
  initial: {

  },

  animate: {
    scale: 1.3,
    y: -30,
    originX: 0
    
  },

  exit: {
    scale: 1,
    y: 0
  },
}

const btnVariant = {
  initial: {
  },
  animate: {
  },

  exit: {
  },
}

const imgVariant = {
  initial: {
    ['margin-right']: 'calc(100vw / 64 * 6)',
    // background: 'transparent',
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
    // background: '#3719ca',
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




const Headline = ({ subTitle, title, about, media }) => {
  // const { role, context, period } = about

  let t = 'Digital Creative Agency.'

  const metaRef = useRef(null);
  const {titleRect, setTitleRect} = useContext(AppStateContext)


  useEffect(() => {
    console.log( titleRect )

  }, [])

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

      <MetaTexts layout variants={metaVariant} transition={transition} ref={metaRef}>

        <Tags variant={'subtitle2'}> Analytics, UX, UI, Icons, Front-end  </Tags>

        <motion.h1 layout className="pro-title" variants={titleVariant} transition={transition}>
          {
            t.split(' ').map( (word, i) =>

              <motion.span className='word'>

                {
                  word
                }&#160;
              </motion.span>

            )
          }
        </motion.h1>

        {/*<Lines />*/}



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
