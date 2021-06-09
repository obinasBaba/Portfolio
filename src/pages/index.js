// noinspection ConstantConditionalExpressionJS

import * as React from 'react'
import { useContext } from 'react'
import { Typography, useMediaQuery } from '@material-ui/core'
import styled from 'styled-components'
import HomePage from '../scenes/HomePage'
import ReactFullpage from '@fullpage/react-fullpage'
import { ExitStateContext } from '../contexts/ExitStateContext'
import ProjectList from '../scenes/HomePage/Projects/components/List'
import useProjectsAssets from '../hooks/queries/useProjectsAssets'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionWrapper } from '../components/Container'
import { heightWidth } from '../styles/mixins'
import ReturnBtn from '../components/ReturnBtn'

const Scroll = styled.div`
  
  position: fixed;
  cursor: pointer;
  left: 17px;
  bottom: 2%;
  display: flex;
  flex-flow: column;
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
  z-index: 999999;
`

const IndexPage = () => {
  const { show, setShow } = useContext(ExitStateContext)

  const controllers = [];


  const { auth, kklLuzern, udemy, ...listAssets } = useProjectsAssets()
  const othersAssets = { auth, kklLuzern, udemy }

  return (
    <AnimatePresence>

      {show && <ReturnBtn key='return' onClick={() => setShow(false)} />}


      {show && <Scroll key='scroll'   >

        <motion.svg xmlns="http://www.w3.org/2000/svg"
                    width="26.091" height="43.103" viewBox="0 0 26.091 43.103">
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

        <ScrollTxt variant={'subtitle2'}
                   onClick={() => console.log('exit')}
        > SCROLL </ScrollTxt>


      </Scroll>}

      {show ?
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
          onLeave={( origin, dist, dir)  => {
            // console.log('after-Leave ------', origin, dist, dir);
            if ( dist.isLast ) {
              controllers[origin.index]('initial');
              return true;
            }
            controllers[origin.index]('initial');
            controllers[dist.index]('animate');
          }}
          afterLoad={( origin, dist, dir ) => {
            if ( dist.isLast )
              return true;

            if ( dir === null ) //isFirst
              return controllers[dist.index]('animate')

            // console.log('afterLoad -------', origin, dist, dir)
            // console.log('*******************************************************')

          }}
          afterRender={i => {
            console.log('afterRender ------- ', i);
            console.log(controllers, '--controlers')
          }}
          render={({ state }) => {
            return (
              <SectionWrapper>
                <ProjectList {...listAssets}
                             controllers={controllers}
                             othersAssets={othersAssets} />
              </SectionWrapper>
            )
          }}
        />

       :
        <motion.div key={'home'} exit={{ x: 200 }}>
          <HomePage />
        </motion.div>


      }

    </AnimatePresence>
  )
}

export default IndexPage
