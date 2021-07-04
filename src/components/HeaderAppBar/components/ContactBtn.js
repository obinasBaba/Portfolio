import React from 'react'
import styled, { css } from 'styled-components'
import { Typography } from '@material-ui/core'
import {heightWidth, mediumUp, spacing, text} from '../../../styles/mixins'
import { motion } from 'framer-motion'

const StyledContactBtn = styled.span`
  z-index: 50;
  display: none;
  //font-family: var(--sofia-soft);
  font-weight: lighter;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  text-decoration: none;
  color: ${({ isWhite }) => (isWhite ? '#02021e' : '#fff')};
  letter-spacing: calc(1px * var(--indent));
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${ text(1.1) };
  
  ${mediumUp(css`
    display: flex;
  `)};
  
  ${heightWidth('width', 18)};
  ${heightWidth('height', 6)};
  ${spacing('mr', 2)};
  

  ${({ isWhite }) =>
    isWhite &&
    css`
      border-color: rgba(2, 2, 30, 0.2);
    `};

  &[data-status='opened'] {
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`

const ContactBtn = ({ isWhite, setContactModal, isContactOpen }) => {



  return (
    <motion.div
      onClick={ () => setContactModal( !isContactOpen ) }

      style={{
      zIndex: 999,
    }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: .7,
        }
      }}
    exit={{
      opacity: 0,
      transition: {
        delay: .2,
      }
    }}
    >

    {/*<Link className={'whiteBtn'} to="/contacts/" style={{ zIndex: 999 }}>*/}

        <StyledContactBtn isWhite={isWhite}>
          {/*<Typography variant='subtitle1' className='contact-txt' >*/}
            Contact
          {/*</Typography>*/}
        </StyledContactBtn>

    {/*</Link>*/}
    </motion.div>

  )
}

export default ContactBtn
