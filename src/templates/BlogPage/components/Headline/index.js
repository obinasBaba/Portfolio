import React, {useContext, useEffect, useRef, useState} from 'react'
import styled, { css } from 'styled-components'
import { mediumUp, smallUp, spacing } from '../../../../styles/mixins'
import {Container, Link, Typography} from '@material-ui/core'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AnimateSharedLayout, motion } from 'framer-motion'
import {AppStateContext} from '../../../../contexts/AppStateContext'

const HeadLineContainer = styled(motion.div)`
  //border: thin solid greenyellow;
  width: 100%;
  display: grid;

  &[data-scrolled='true'] {
    .image-box {
      grid-row: 1;
      width: 100%;
      //max-height: 580px;


      .overlay {
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
        visibility: visible;
      }
    }

    .txt-align {
      color: var(--dark);
      align-content: end;
      align-items: center;

      ${spacing('pl', 1)};

      .title {
        text-align: left;
      }
    }
  }
`

const ImageBox = styled( motion.div )`
  position: relative;
  grid-row: 1;
  grid-column: 1;
  //z-index: -1;
  inset: 0 0 0 0;
  max-width: 1400px;
  width: 100%;
  
  //border: thin solid red;

  display: flex;
  justify-content: center;
  margin: 0 auto;
  //height: 100vh;
  max-height: 580px;

  .overlay {
    //visibility: hidden;
    position: absolute;
    inset: 0 0 0 0;
    backdrop-filter: blur(6px);

  }

  & .img-container {
    width: 100%;

    img {
      max-width: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

const TextAlign = styled( Container )`
  grid-row: 1;
  grid-column: 1;
  display: grid;
  z-index: 1;
  transition: color 1s;

  ${ spacing( "mt", 8 ) };
  ${ spacing( "mb", .5 ) };

  ${ mediumUp( css`
    ${ spacing( "ph", 8 ) };
  ` ) };

`;

const Title = styled( motion.h1 )`
  font-size: calc( 4rem * var(--indent) );
  font-weight: 900;
  line-height: 1.2;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: -.4px;
  font-family: var(--poppins);

  ${ spacing( "mt", 1.6 ) };
  ${ spacing( "mb", 2 ) };
  
  ${ smallUp( css`
    font-size: calc( 4.3rem * var(--indent) );
    letter-spacing: 0;

  ` ) };
`;

const DateAndTags = styled( motion.div )`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: .2px;
  
  ${ spacing( "mb", 2 ) };

  ${ mediumUp( css`
    justify-content: space-between;
  ` ) };

  .published-date{}
  
  .tags{
    width: min-content;
    display: none;
    
    ${ mediumUp( css`
      display: flex;
    ` ) };
  }
  
`;



const HeadLine = ({ categories, title, imgData, date, tags, thumbnail }) => {
  const topContainer = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  const {
    isHeaderGradient, setHeaderGradient,
    isWhite, setIsWhite,
  } = useContext(AppStateContext)



  useEffect(() => {

    let scroll = () => {
      // console.log(topContainer.current.getBoundingClientRect().top)
      if ( topContainer.current.getBoundingClientRect().top < -80 ){

        setScrolled( true )
        setIsWhite(!isWhite)
        setHeaderGradient(!isHeaderGradient)
        // window.removeEventListener('scroll', scroll)
      }
      else {
        // setScrolled( false )
        setIsWhite(false)
        setHeaderGradient(false)
      }
    }

    window.addEventListener('scroll', scroll)

    return () => {
      setIsWhite(false)
      setHeaderGradient(false)
    }

    }, [ ])

  return (
    <AnimateSharedLayout>

      <HeadLineContainer layout  ref={topContainer} data-scrolled={scrolled} >

        <TextAlign maxWidth="lg" fixed={ true } className='txt-align' layout='position'>
          <Title variant="h1" className='title' layout='position'> { title } </Title>

          <DateAndTags layout='position'>
            <motion.p variant='subtitle2'
                      noWrap={true}
                      className='published-date' >
              { date } &#183; &#128339; 30 min read.
            </motion.p>

            <motion.div className='tags' layout>
              {tags.map(( {tag}, i ) =>
                <Typography variant='subtitle2'
                            noWrap={true}
                            key={i}>{`${tag},`}&nbsp;
                </Typography>)}
            </motion.div>
          </DateAndTags>
        </TextAlign>


        <ImageBox className='image-box' layout  >
          <GatsbyImage alt={ "featured image" }
                       image={ getImage( thumbnail ) }
                       className="img-container" />

          <motion.div className='overlay' layout />
        </ImageBox>
      </HeadLineContainer>

    </AnimateSharedLayout>

  );
};

export default HeadLine;
