import React, { useContext, useEffect } from 'react'
import Headline from '../../../components/Headline'
import 'fullpage.js/vendors/scrolloverflow'
import { motion } from 'framer-motion'
import { ExitStateContext } from '../../../contexts/ExitStateContext'

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
