import React, {useContext, useEffect} from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import MailUs from '../MailUs'
import { PageContainer, SectionWrapper } from '../../components/Container'
import styled from 'styled-components'
import {ExitStateContext} from '../../contexts/ExitStateContext'

const ProjectSectionWrapper = styled( SectionWrapper )`
  border: thick solid red;
  display: none;
`



const HomePage = () => {

  const {setMoon} = useContext( ExitStateContext );

  useEffect(() => {

    // let a = document.createElement('a')
    // a.href = 'http://localhost:8000/#projects';
    // document.body.append(a)
    // a.click();
    //
    // setTimeout( () => {
    //   document.body.removeChild(a)
    // }, 400 )
    //
    // setMoon(true)

  }, [ ])

  return (
    < >
      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <RecentWorks />

        <SectionWrapper>
          <Projects />
        </SectionWrapper>

      <SectionWrapper>
        <Experiments />
      </SectionWrapper>

      <SectionWrapper>
        <MailUs />
      </SectionWrapper>
    </ >
  )
}

export default HomePage
