import * as React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import HomePage from '../scenes/HomePage'
import ReactFullpage from '@fullpage/react-fullpage'
import { useContext, useState } from 'react'
import { ExitStateContext } from '../contexts/ExitStateContext'
import ProjectList from '../scenes/HomePage/Projects/components/List'
import useProjectsAssets from '../hooks/queries/useProjectsAssets'
import { AnimatePresence, motion } from 'framer-motion'


const IndexPage = () => {
  const { show, setShow } = useContext(ExitStateContext)

  const { auth, kklLuzern, udemy, ...listAssets } = useProjectsAssets()
  const othersAssets = { auth, kklLuzern, udemy }

  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <div
          key={'fixed'}
          style={{
            position: 'fixed',
            bottom: 80,
            left: 40,
            zIndex: 999999,
          }}
        >
          <Typography variant="h1" onClick={() => setShow(false)}>
            Exit
          </Typography>
        </div>
      )}

      {show ?
        <ReactFullpage
          key={'full'}
          easingcss3="cubic-bezier(0.645, 0.045, 0.355, 1)"
          scrollingSpeed="1e3"
          anchors={['top', 'reile', 'abb', 'con']}
          navigation={true}
          navigationPosition="left"
          animateAnchor={false}
          scrollBar={false}
          autoScrolling={true}
          fitToSection={true}
          fixedElements={'#FIXED_'}
          onLeave={(index, nextIndex, direction) => {
            console.log(index, nextIndex, direction)
          }}
          render={({ state, fullpageApi }) => {
            return <ProjectList {...listAssets} othersAssets={othersAssets} />
          }}
        />
       :

        <motion.div key={'home'} exit={{
          x: 200,
        }} >
          <HomePage />
        </motion.div>

      }
    </AnimatePresence>
  )
}

export default IndexPage
