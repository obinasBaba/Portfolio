import React, {useEffect} from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { mediumUp, spacing, text } from '../../../../styles/mixins'
import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import Moon from '../../../../layouts/Components/Moon'
import gsap from 'gsap';
import STrigger from 'gsap/ScrollTrigger'
import PenEffect from './PenEffect'
import MailUs from '../../../../scenes/MailUs'


const BlogListContainer = styled( Container )`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  //border: thin solid red;

  ${ spacing('mt', 10) };
  ${ spacing('mb', 10) };
`;

const Title = styled( Typography )`
  align-self: flex-start;
  color: transparent;
  -webkit-text-stroke: 1.5px white;
  font-family: 'Bodoni Moda', serif;
  width: 100%;
  
  //border: thin solid red;

  ${ text(4) };
  
  ${ mediumUp( css`
    ${ text(6) };
  ` ) }
`;

const BlogListWrapper = styled( motion.div )`
  //border: thin dashed teal;
  width: 100%;
  max-width: 1050px;
  display: flex;
  flex-flow: column;
  
  & > :not(:first-child){
    margin-left: auto;
  }
`

const CardContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-flow: column;
  
  //border: thin solid rebeccapurple;
`

const wrapperVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0,
  }
}

const transition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9],

}

const BlogList = ({ children}) => {

  const progress = useMotionValue(0);
  // const rotate =  useTransform(rotateValue, [.2, .23], [0, 90]);
  // const opacity =  useTransform(rotateValue, [0, .2, .35], [1, 0, 1]);
  const opacity =  useTransform(progress, [0, .07], [1, 0]);


  useEffect(() => {
    setTimeout(() => {

      const pageTitle = document.querySelector('.page-title')
      const cardContainer = document.querySelector('.card-container')

      gsap.to(pageTitle, {
        // x: -(trackRef.current.offsetWidth - 500 ),
        scrollTrigger: {
          trigger: pageTitle,
          pinSpacing: false,
          pin: true,
          scrub: 2,
          start: 'top 10%',
          end: () => '+=' +  (cardContainer.offsetHeight),
          onUpdate(self){
            progress.set(self.progress)
          },
        },
      })

      STrigger.refresh()
    })

  }, [])

  return (

      <BlogListContainer fixed={ false } maxWidth={ false} >

        <Moon showMoon={false} pos='fixed' />
        <PenEffect  progress={progress}/>

        <BlogListWrapper variants={wrapperVariant}
                    transition={transition}
                    initial='initial'
                    animate='animate'
                    exit='exit'
        >

          <div className="page-title">
            <motion.div style={{opacity, transformOrigin: 'left'}}
            >
              <Title variant="h1" noWrap={true} >
                My Articles
              </Title>
            </motion.div>
          </div>


          <CardContainer className='card-container' >
            { children }
          </CardContainer>

        </BlogListWrapper>


      </BlogListContainer>

  );
};

export default BlogList;
