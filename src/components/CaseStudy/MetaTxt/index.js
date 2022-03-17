import React from 'react'
import styled, {css} from 'styled-components'
import { Container, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { spacing } from '../../../styles/mixins'
import mockup from '../../../assets/images/vigoza/Showcase.png'
import ResponsiveContainer from "../../ResponsiveContainer";
import {largeUp, mediumUp} from "../../../styles/mixins/breakpoints";

const MetaContainer = styled( ResponsiveContainer )`
  //display: flex;
  //justify-content: start;
  //flex-flow: column;

  ${spacing('mt', 6)};
  ${spacing('mb', 10)};

  
`

export const MetaTextContainer = styled(motion.ul)`
  //border: thin solid red;

  max-width: 100%;
  display: flex;
  flex-flow: wrap;
  align-items: flex-start;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  color: #02021e;
  //margin: 0 0 0 12%;

  //border: thin solid red;

  ${spacing('mt', 16)};
  
  ${ mediumUp( css`
    max-width: 70%;
    justify-content: flex-start;
  ` ) };

  li {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    //border: thin solid teal;

    flex-basis: 33%;
    
    
    // ${spacing('mr', 10)};
    ${spacing('mt', 4.5)};

    &:not(:last-child) {
    }
  }
`

export const Q = styled(Typography)`
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
`

export const A = styled(Typography)`
  //line-height: 160%;
  letter-spacing: 0;
  font-weight: 100;

  // ${spacing('text-indent', 1)};
`

const MetaTxt = () => {
  const about = [
    { q: 'Role -', a: 'UI design / Coding' },
    { q: 'Period -', a: 'End 2020' },
    { q: 'Context -', a: 'Illustration, Illustration and Lettering' },
    { q: 'tools -', a: 'figma, illustrator, react, javascript' },
    { q: 'clients -', a:'Vigoza inc.' },
  ]

  return (
    <MetaContainer  >
      <MetaTextContainer>
        {about.map(({ q, a }) => (
          <li key={q}>
            <Q noWrap  variant="h5"> {q}</Q>
            <A variant="subtitle"> {a} </A>
          </li>
        ))}
      </MetaTextContainer>



    </MetaContainer>
  )
}

export default MetaTxt
