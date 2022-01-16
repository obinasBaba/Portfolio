import React, { useContext, useEffect } from "react";
import styled from 'styled-components'
import { spacing } from '../../../styles/mixins'
import ExperimentTrack from './components/ExperimentTrack'
import HeadlineTitle from '../../../components/Headline'

const ExperimentsContainer = styled.div`
  max-width: 100%;
  text-align: center;
  position: relative;
  
  ${ spacing( 'mt', 15 ) };
  
  
  //border: thin solid crimson;
  
`


const Experiments = () => {

  return (
    <ExperimentsContainer data-scroll data-scroll-class='experiment'>

      <HeadlineTitle title={' Web is fun'} subtitle={'Experiments & Open Source'} mb={4} />

      <ExperimentTrack />

    </ExperimentsContainer>
  )
}

export default Experiments
