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

const ProjectSectionWrapper = styled(SectionWrapper)`
  border: thick solid red;
  display: none;
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

      <RecentWorks />

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
        <MailUs />

      </SectionWrapper>

      <a style={{
        position: 'fixed',
      }} ref={target} href={'#proSec'} className='pro-click' />


    </ >
  )
}

export default HomePage
