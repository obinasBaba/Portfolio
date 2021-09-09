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
`

const BottomBar = ({nextProps, backProps, step, ...props}) => {

  const rendered = useRef(0)

  return (
    <BottomContainer  >
      <GalaxyButton text='Back' {...backProps} />


      <Progress step={step}/>

      <GalaxyButton  {...nextProps} />

      <pre>{rendered.current++}</pre>

    </BottomContainer>
  )
}

export default BottomBar
