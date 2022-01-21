import React, { useEffect } from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import {gridColWidth, largeUp, mediumUp, spacing, text} from '../../../../styles/mixins'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import gsap from 'gsap'
import STrigger from 'gsap/ScrollTrigger'
import { basicVariants, transition } from '../../../../helpers/variants'

const BlogListContainer = styled( Container )`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  //border: thin solid red;
  width: 100%;

  ${ gridColWidth() };
  grid-row: 1 / 2;

  
  ${ spacing('mt', 20) };
  ${ spacing('mb', 10) };

  ${largeUp(css`
    ${ spacing('mt', 13) };
  `)}
`;

const Title = styled( Typography )`
  align-self: flex-start;
  color: transparent;
  -webkit-text-stroke: 2.5px #becdd5;
  font-family: 'Elianto-Regular', serif;
  width: 100%;

  //border: thin solid red;

    // ${text(4)};

  ${mediumUp(css`
    // ${text(6)};
  `)}
`;

const BlogListWrapper = styled( motion.div )`
  //border: 2px dashed teal;
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 1050px;
  
  ${largeUp( css`
    ${spacing( 'ml', 7 )};
  ` )};
  
  & > :not(:first-child){
    margin-left: auto;
  }
`

const CardContainer = styled.div`
  //border: thick solid red;
  margin: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  
  ${largeUp( css`
    ${spacing( 'mr', 8 )};
  ` )};
`


const BlogList = ({ children}) => {

  const progress = useMotionValue(0);
  // const rotate =  useTransform(rotateValue, [.2, .23], [0, 90]);
  // const opacity =  useTransform(rotateValue, [0, .2, .35], [1, 0, 1]);
  const opacity =  useTransform(progress, [0, .08], [1, 0]);


  useEffect(() => {

    const pageTitle = document.querySelector('.page-title')
    const cardContainer = document.querySelector('.card-container')

    setTimeout(() => {
      gsap.to(pageTitle, {
        scrollTrigger: {
          trigger: pageTitle,
          pinSpacing: false,
          pin: true,
          scroller: '[data-scroll-container]',
          scrub: 2,
          start: 'top 8%',
          end: () => '+=' +  (cardContainer.offsetHeight),
          onUpdate(self){
            progress.set(self.progress)
          },
        },
      })
    })

  }, [])

  return (

      <BlogListContainer fixed={ false } maxWidth={ false} data-scroll-section>

        <BlogListWrapper variants={basicVariants}
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
