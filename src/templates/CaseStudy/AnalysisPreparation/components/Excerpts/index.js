import React from 'react'
import {Divider, Typography} from '@material-ui/core'
import styled, {css} from 'styled-components'
import {
  mediumUp,
  smallDown,
  smallUp,
  spacing,
  text,
} from '../../../../../styles/mixins'
import Companies from '../Companies'


const Technology = styled( Typography )`
  ${ spacing('mt', 1) };
  ${ spacing('mb', 1) };
  font-weight: 700;
  opacity: 0.5;

  ${ text(1.5) };


  ${ smallUp( css`
    ${ text(.6) };

  ` ) };
`

const Title = styled( Typography )`
  position: relative;
  font-weight: bold;
  //font-family: var(--sofia-soft);
  ${ spacing('mb', 6) };
  
  &::after{
    content: '';
    position: absolute;
    display: block;
    background: chocolate;
    height: 3px;
    width: 23%;
    ${ spacing('mt', 3) };
  }

  ${ mediumUp( css`
    ${ spacing('mb', 4) };
    &::after{
      ${ spacing('mt', 2) };
    }

  ` ) };
`

const Description = styled( Typography )`
  max-width: 45ch;
  line-height: 160%;
  //opacity: 0.7;
  margin: 0;
  position: relative;
  
  ${ spacing( 'mb', 8 ) };
  
  &::after{
    content: '';
    position: absolute;
    display: block;
    height: 1px;
    background: #aeaeae;
    opacity: 0.5;
    width: 100%;
    ${ spacing('mt', 4) };
  }
  
`

const Excerpts = () => {

  const technologies = ['JAVASCRIPT', ' CSS-MODULES', ' GATSBY', ' REACT']


  return (
    <>
      <Technology className='tech-used' variant='subtitle2'> { technologies.join(', ') } </Technology>
      <Title  variant="h4"> The Power of the cloud. </Title>
      <Description>
        In this project, as a front-end developer and gaphic & UI Designer, i
        was responsible of the entire Grapical artistical and interactive
        direction of the website.
        This Project has an exceptional level of comfort.
      </Description>

      <Companies/>

    </>
  )
}

export default Excerpts
