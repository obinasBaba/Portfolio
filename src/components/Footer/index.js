import React from 'react'
import styled, { css } from 'styled-components'
import {
  heightWidth,
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

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 90rem;
  width: 100%;
  //background-color: #3719ca;
  //border: thin solid red;
  //background-color: #02021e;
  //border: thin solid green;

  ${spacing('mv', 3)};


  ${largeUp(css`
    flex-direction: row;
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
      ${heightWidth('width', 6)}
      ${heightWidth('height', 6)}
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
  ${spacing('left', 4)};

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
    left: 0;
    order: 1;
    margin-top: 2rem;
    top: 0;
    transform: translateY(0);
  ` ) };
  
`

const Copy = styled.div`
  position: absolute;
  ${spacing('right', 4)};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  ${ text(.74) };


  span{
    
    font-family: var(--gramatika);
    font-weight: 300;
    ${ text(1) };
    
  }
`

const Footer = ( {color} ) => {
  return (
    <FooterContainer>
      <Love>Made With <span className='heart-icon'>&#9825;</span> by <b>henok</b></Love>

      <Social>
        <li>
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

      <Copy>
        <span>&copy;</span> 2021 Henzzo.io
      </Copy>


    </FooterContainer>
  )
}

export default Footer
