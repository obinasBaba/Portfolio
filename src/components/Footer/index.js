import React from 'react'
import { Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import {
  heightWidth,
  largeUp,
  mediumDown,
  mediumUp,
  spacing,
} from '../../styles/mixins'

import Dribbble from '../../assets/images/brands/dribbble.inline.svg'
import Instagram from '../../assets/images/brands/instagram.inline.svg'
import Behance from '../../assets/images/brands/behance.inline.svg'
import Github from '../../assets/images/brands/github.inline.svg'
import NPM from '../../assets/images/brands/npm.inline.svg'

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 90rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-right: 4.28rem;
    padding-left: 4.28rem;
  }

  ${spacing('pv', 4)};

  ${largeUp(css`
    flex-direction: row;
  `)};
`

const Social = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
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
  left: calc(var(--size) * 50px);
  
  font-weight: 300;
  letter-spacing: 1.2px;
  line-height: 1.56em;
  top: 50%;
  transform: translateY(-50%);

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

const Footer = () => {
  return (
    <FooterContainer>
      <Love>With Love from <b>henok</b></Love>

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
    </FooterContainer>
  )
}

export default Footer
