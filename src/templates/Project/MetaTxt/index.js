import React from 'react'
import styled, {css} from 'styled-components'
import {Container, Typography} from '@material-ui/core'
import {motion} from 'framer-motion'
import {mediumUp, spacing} from '../../../styles/mixins'

const MetaContainer = styled( Container )`
  
`

export const Role = styled( motion.ul )`
  display: flex;
  align-items: center;
  text-align: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: #02021e;
  //display: none;
  //visibility: hidden;
  //border: thin solid red;

  ${spacing('mv', 8)};
  
  
  
  li{
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    ${ spacing('mr', 10) };

    &:not( :last-child ){
    }
  }
`


export const Q = styled(Typography)`
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
`

export const A = styled( Typography )`
  //line-height: 160%;
  letter-spacing: 0;
  font-weight: 100;
  color: gray;
  // ${ spacing( 'text-indent', 1 ) };
`

const MetaTxt = () => {

  const About = [
    { q: 'Role -', a: 'UI design / Coding' },
    { q: 'Period -', a: 'End 2020' },
    { q: 'Context -', a: 'Design, Illustration and Lettering' },
  ];

  return (

    <MetaContainer maxWidth='lg' fixed={false}>



      <Role>
        {About.map(({ q, a }) => (
          <li key={q}>
            <Q variant='h5' > {q}  </Q>
            <A variant='subtitle' > { a} </A>

            <Typography variant={'body1'} />

          </li>
        ))}
      </Role>

    </MetaContainer>

  )
}

export default MetaTxt
