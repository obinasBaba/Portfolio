import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { heightWidth } from '../styles/mixins'
import { Typography } from '@material-ui/core'
import ReturnBtn from '../components/ReturnBtn'
import ReactFullpage from '@fullpage/react-fullpage'
import { AppStateContext } from '../contexts/AppStateContext'
import ProjectPage from '../scenes/ProjectPage'

const Scroll = styled.div`
  position: fixed;
  cursor: pointer;
  left: 17px;
  bottom: 2%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-items: center;
  grid-gap: 0.6rem;

  // ${heightWidth('height', 6)};
  // ${heightWidth('width', 6)};
`

const ScrollTxt = styled(Typography)`
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 3px;
  color: #b3afaf;
  z-index: 999999;
`

const Projects = () => {
  const { show, setShow, setMoon } = useContext(AppStateContext)
  const controllers = []

  useEffect(() => {
    setMoon(false)
  }, [])

  return (
    <>
      <ReturnBtn
        key="return"
        onClick={() => {
          window.history.back()
        }}
      />

      <ReactFullpage
        key={'full'}
        easingcss3="cubic-bezier(0.645, 0.045, 0.355, 1)"
        scrollingSpeed="1e3"
        anchors={['one', 'two', 'three', 'four']}
        navigation={true}
        navigationPosition="left"
        dragAnAndMove={true}
        animateAnchor={false}
        scrollBar={false}
        autoScrolling={true}
        fitToSection={true}
        fixedElements={'#FIXED_'}
        onLeave={(origin, dist, dir) => {
          if (dist.isLast) {
            controllers[origin.index]('initial1')
            return true
          }
          controllers[origin.index]('initial1')
          controllers[dist.index]('animate1')
        }}
        afterLoad={(origin, dist, dir) => {
          if (dist.isLast) return true

          if (dir === null)
            //isFirst
            return controllers[dist.index]('animate1')
        }}
        render={({ state }) => {
          return <ProjectPage controllers={controllers} />
        }}
      />
    </>
  )
}

export default Projects
