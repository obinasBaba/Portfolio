import React, {useLayoutEffect} from 'react'
import styled, {css} from 'styled-components'
import {heightWidth, spacing, text, title} from '../../../../styles/mixins'
import SlideHover from '../../../../components/SlideHover'
import {Link} from 'gatsby'
import logo from './images/logo.svg'
import RightArrowLink
  from '../../Experiments/components/ExperimentTrack/RightArrowLink'

const InfoTxt = styled.div`

  position: relative;
  z-index: 0;
  //border: thin solid red;
  
  ${ spacing('pt', 2) };
  
  @media screen and (max-width: 768px) {
    --indent: 0.7;
  }
  
  &::before {
    content: '';
    position: absolute;
    opacity: .1;
    border-radius: 50%;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    top: -20%;
    left: -74%;
    z-index: -1;

    ${ heightWidth('width', 70) };
    ${ heightWidth('height', 70) };
  }
    
`

const Title = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.35;
  //font-family: var(--gramatika);
  //letter-spacing: 1px;
  font-weight: 900;
  
  ${ title( 2 ) };
  ${spacing( 'mb', 5 )};
  
 
`

const Checkout = styled.div`
  //border: thin solid rebeccapurple;
  width: 74%;

  ${spacing( 'mt', 3 )};


  span{
    ${ text( .8 ) };
    display: block;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
  }
  
`

const txtStyle = css`
  position: relative;
  margin: 0;
  color: white;
  font-weight: lighter;
  line-height: 1.4em;
  text-transform: uppercase;
  letter-spacing: 5px;

  ${ text( 1 ) };
`;

const Info = () => {
  return (
    <InfoTxt>

      <Title >
        I usually write an in-depth article sharing what I learned every often.
        My Articles help me to chronicle ideas &amp; solutions
        to problems that we face when building great web products.

          {/*<a href="https://readers-corner.netlify.app" target='_blank'>*/}
          {/*</a>*/}

      </Title>

      <RightArrowLink lineLength='69%'
                      txt='checkout my blog site.'
                      target='_blank'
                      link='https://readers-corner.netlify.app'
                      tooTipTxt='i built my own blog-site'
      />

      <RightArrowLink lineLength='81%'
                      mt={3}
                      txt='MORE BLOG POSTS'
                      link='/blog'
                      txtStyle={txtStyle}
                      tooTipTxt='blog list'
      />

    </InfoTxt>
  )
}

export default Info
