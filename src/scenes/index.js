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

let StyledSectionWrapper = styled( Container ) `
  max-width: 1600px;
`

const SectionWrapper = ( {children} ) => {
  return(
    <StyledSectionWrapper disableGutters={true}
                    maxWidth={false}
                    fixed={false}
                    component={'section'}>{children}</StyledSectionWrapper>
  );
}

const HomePage = (  ) => {
  return (
    <HomePageContainer>

      <SectionWrapper >
        <Hero/>
      </SectionWrapper>

      <RecentWorks/>

      <SectionWrapper >
        <Projects/>
      </SectionWrapper>


    </HomePageContainer>
  )
}

export default HomePage
