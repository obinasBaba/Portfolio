import React, {useContext, useEffect, useRef} from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import MailUs from '../MailUs'
import {PageContainer, SectionWrapper} from '../../components/Container'
import styled from 'styled-components'
import {ExitStateContext} from '../../contexts/ExitStateContext'
import {Typography} from '@material-ui/core'
import Moon from '../../layouts/Components/Moon'
import BlogPosts from './BlogPosts'
import MyProcess from './MyProcess'

const ProjectSectionWrapper = styled(SectionWrapper)`
  border: thick solid red;
  display: none;
`

const RecentWorkWrapper = styled.section`
  max-width: 100vw;
  overflow: hidden;
  width: 100%;
  //display: none;
`

const HomePage = () => {

  const { setMoon, moon } = useContext(ExitStateContext)
  const target = useRef(null);


  useEffect(() => {

    setMoon(true)
  }, [])

  return (
    < >

      <SectionWrapper>
        <Hero />

      </SectionWrapper>

      <RecentWorkWrapper>
        <RecentWorks />
      </RecentWorkWrapper>

      <SectionWrapper>
        <Projects />
      </SectionWrapper>

      <SectionWrapper>
        <BlogPosts/>
      </SectionWrapper>


      <SectionWrapper>
        <Experiments />
      </SectionWrapper>

      <SectionWrapper>
        <MyProcess/>
      </SectionWrapper>


      <SectionWrapper>
        <MailUs />
      </SectionWrapper>



    </>
  )
}

export default HomePage
