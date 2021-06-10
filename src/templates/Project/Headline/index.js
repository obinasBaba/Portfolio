import React from 'react'
import { A, HeadlineContainer, ImgGradient, Q, Role, Title } from './Components'
import { GradientText } from '../../../components/GrdientText'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {motion} from 'framer-motion'
import MotionBtn from '../../../components/MotionBtn'
import {Lines} from '../../../scenes/HomePage/Hero/components'

const Headline = ({ subTitle, title, about, media }) => {


  const { role, context, period } = about;




  return (
    <HeadlineContainer maxWidth={'xl'}
                       disableGutters={false}
    >


      <Title>
        <h1 className='title' >Creative Digital Agency</h1>
        <Lines />
        <h2 className='type'>WebApp</h2>
        <MotionBtn margin={false}  text='Visit Site' />
      </Title>


      <ImgGradient>



        <GatsbyImage image={getImage( media )}
                     alt="project pic"
                     objectFit='cover'
                     loading='eager'  />

        <motion.div className="overlay"/>

      </ImgGradient>


    </HeadlineContainer>
  )
}

export default Headline
