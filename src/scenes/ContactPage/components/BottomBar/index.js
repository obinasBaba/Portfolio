import React from 'react'
import styled from 'styled-components'
import Progress from './Progress'
import NextButton from './NextButton'
import {spacing} from '../../../../styles/mixins'

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: thin solid red;
  
  width: 100%;
  
  ${spacing('mt', 9)};
`

const BottomBar = ({next, back, step}) => {
  return (
    <BottomContainer>
      <NextButton txt='Back' onClick={back} />


      <Progress step={step}/>

      <NextButton txt='Next' onClick={next} />

    </BottomContainer>
  )
}

export default BottomBar
