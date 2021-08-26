import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { heightWidth, mediumUp, spacing } from '../../../styles/mixins'
import { motion } from 'framer-motion'
import MagnetElement from '../../../helpers/MagnetElement'
import useMagnet from '../../../hooks/useMagnet'

// const headerTransition = 'all .3s'

const Btn = styled(motion.button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  pointer-events: initial;

  border-radius: 50%;
  background-color: transparent;
  cursor: none;
  transition: background-color 0.3s, border 0.3s;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);

  ${heightWidth('height', 6)};
  ${heightWidth('width', 6)};
  
  &::after{
    content: '';
    display: block;
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    
    //border: thin solid red;
  }

  & :hover,
  & :focus {
    & > :first-child {
      background-color: #e7a28f;

      &:after,
      &:before {
        //bars after and before sudo
        background-color: #e7a28f;
      }
    }
  }
`

const Bars = styled.span`
  position: absolute;
  //border: thin solid crimson;
  height: 3px;
  left: 0;
  right: 0;
  width: 40%;
  top: 50%;
  display: block;
  background-color: var(--theme);
  margin: auto;
  border-radius: 550px;

  transition: background-color .35s ease-in-out;


  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    display: block;
    border-radius: 555px;
    background-color: var(--theme);
    transform: translateX(-50%);
    transition: background-color .35s ease-in-out;
    height: 3px;
    width: 70%;
  }

  &::before {
    margin-top: -0.5rem;
  }

  &::after {
    margin-top: 0.5rem;
  }
`

const HiddenText = styled.p`
  text-indent: 99999px;
  pointer-events: none;

`

const NavBtn = ({ isWhite, toggleMenu, pos, variants = {}, menu }) => {
  // useMagnet('.nav-btn', 1.6, 0.51)

  return (
    <Btn
      className="nav-btn"
      data-pointer='magnet'
      data-magnet-distance={.8}
      data-magnet-attraction={1.8}
      data-tooltip
      data-tooltip-text="open my space"
      isWhite={isWhite}
      pos={pos}
      initial={{ opacity: 0 }}
      animate={{
        opacity: menu ? 0 : 1,
        transition: {
          delay: 0.6,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0,
        },
      }}
      onClick={() => toggleMenu.setMenuIsOpen(!toggleMenu.menuIsOpen)}
    >
      <Bars opened={toggleMenu.menuIsOpen} />

      <HiddenText> Menu </HiddenText>
    </Btn>
  )
}

export default NavBtn
