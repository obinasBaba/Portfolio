import React from 'react'
import styled, { css } from 'styled-components'
import { length, spacing, text, title } from '../../../../styles/mixins'
import { Link } from 'gatsby'
import logo from './images/logo.svg'
import RightArrowLink from '../../Experiments/components/ExperimentTrack/RightArrowLink'
import {
  largeUp,
  smallUp,
  xxLargeUp,
} from '../../../../styles/mixins/breakpoints'

const InfoTxt = styled.div`
  position: relative;
  z-index: 0;
  //border: thin solid red;

  ${spacing('pt', 2)};

  ${largeUp(css`
    ${spacing('mt', 3)};
  `)};

  @media screen and (max-width: 768px) {
    --indent: 0.7;
  }
`

const Desc = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.35;
  font-weight: 300;
  
  ${ title( 1.9 ) };
  ${spacing( 'mb', 5 )};
  
  ${smallUp( css`
    font-weight: 900;
    ${ title( 2 ) };

  ` )};
  
`


const txtStyle = css`
  position: relative;
  margin: 0;
  font-weight: lighter;
  line-height: 1.4em;
  text-transform: uppercase;
  letter-spacing: 5px;

  ${ text( 1 ) };
`;

const BlogEffect = styled.div`
  position: absolute;
  opacity: .1;
  border-radius: 50%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  top: -20%;
  left: -74%;
  z-index: -1;

  ${ length('width', 70) };
  ${ length('height', 70) };
  
  ${xxLargeUp( css`
    left: -100%;


    ${ length('width', 80) };
    ${ length('height', 80) };
  ` )};
`

const Info = () => {
  return (
    <InfoTxt>

      <BlogEffect data-scroll data-scroll-speed='1.5'/>

      <Desc >
        I usually write an in-depth article sharing what I learned every often.
        My Articles help me to chronicle ideas &amp; solutions
        to problems that we face when building great web products.
      </Desc>

        <a href='/' target='_blank'  rel="noopener noreferrer" >
          <RightArrowLink lineLength='75%'
                          txt='checkout my blog site.'
                          tooTipTxt='i built my own blog-site!'
          />
        </a>

      <Link to='/blog'>
          <RightArrowLink lineLength='86%'
                          mt={3}
                          txt='MORE BLOG POSTS'
                          txtStyle={txtStyle}
                          tooTipTxt='more blogs?'
          />
      </Link>

    </InfoTxt>
  )
}

export default Info
