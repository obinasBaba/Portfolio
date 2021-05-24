import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { heightWidth } from '../../../styles/mixins'

// const headerTransition = 'all .3s'

const Btn = styled.button`
  ${heightWidth('height', 6)};
  ${heightWidth('width', 6)};
    
  position: relative;
  overflow: hidden;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: all .3s;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  z-index: 50;


  &:hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({ theme, open }) => theme.palette.secondary.main};

    &:after {
      transform: translateX(0%);
    }
  }
}
`

const Bars = styled.span`
  position: absolute;
  height: 1px;
  left: 0;
  right: 0;
  width: 40%;
  top: 50%;
  display: block;
  background-color: white;
  margin: auto;
  border-radius: 30px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    border-radius: 3px;
    height: 1.2px;
    width: 70%;
    background: #fff;
    transition: all 0.3s;
  }

  &:before {
    margin-top: -0.5rem;
  }

  &:after {
    margin-top: 0.5rem;
  }

  ${({ opened }) =>
    opened
      ? css`
          background-color: transparent;

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

const NavBtn = () => {

  const [open, setOpen] = useState(false);

  return (
    <Btn onClick={ () => setOpen(!open) } >
      <Bars opened={open} />
      <HiddenText> Menu </HiddenText>
    </Btn>
  )
}

export default NavBtn
