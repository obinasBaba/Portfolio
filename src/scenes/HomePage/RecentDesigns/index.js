import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import ScrollGallery from '../../../components/ScrollGallery/ScrollGallery'
import {spacing} from "../../../styles/mixins";

const RecentDesignWrapper = styled.section`
  //min-height: 100vh;
  //border: thin solid red;

    ${ spacing( 'mt', 20 ) };

`

const RecentWorks = () => {


  return (
    <RecentDesignWrapper id='#design'
                         // data-scroll-section={true}
    >
      <Title />
      <ScrollGallery />
    </RecentDesignWrapper>
  )
}

export default RecentWorks;
