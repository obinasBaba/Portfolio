import React from 'react'
import styled, { css } from 'styled-components'
import {
  length,
  largeUp,
  mediumDown,
  mediumUp,
  spacing,
  text,
} from '../../styles/mixins'

import Dribbble from '../../assets/images/brands/dribbble.inline.svg'
import Instagram from '../../assets/images/brands/instagram.inline.svg'
import Behance from '../../assets/images/brands/behance.inline.svg'
import Github from '../../assets/images/brands/github.inline.svg'
import {Container} from '@material-ui/core'

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  ${spacing('mv', 5)};
  ${spacing('gap', 5)};


  ${largeUp(css`
    flex-direction: row;
    ${spacing('mb', 3)};
    ${spacing('mt', 0)};

  `)};
  
  @media screen and (min-width: 768px) {
    padding-right: 4.28rem;
    padding-left: 4.28rem;
  }
  
`

const Social = styled.ul`
  position: relative;
  display: flex;
  
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 10;

  li {
    &:not(:first-child) {
      ${spacing('ml', 3)};
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    text-align: center;
    transition: background-color 0.2s, border-color 0.2s;
    text-indent: -9999px;
    width: 40px;
    height: 40px;

    ${mediumUp(css`
      ${length('width', 6)}
      ${length('height', 6)}
    `)};

    &:hover {
      background-color: white;
      border-color: white;

      path {
        fill: ${({ theme }) => theme.palette.secondary.main};
      }
    }
  }
`

const Love = styled.div`
  position: absolute;
  //left: 0;
  ${spacing('left', 0)};

  font-weight: 300;
  line-height: 0;
  letter-spacing: 1.2px;
  ${ text(.7) };
  
  span{
    font-size: 28px;
  }

  b {
    font-weight: 700;
    font-family: Dancing Script, cursive;
    font-size: 1.2rem;
  }
  
  
  @media screen and (min-width: 1600px) {
    left: 0;
  }
  
  ${ mediumDown( css`
    position: relative;
    
  ` ) };
  
`

const Copy = styled.div`

  //order: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  ${ text(.84) };


  span{
    font-weight: 300;
    ${ text(1) };
  }
  
  ${largeUp(css`
    position: absolute;
    ${spacing('right', 0)};

  ` )}
`

const Footer = ( {color} ) => {
  return (
    <Container maxWidth='lg' disableGutters={true}  data-scroll={true} >
      <FooterContainer>

        <Copy >
          <span>&copy;</span> 2021 Henzzo.io
        </Copy>

        <Social>
          <li className='hover_target'>
            <a
              href="https://github.com/Halo-Lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <Github />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/halolabteam/"
              target="_blank"
              rel="noopener noreferrer"
              className='hover_target'

            >
              Instagram
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/halolab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
              <Behance />
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/halolab"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
              <Dribbble />
            </a>
          </li>
        </Social>



        <Love>Made With <span className='heart-icon'>&#9825;</span> by <b>henok</b></Love>



      </FooterContainer>
    </Container>

  )
}

export default Footer
