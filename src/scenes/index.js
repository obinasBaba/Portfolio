import React from 'react'
import Hero from './HomePage/Hero'
import RecentWorks from './HomePage/RecentDesigns'
import { largeUp, spacing } from '../styles/mixins'
import styled, { css } from 'styled-components'
import { Container } from '@material-ui/core'
import Projects from './HomePage/Projects'
import Experiments from './HomePage/Experiments'
import MailUs from './MailUs'

const HomePageContainer = styled.div`
  //width: 5400px;

  //margin-left: auto;


  ${ spacing( 'pt', 20 ) };
  
  ${ largeUp( css`
    ${ spacing( 'pt', 14 ) };
  ` ) };
`

let StyledSectionWrapper = styled( Container ) `
  max-width: 1600px;
  margin: 0 auto;

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

      <SectionWrapper >
        <Experiments />
      </SectionWrapper>

      <SectionWrapper >
        <MailUs />
      </SectionWrapper>


    </HomePageContainer>
  )
}

export default HomePage
