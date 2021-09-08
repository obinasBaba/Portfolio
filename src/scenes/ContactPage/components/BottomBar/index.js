import React from 'react'
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
`

const BottomBar = ({nextProps, backProps, step, ...props}) => {
  return (
    <BottomContainer  >
      <GalaxyButton text='Back' {...backProps} />


      <Progress step={step}/>

      <GalaxyButton  {...nextProps} />

    </BottomContainer>
  )
}

export default BottomBar
