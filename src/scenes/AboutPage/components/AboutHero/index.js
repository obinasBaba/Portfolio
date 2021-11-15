import React from 'react'
import styled from 'styled-components'
import {spacing, text} from '../../../../styles/mixins'
import {Container, Typography} from '@material-ui/core'

const AboutHeroContainer = styled.div`
  min-height: 100vh;
  
  
  ${spacing('mt', 16)};
`

const Hello = styled( Typography )`
  font-family: Elianto-Regular,serif;
  font-weight: bolder;
  margin-bottom: 2rem;
`

const Motto = styled( Typography )`
  font-weight: bolder;
  color: #7b8a9b;


`

const Text = styled( Typography )`
  max-width: 36ch;
  color: #7b8a9b;;


  ${text(1)};
  ${spacing('mt', 6)};
`


const AboutHero = () => {
  return (
    <AboutHeroContainer data-scroll-section>

      <Container maxWidth='xl' >
        <Hello variant='h1'>
          Hello.
        </Hello>

        <Motto variant='h2' gutterBottom>
          I create progress by designing and developing digital experiences,
        </Motto>

        <Text>
          I believe that we can live in a world when every
          product or service has an easy to use experience on platforms and
          my mission is to make it happen.
        </Text>

      </Container>


    </AboutHeroContainer>
  )
}

export default AboutHero
