import React, {useRef, useState} from 'react'
import styled, {css} from 'styled-components'
import { Typography } from '@material-ui/core'
import {largeUp, spacing, text} from '../../../../styles/mixins'
import useLotti from '../../../../helpers/useLotti'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  gap: 1.5rem;

  ${spacing('mt', 6)};

`

const List = styled.div`
  //margin-top: 2rem;
  //letter-spacing: 1.5px;

  font-weight: 300;
  color: #a4b5c0;
  opacity: 0.9;

  & > :not(:first-child) {
    margin-top: 0.5rem;
  }
`

const Text = styled(Typography)`
  max-width: 36ch;
  color: #7b8a9b;

  ${text(0.95)};
  
  ${largeUp( css`
    letter-spacing: 1.05px;

  ` )};
`

const SkillTitle = styled(Typography)`
  font-weight: bolder;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // this one fixes gradient text line breaks safari bug: https://zellwk.com/blog/multi-line-gradient-links/
  -webkit-box-decoration-break: clone;

  background-image: linear-gradient(
    137.81deg,
    #5d6c7b 3.52%,
    #a4b5c0 41.89%,
    #bfd0d9 96.77%
  );
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

      <SkillTitle variant="h4">{title}</SkillTitle>
      <Text>{text}</Text>

      <List>
        {list.map(txt => (
          <Typography>{txt}</Typography>
        ))}
      </List>
    </Container>
  )
}

export default SkillColumn
