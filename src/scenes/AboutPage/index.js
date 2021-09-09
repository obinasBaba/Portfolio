import React from 'react'
import styled from 'styled-components'
import AboutHero from './components/AboutHero'
import MyProcess from './components/MyProcess'
import MailUs from '../MailUs'
import Skills from './components/Skills'

const AboutPageContainer = styled.div`

`

const ScrollText = styled.section`
  padding: 3rem;
  min-height: 90vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  opacity: .3;
  filter: blur(.3px);
  font-family: Elianto-Regular,serif;
  
  .content__breakout{
    margin: 0 -3rem;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 200;
    font-style: italic;
    opacity: .3;
    font-family: Elianto-Regular,serif;
  }
  
  .content__breakout--big {
    font-size: 10vw;
    font-weight: 200;
  }

  .content__breakout--medium {
    font-size: 5vw;
  }
`

const AboutPage = () => {
  return (
    <>
      <AboutHero/>

      <ScrollText className="content content--feature" data-scroll-section>

        <p className="content__breakout content__breakout--big" data-scroll
           data-scroll-speed="3" data-scroll-direction="horizontal">endless
          acceleration toward infinity</p>
        <p className="content__breakout content__breakout--medium" data-scroll
           data-scroll-speed="-1" data-scroll-direction="horizontal">the
          greatest barrier to your enlightenment</p>

      </ScrollText>

      <Skills/>
      <MyProcess/>
      <MailUs/>
    </>
  )
}

export default AboutPage
