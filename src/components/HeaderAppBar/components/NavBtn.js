import React, {useEffect, useState} from 'react'
import styled, { css } from 'styled-components'
import { heightWidth, mediumUp, spacing } from '../../../styles/mixins'
import { motion } from 'framer-motion'
import MagnetElement from '../../../helpers/MagnetElement'

// const headerTransition = 'all .3s'

const Btn = styled(motion.button)`
  --clr: crimson;
  
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  outline: none;
  border: ${({ isWhite }) =>
          isWhite
                  ? 'thin solid rgba(2, 2, 30, 0.2)'
                  : 'thin solid rgba(255, 255, 255, 0.2)'};
  
  border: none;
  
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s, border .3s;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  z-index: 999550;

  ${heightWidth('height', 6)};
  ${heightWidth('width', 6)};
  

  ${({ isWhite }) =>
    isWhite
      ? css`
          & > :first-child {
            background-color: #02021e;

            &::after,
            &::before {
              background-color: #02021e;
            }
          }
        `
      : ''};

  &:hover,
  &:focus {

    & > :first-child {
      //bars
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
  background-color: #f9d6ac;
  margin: auto;
  border-radius: 550px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    border-radius: 555px;
    height: 3px;
    width: 70%;
    background-color: #f9d6ac;
    transition: transform 0.3s;
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
`

const NavBtn = ({ isWhite, toggleMenu, pos, variants = {} }) => {

  useEffect(() => {

    const magnet = new MagnetElement({
      element: document.querySelector('.nav-btn'),
      amounts: {
        trigger: 1.2,
        stop: 1.5,
        distance: .42
      }
    })

    return () => {
      magnet.stop()
      magnet.disconnect()
    }

  }, [])

  return (
    <Btn
      className='nav-btn'
      isWhite={isWhite}
      pos={pos}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
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
      {toggleMenu.menuIsOpen ? 'SVG' :  <Bars opened={toggleMenu.menuIsOpen} />}

      <HiddenText> Menu </HiddenText>
    </Btn>
  )
}

export default NavBtn
