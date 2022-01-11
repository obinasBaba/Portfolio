import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import ScrollGallery from '../../../components/ScrollGallery/ScrollGallery'

const RecentDesignWrapper = styled.section`
  //min-height: 100vh;
  //border: thin solid red;
`

const RecentWorks = () => {


  return (
    <RecentDesignWrapper id='#design' data-scroll-section={true} >
      <Title />
      <ScrollGallery />
    </RecentDesignWrapper>
  )
}

export default RecentWorks;
