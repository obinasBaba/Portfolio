import React from 'react'
import styled from 'styled-components'
import TitleWithSub from './components/Title'
import { spacing } from '../../../styles/mixins'
import ExperimentTrack from './components/ExperimentTrack'

const ExperimentsContainer = styled.section`
  ${ spacing( 'mt', 20 ) };
  ${spacing('mb', 14)}; //todo delete this
`

const Experiments = () => {
  return (
    <ExperimentsContainer>

      <TitleWithSub />
      <ExperimentTrack />

    </ExperimentsContainer>
  )
}

export default Experiments
