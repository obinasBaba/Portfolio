import React, {useLayoutEffect} from 'react'
import styled, {css} from 'styled-components'
import {
  length, largeUp,
  smallUp,
  spacing,
  text,
  title,
} from '../../../../styles/mixins'
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

  ${largeUp(css`
     ${spacing('mt', 3)};
  `)};
  
  @media screen and (max-width: 768px) {
    --indent: 0.7;
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
`

const Info = () => {
  return (
    <InfoTxt>

      <BlogEffect data-scroll data-scroll-speed='2.2'/>

      <Title >
        I usually write an in-depth article sharing what I learned every often.
        My Articles help me to chronicle ideas &amp; solutions
        to problems that we face when building great web products.
      </Title>

      <RightArrowLink lineLength='75%'
                      txt='checkout my blog site.'
                      target='_blank'
                      link='https://readers-corner.netlify.app'
                      tooTipTxt='i built my own blog-site'
      />

      <RightArrowLink lineLength='86%'
                      mt={3}
                      txt='MORE BLOG POSTS'
                      link='/blog'
                      txtStyle={txtStyle}
                      tooTipTxt='Have lil sec? read my blogs.'
      />

    </InfoTxt>
  )
}

export default Info
