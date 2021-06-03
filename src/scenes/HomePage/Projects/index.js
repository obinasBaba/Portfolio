import React, {useContext, useEffect, useState} from 'react'
import useProjectsAssets from '../../../hooks/queries/useProjectsAssets'
import ProjectList from './components/List'
import Others from './components/Others'
import Headline from '../../../components/Headline'
import 'fullpage.js/vendors/scrolloverflow'
import ReactFullpage from '@fullpage/react-fullpage'
import { Typography } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import {ExitStateContext} from '../../../contexts/ExitStateContext'

const v = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
}

const Projects = ({ projects, setProjects, state }) => {

  const { show, setShow} = useContext( ExitStateContext );


  useEffect( () => {

    console.log('State==', state, ',show ==', projects)

  }, [projects] )


  return (
    <>
        <motion.div
          variants={v}
          key={'headline'}
          initial="initial"
          animate="animate"
          className='section'
          exit="exit"
          id={'proj'}
        >

          <Headline
            title={'Projects'}
            subtitle={'Case-Studies'}
            mb={15}
            showProjects={setShow}
          />
        </motion.div>
    </>
  )
}

export default Projects
