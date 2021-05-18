import React from 'react'
import Hero from './HomePage/Hero'
import RecentWorks from './HomePage/RecentDesigns'
import { largeUp, spacing } from '../styles/mixins'
import styled, { css } from 'styled-components'
import { Container } from '@material-ui/core'
import Projects from './HomePage/Projects'

const HomePageContainer = styled.div`
  
  ${ spacing( 'pt', 20 ) };
  
  ${ largeUp( css`
    ${ spacing( 'pt', 14 ) };
  ` ) };
`

const SectionWrapper = styled( Container ) `
  max-width: 1600px;
`


const HomePage = () => {
  return (
    <HomePageContainer>

      <SectionWrapper disableGutters={true}
                 maxWidth={false}
                 fixed={false}
                 component={'section'} >
        <Hero/>

      </SectionWrapper>

      <RecentWorks/>

      <Projects/>

    </HomePageContainer>
  )
}

export default HomePage
