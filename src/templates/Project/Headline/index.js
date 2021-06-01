import React from 'react'
import { A, HeadlineContainer, ImgGradient, Q, Role, Title } from './Components'
import { GradientText } from '../../../components/GrdientText'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {motion} from 'framer-motion'

const Headline = ({ subTitle, title, about, media }) => {


  const { role, context, period } = about;


  const About = [
    { q: 'Role ', a: role },
    { q: 'Context ', a: context },
    { q: 'Period ', a: period },
  ];

  return (
    <HeadlineContainer maxWidth={'xl'}
                       disableGutters={false}
    >



      <Role>
        {About.map(({ q, a }) => (
          <li key={q}>
            <Q > {q} : </Q>
            <A> { a} </A>
          </li>
        ))}
      </Role>



      <ImgGradient>



        <GatsbyImage image={getImage( media )}
                     alt="project pic"
                     objectFit='cover'
                     loading='eager'  />


        <Title>
          <GradientText variant='h1'>{title}</GradientText>
          <GradientText  >{subTitle}</GradientText>
        </Title>

        <motion.div className="overlay"

        />

      </ImgGradient>


    </HeadlineContainer>
  )
}

export default Headline
