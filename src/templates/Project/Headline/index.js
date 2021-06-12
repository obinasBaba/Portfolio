import React from 'react'
import { HeadlineContainer, ImgGradient, Title } from './Components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import MotionBtn from '../../../components/MotionBtn'
import { Lines } from '../../../scenes/HomePage/Hero/components'
import styled from 'styled-components'

const transition = {
  ease: [0.6, 0.01, 0, 0.9],
  duration: 1,
}

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

const descTopVariant = {

}

const titleVariant = {

  exit: {
    transition: {
      ease: [0.6, 0.01, 0, 0.9],
      duration: 1,
    },
  }
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
  }
}

const imgVariant = {
  exit: {
    transition: {
      ease: [0.6, 0.01, 0, 0.9],
      duration: 1,
    },
  }
}

const BG = styled( motion.div)`
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
        delay: .7,
        ease: [0.6, 0.01, 0, 0.9],
        duration: 1.5,
      },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, 0, 0.9],
      duration: .2,
    },
  },
}

const Headline = ({ subTitle, title, about, media }) => {


  const { role, context, period } = about;

  return (
    <HeadlineContainer maxWidth={'xl'}
                       disableGutters={false}
                       variants={headLine}
                       initial='initial'
                       animate='animate'
                       exit='exit'
    >
      <BG variants={bgVariant} />

      <Title variants={descTopVariant}
             transition={transition}>

        <motion.h1 className='pro-title'
                   variants={titleVariant}
                   transition={transition}
                   layoutId={`title 0`} >

           Digital Creative Agency
        </motion.h1>

        <Lines />

        <h2 className='type'>WebApp</h2>

       <motion.div
         layoutId={`btn-0`}

                    variants={btnVariant}
                    transition={transition}>



            <MotionBtn margin={false}   text='Visit Site' />




        </motion.div>
        
      </Title>


      <ImgGradient  layoutId={'out-wra 0'}
                    transition={transition}
                    variants={imgVariant}
      >

        <GatsbyImage image={getImage( media )}
                     alt="project pic"
                     objectFit='cover'
                     className='project-img'
                     loading='eager'  />

        {/*<img src={img} />*/}


        <motion.div className="overlay"/>

      </ImgGradient>


    </HeadlineContainer>
  )
}

export default Headline
