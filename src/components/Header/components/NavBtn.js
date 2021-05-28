import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import {heightWidth, mediumUp, spacing} from '../../../styles/mixins'

// const headerTransition = 'all .3s'

const Btn = styled.button`
  ${heightWidth('height', 6)};
  ${heightWidth('width', 6)};
    
  position: relative;
  ${ ({pos}) => pos && css`
    position: absolute;
    top: 2.2rem;
    right: 2rem;
    
    ${ mediumUp( css`
      ${ spacing('top', 2) };
      ${ spacing('right', 8) };
    ` ) };
    
    
  ` };
  
  overflow: hidden;
  outline: none;
  box-shadow: ${ ({isWhite}) => 
          isWhite ? 'inset 0 0 0 1px rgba(2, 2, 30, 0.2)'
                  : 'inset 0 0 0 1px rgba(255, 255, 255, 0.2)' };
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: all .3s;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  z-index: 999550;
  
  ${ ({isWhite}) => isWhite ? css`
    & > :first-child{
      background-color: #02021e;
      &::after, &::before{
        background-color: #02021e;
      }
    }
  ` : '' };


  &:hover, &:focus {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({ theme, open }) => theme.palette.secondary.main};

    &:after {
      transform: translateX(0%);
    }
    
    & > :first-child { //bars
      background-color: #fff;
      
      &:after, &:before{ //bars after and before sudo
        background-color: #fff;
      }
    }
    
  }
`

const Bars = styled.span`
  position: absolute;
  //border: thin solid crimson;
  height: 1px;
  left: 0;
  right: 0;
  width: 40%;
  top: 50%;
  display: block;
  background-color: #fff;
  margin: auto;
  border-radius: 30px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    border-radius: 3px;
    height: 1.2px;
    width: 70%;
    background-color: #fff;
    transition: transform 0.3s;
  }

  &::before {
    margin-top: -0.5rem;
  }

  &::after {
    margin-top: 0.5rem;
  }
  
  ${({ opened }) =>
    opened
      ? css`
          background-color: transparent !important;

          &:before {
            top: 0.45rem;
            transform: translateX(-50%) rotate(45deg);
            width: 100%;
          }

          &:after {
            top: -0.55rem;
            transform: translateX(-50%) rotate(-45deg);
            width: 100%;
          }
        `
      : ''};
`

const HiddenText = styled.p`
  text-indent: 99999px;
`

const NavBtn = ( {isWhite, toggleMenu, pos} ) => {


  return (
    <Btn isWhite={isWhite}
         pos={pos}
         onClick={ () => toggleMenu.setMenuIsOpen(!toggleMenu.menuIsOpen) } >

      <Bars opened={toggleMenu.menuIsOpen} />
      <HiddenText> Menu </HiddenText>
    </Btn>
  )
}

export default NavBtn
