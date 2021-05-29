import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { Typography } from '@material-ui/core'
import {heightWidth, smallUp, spacing} from '../../../styles/mixins'
import { motion } from 'framer-motion'

const ContactLink = styled.span`
  z-index: 50;
  display: none;
  font-family: var(--sofia-soft);
  font-size: 18px;
  font-weight: 300;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  text-decoration: none;
  color: ${({ isWhite }) => (isWhite ? '#02021e' : '#fff')};
  letter-spacing: 0.5px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${smallUp(css`
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

const ContactBtn = ({ isWhite, toggleModal: {setContactIsOpen, contactIsOpen} }) => {
  return (
    <motion.div
      onClick={ () => setContactIsOpen( !contactIsOpen ) }

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

        <ContactLink isWhite={isWhite}>
          <Typography
            style={{
              fontFamily: 'var(--sofia-soft)',
              fontSize: '18px',
              fontWeight: '300',
            }}
          >
            Contact
          </Typography>
        </ContactLink>

    {/*</Link>*/}
    </motion.div>

  )
}

export default ContactBtn
