import React from 'react'
import styled from 'styled-components'
import Headline from './components/Headline'
import { spacing } from '../../../styles/mixins'
import ExperimentTrack from './components/ExperimentTrack'
import ScrollGallery from '../../../components/ScrollGallery/ScrollGallery'

const ExperimentsContainer = styled.div`

  ${ spacing( 'mt', 20 ) };
  ${spacing('mb', 14)}; //todo delete this
  text-align: center;
  position: relative;
`

const Experiments = () => {
  return (
    <ExperimentsContainer>

      <Headline title={' Web is fun'} subtitle={'Experiments & Open Source'}  />

      <ExperimentTrack />

    </ExperimentsContainer>
  )
}

export default Experiments
