import React, {useLayoutEffect} from 'react'
import styled from 'styled-components'
import {heightWidth, spacing, text, title} from '../../../../styles/mixins'
import SlideHover from '../../../../components/SlideHover'
import {Link} from 'gatsby'
import logo from './images/logo.svg'

const InfoTxt = styled.div`

  position: relative;
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
    top: 0;
    left: -64%;
    z-index: -1;

    ${ heightWidth('width', 57) };
    ${ heightWidth('height', 56) };
  }
  
  .more-link{
    position: relative;
    margin-right: -10px;
    color: white;
    font-weight: lighter;
    line-height: 1.4em;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 10px;

    ${ text( 1 ) };


    @media screen and (max-width: 768px) {
      display: none;
    }
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
  ${spacing( 'mb', 6 )};
`



const Info = () => {
  return (
    <InfoTxt>

      <Title >
        I usually write an in-depth article sharing what I learned every often.
        My Articles help me to chronicle ideas &amp; solutions
        to problems that we face when building great web products.
      </Title>

      <SlideHover onClick={() => {
        window.scrollToTop = false;
      }}  >
        <Link to="/blog" className='more-link'
              state={{
                from: '/blog'
              }}
        >
          MORE BLOG POSTS
        </Link>
      </SlideHover>

    </InfoTxt>
  )
}

export default Info
