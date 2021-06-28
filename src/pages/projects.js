import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { heightWidth } from '../styles/mixins'
import { Typography } from '@material-ui/core'
import ReturnBtn from '../components/ReturnBtn'
import ReactFullpage from '@fullpage/react-fullpage'
import { AppStateContext } from '../contexts/AppStateContext'
import ProjectPage from '../scenes/ProjectPage'
import {motion} from 'framer-motion'

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
  const controllers = []

  const {
    moonLight,
    setMoonLight
  } = useContext( AppStateContext )

  useEffect(() => {
    setMoonLight({...moonLight, showMoon: false})

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
        // key={'fullpage'}
        easingcss3="cubic-bezier(0.645, 0.045, 0.355, 1)"
        scrollingSpeed="1e3"
        anchors={['one', 'two', 'three', 'four']}
        animateAnchor={false}
        setLockAnchors={false}
        setRecordHistory={false}
        navigation={true}
        navigationPosition="left"
        dragAnAndMove={true}
        scrollBar={false}
        autoScrolling={true}
        fitToSection={true}
        fixedElements={'#FIXED_'}
        onLeave={(origin, dist, dir) => {
          // console.log('onLeave ----',)

          if (dist.isFirst) {
            // console.log(document.location.replace('/projects#two'))
            // console.log(document.location.replace('/projects#three'))
          }

          if (dist.isLast) {
            controllers[origin.index]('exitFp')
            return true
          }
          controllers[origin.index]('exitFp')
          controllers[dist.index]('animateFp')
        }}
        afterLoad={(origin, dist, dir) => {
          // console.log('afterLoad ----', dir, origin )

          if (dist.isLast) return true

          if (dir === null)
            return controllers[dist.index]('animateFp')
        }}
        render={({ state }) => {
          // console.log('API: ', state)

          return <ProjectPage controllers={controllers} />
        }}
      />
    </>

  )
}

export default Projects
