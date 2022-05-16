import React, { useContext, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AnimateSharedLayout, motion, useTransform } from 'framer-motion'
import { spacing } from '../../../../styles/mixins'
import { MotionValueContext } from '../../../../contexts/MotionStateWrapper'
import { mediumUp, smallUp, xxLargeUp } from "../../../../styles/mixins/breakpoints";

const HeadLineContainer = styled( motion.section )`
  //border: thin solid greenyellow;
  width: 100%;
  display: grid;

  &[data-scrolled='true'] {
    .image-box {
      grid-row: 1;
      width: 100%;

      .overlay {
        opacity: 1;
        transition: opacity 1s ease-in-out;
      }
    }

    .txt-align {
      color: var(--theme);
      align-content: end;
      align-items: center;
      ${spacing( 'pl', 1 )};

      .titleTxt {
        text-align: left;
        color: #02021e;
      }

      .meta {
        color: #02021e;
      }
    }
  }
`

const ImageBox = styled( motion.div )`
  position: relative;
  z-index: 1;
  grid-row: 1;
  grid-column: 1;
  display: flex;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  inset: 0 0 0 0;
  margin: 0 auto;
  max-height: 580px;
  
  ${xxLargeUp( css`
    max-height: 690px;
  ` )};
  
  &::after{
    content: '';
    position: absolute;
    display: block;
    inset: 0;
    backdrop-filter: blur(2px);
  }

  .overlay {
    position: absolute;
    inset: 0 0 0 0;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    backdrop-filter: blur(6px);
    opacity: 0;
    transition: all 1s ease-in-out;
    z-index: 1;
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
  z-index: 2;
  grid-row: 1;
  grid-column: 1;
  display: grid;
  transition: color .4s ease-in-out;
  text-shadow: 0.05em 0.05em 0.3em #000;

  ${spacing( "mt", 8 )};
  ${spacing( "mb", .5 )};

  ${mediumUp( css`
    ${spacing( "ph", 8 )};
  ` )};

`;

const Title = styled( motion.h1 )`
  font-size: calc( 4rem * var(--indent) );
  font-weight: 900;
  line-height: 1.2;
  text-transform: capitalize;
  text-align: center;
  letter-spacing: -.4px;
  //text-shadow: 0.1em 0.1em 0.3em #02021e;

  ${spacing( "mt", 1.6 )};
  ${spacing( "mb", 2 )};
  
  ${smallUp( css`
    font-size: calc( 4.3rem * var(--indent) );
    letter-spacing: 0;

  ` )};
`;

const DateAndTags = styled( motion.div )`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: .2px;
  
  ${spacing( "mb", 2 )};

  ${mediumUp( css`
    justify-content: space-between;
  ` )};

  .published-date{}
  
  .tags{
    width: min-content;
    display: none;
    
    ${mediumUp( css`
      display: flex;
    ` )};
  }
  
`;


function HeadLine({ categories, titleTxt, imgData, date, tags, thumbnail }) {
    const topContainer = useRef( null );

    const [scrolled, setScrolled] = useState( false );
    const [rendered, setRendered] = useState( false )

    const { moScroll } = useContext( MotionValueContext )


    useTransform( moScroll.y, latest => {

        if ( !rendered )
            return 0;

        if ( latest > 80 ) {
            if ( !scrolled )
                setScrolled( true )
        }
    } )

    useEffect( () => {
        if ( scrolled )
            document.body.classList.add( 'blog-clr' )


    }, [scrolled] )

    useEffect( () => {
        setRendered( true )

        return () => document.body.classList.remove( 'blog-clr' )
    }, [] )

    return (
        <AnimateSharedLayout>

            <HeadLineContainer layout ref={topContainer} data-scrolled={scrolled}>

                <TextAlign maxWidth="lg" fixed className='txt-align' layout='position'>
                    <Title variant="h1" className='titleTxt' layout='position'> {titleTxt} </Title>

                    <DateAndTags className='meta' layout='position'>
                        <motion.p variant='subtitle2'
                                  noWrap
                                  className='published-date'>
                            {date} &#183; &#128339; 30 min read.
                        </motion.p>

                        <motion.div className='tags' layout>
                            {tags.map( ( { tag }, i ) =>
                                <Typography variant='subtitle2'
                                            noWrap
                                            key={i}>{`${tag},`}&nbsp;
                                </Typography> )}
                        </motion.div>
                    </DateAndTags>
                </TextAlign>


                <ImageBox className='image-box' layout>
                    <GatsbyImage alt="featured image"
                                 image={getImage( thumbnail )}
                                 className="img-container"/>

                    <div className='overlay'/>
                </ImageBox>
            </HeadLineContainer>

        </AnimateSharedLayout>

    );
}

export default HeadLine;
