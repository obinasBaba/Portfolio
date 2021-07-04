import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../../styles/mixins'
import ExperimentTrack from './components/ExperimentTrack'
import Headline from '../../../components/Headline'

const ExperimentsContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  
  ${ spacing( 'mt', 20 ) };
  text-align: center;
  position: relative;
  
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
