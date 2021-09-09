import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Typography} from '@material-ui/core'
import {spacing, text} from '../../../../styles/mixins'
import useOnScreen from '../../../../hooks/useOnScreen'
import lotti from 'lottie-web'
import useLotti from '../../../../helpers/useLotti'

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  
  gap: 1.5rem;
`

const List = styled.div`
  //margin-top: 2rem;
  //letter-spacing: 1.5px;
  
  font-weight: 300;
  
  

  & > :not(:first-child){
    margin-top: .5rem;
  }
  
`

const Text = styled( Typography )`
  max-width: 36ch;
  color: #7b8a9b;
  letter-spacing: 1.05px;


  ${text(.95)};
`

const SkillTitle = styled( Typography )`
  font-weight: bolder;
`

const Illustration= styled.div`
  max-width: 100px;
  margin-bottom: -2.5rem;
`

const SkillColumn = ({path, title, text, list}) => {

  const lottiRef = useRef(null)

  useLotti(path, lottiRef )

  return (
    <Container>
      <Illustration className={title} ref={lottiRef}/>

      <SkillTitle variant='h4'>{title}</SkillTitle>
      <Text >{text}</Text>

      <List>
        {list.map(txt => <Typography>{txt}</Typography>)}
      </List>


    </Container>
  )
}

export default SkillColumn
