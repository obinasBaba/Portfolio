import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../../styles/mixins'
import ExperimentTrack from './components/ExperimentTrack'
import Headline from '../../../components/Headline'

const ExperimentsContainer = styled.div`
  max-width: 100%;
  //overflow: hidden;
  text-align: center;
  position: relative;
  
  ${ spacing( 'mt', 10 ) };
  
  
  //border: thin solid crimson;
  
`

const Diagonal = styled.div`
  position: absolute;
  height: 1200px;
  width: 1200px;
  //width: 100%;
  top: -50%;
  z-index: -10;
  right: 0%;
`

const Experiments = () => {
  return (
    <ExperimentsContainer>

      <Headline title={' Web is fun'} subtitle={'Experiments & Open Source'}  mb={4} />

      <ExperimentTrack />

    </ExperimentsContainer>
  )
}

export default Experiments
