import React, {useRef, useState} from 'react'
import styled, {css} from 'styled-components'
import { Typography } from '@material-ui/core'
import {spacing, length, text} from '../../../../styles/mixins'
import useLotti from '../../../../helpers/useLotti'
import { motion } from 'framer-motion'
import {largeUp} from "../../../../styles/mixins/breakpoints";
import Card from "../MyProcess/components/Card";
import {GradientText, GradientTextStyle} from "../../../../components/GradientText";

const Container = styled(motion.div)`
  //border: thin solid red;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  
  //gap: 1.5rem;

  ${spacing('mt', 6)};
  ${length('gap', 2.3)};

`

const SkillTitle = styled(Typography)`
 ${GradientTextStyle};
  font-weight: bolder;
  letter-spacing: 1.3px;
  text-transform: capitalize;
  
`

const Text = styled(Typography)`
  max-width: 36ch;
  color: #7b8a9b;

  ${text(0.95)};
  
  ${largeUp( css`
    letter-spacing: 1.05px;

  ` )};
`


const List = styled.div`
  margin-top: auto;
  //letter-spacing: 1.5px;
  
  display: flex;

  font-weight: 300;
  color: #a4b5c0;
  opacity: 0.9;

  & > :not(:first-child) {
    ${spacing('ml', 1)};
  }
`




const Illustration = styled.div`
  position: absolute;
  bottom: 107%;
  left: -5%;
  
  max-width: 100px;
  margin-bottom: -2.5rem;
`

const SkillColumn = ({ path, title, text, list }) => {
  const lottiContainerRef = useRef(null)
  const [inView, setInView] = useState(false)

  const lottiRef = useLotti(path, lottiContainerRef, inView)

  return (
    <Container
      onViewportEnter={_ => {
        !inView && setInView(true)
        lottiRef.current && lottiRef.current.play()
      }}
      onViewportLeave={_ => {
        lottiRef.current && lottiRef.current.pause()
      }}
    >

      <Illustration className={title} ref={lottiContainerRef} />

      <SkillTitle variant="h3">{title}</SkillTitle>
      <Text>{text}</Text>

      <List>
        {list.map(txt => (
          <Typography variant='body2'  >#{txt},</Typography>
        ))}
      </List>
    </Container>
  )
}

export default SkillColumn
