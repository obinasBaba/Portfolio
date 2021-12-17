import React, {useRef} from 'react'
import styled from 'styled-components'
import Progress from './Progress'
import {spacing} from '../../../../styles/mixins'
import GalaxyButton from './GalaxyButton'

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: thin solid red;
  
  width: 100%;
  
  ${spacing('mt', 9)};
  ${spacing('ph', 5)};
`

const BottomBar = ({nextProps, backProps, step, control}) => {


  return (
    <BottomContainer  >
      <GalaxyButton text='Back' stateValue={control} {...backProps} />

      <Progress step={step}/>

      <GalaxyButton stateValue={control}  {...nextProps} />

    </BottomContainer>
  )
}

export default BottomBar
