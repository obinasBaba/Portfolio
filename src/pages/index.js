// noinspection ConstantConditionalExpressionJS

import * as React from 'react'
import { Typography, useMediaQuery } from '@material-ui/core'
import styled, { css } from 'styled-components'
import HomePage from '../scenes/HomePage'
import ReactFullpage from '@fullpage/react-fullpage'
import { useContext, useEffect, useState } from 'react'
import { ExitStateContext } from '../contexts/ExitStateContext'
import ProjectList from '../scenes/HomePage/Projects/components/List'
import useProjectsAssets from '../hooks/queries/useProjectsAssets'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionWrapper } from '../components/Container'
import { heightWidth, mediumUp, spacing } from '../styles/mixins'
import ReturnBtn from '../components/ReturnBtn'
import {Tags} from '../scenes/HomePage/Projects/components/List/components/ProjectDescription'

const Scroll = styled.div`
  position: fixed;
  cursor: pointer;
  left: 30px;
  bottom: 10%;
  //border: thin solid red;
  
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: .6rem;
  

  // ${heightWidth('height', 6)};
  // ${heightWidth('width', 6)};
`

const ScrollTxt = styled( Typography )`
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 3px;
  color: #b3afaf;
`

const IndexPage = () => {
  const { show, setShow } = useContext(ExitStateContext)
  let navPos = ''
  const match = useMediaQuery(theme => theme.breakpoints.up('sm'))

  const { auth, kklLuzern, udemy, ...listAssets } = useProjectsAssets()
  const othersAssets = { auth, kklLuzern, udemy }

  return (
    <AnimatePresence>

      {true && <ReturnBtn key='return' onClick={() => setShow(false)} />}

      <Scroll key='scroll'>

        <motion.svg xmlns="http://www.w3.org/2000/svg" width="26.091" height="43.103" viewBox="0 0 26.091 43.103">
          <g id="Group_17" data-name="Group 17" transform="translate(-50.955 -692.897)">
            <g id="Rectangle_42" data-name="Rectangle 42" transform="translate(51 693)" fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1">
              <rect width="26" height="43" rx="13" stroke="none"/>
              <rect x="0.5" y="0.5" width="25" height="42" rx="12.5" fill="none"/>
            </g>
            <rect id="Rectangle_43"
                         data-name="Rectangle 43" width="3" height="4" rx="1.5" transform="translate(62 703)" fill="#fff"/>

            <motion.path id="overlay-right" d="M2229,682.48s-10.071-.271-12.409,10.793c.061.047-.341,2.278.016,20.266,2.053,11.153,12.408,11.059,12.393,10.932"
                         animate={{pathLength: [0, 1]}}
                         transition={{
                           duration: 2,
                           repeat: Infinity
                         }}
                         transform="translate(-2165 10.921)" fill="none" stroke="#fff" stroke-width="2"/>

            <motion.path id="overlay-left" d="M2216.458,682.48s10.071-.271,12.409,10.793c-.061.047.341,2.278-.016,20.266-2.053,11.153-12.408,11.059-12.393,10.932"
                         animate={{pathLength: [0, 1]}}
                         transition={{
                           duration: 2,
                           repeat: Infinity
                         }}
                         transform="translate(-2152.458 10.921)" fill="none" stroke="#fff" stroke-width="2"/>
          </g>
        </motion.svg>




        <ScrollTxt variant={'subtitle2'} > SCROLL </ScrollTxt>


      </Scroll>

      {true ? (
        <ReactFullpage
          key={'full'}
          easingcss3="cubic-bezier(0.645, 0.045, 0.355, 1)"
          scrollingSpeed="1e3"
          anchors={['top', 'reile', 'abb', 'con']}
          navigation={true}
          navigationPosition="left"
          dragAnAndMove={true}
          animateAnchor={false}
          scrollBar={false}
          autoScrolling={true}
          fitToSection={true}
          fixedElements={'#FIXED_'}
          onLeave={(index, nextIndex, direction) => {
            console.log('OnLeave ------- ', index, nextIndex, direction)
            // return false;
          }}
          afterLoad={(anchor, index) => {
            console.log('afterLoad -------', anchor, index)
            console.log(
              '*******************************************************'
            )
          }}
          afterRender={i => {
            console.log('afterRender ------- ', i)
          }}
          render={({ state, fullpageApi }) => {
            return (
              <SectionWrapper>
                <ProjectList {...listAssets} othersAssets={othersAssets} />
              </SectionWrapper>
            )
          }}
        />
      ) : (
        <motion.div key={'home'} exit={{ x: 200 }}>
          <HomePage />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IndexPage
