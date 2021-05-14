import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { Typography } from '@material-ui/core'
import { heightWidth, smallUp } from '../../../styles/mixins'

const ContactLink = styled.span `
  z-index: 50;
  display: none;
  
  ${ smallUp( css`
    display: flex;
    
  ` ) };
  
  font-family: var(--sofia-soft);
  font-size: 18px;
  font-weight: 300;
  transition: all .3s;
 
  ${ heightWidth( 'width', 18 ) };
  ${ heightWidth( 'height', 6 ) };
  
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  text-decoration: none;
  color: white;
  letter-spacing: 0.5px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  

  &[data-status='opened'] {
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    border-color: ${ ( {theme} ) => theme.palette.secondary.main };
    background-color: ${ ( {theme} ) => theme.palette.secondary.main };
  }
`

const ContactBtn = () => {
  return (

    <Link to="/contacts/" style={{ zIndex: 999 }}  >

      <ContactLink>
        <Typography style={{
          fontFamily: 'var(--sofia-soft)',
          // fontSize: '18px',
          fontWeight: '300',
        }} >
         Contact
        </Typography>
      </ContactLink>

    </Link>
  )
}

export default ContactBtn
