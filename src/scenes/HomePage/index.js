import React, { Suspense } from 'react'
import Hero from './Hero'
import RecentWorks from './RecentDesigns'
import Projects from './Projects'
import Experiments from './Experiments'
import { SectionWrapper } from '../../components/Container'
import BlogPosts from './BlogPosts'
import { motion } from 'framer-motion'

const MailUs = React.lazy(() => import('../MailUs'))

const containerVariants = {
  initial: {
    // opacity: 0,
  },
  animate: {
    // opacity: 1
    transition: {

    }
  },
  exit: {
    // opacity: 0,
  },

   transition: {
    // duration: 5
   }
}

const HomePage = () => {

  const isSSR = typeof window === "undefined"

  return (
    < motion.div variants={containerVariants}
                 transition={containerVariants.transition}
                 initial="initial"
                 animate="animate"
                 exit="exit"
    >

      <SectionWrapper dataScrollSection={true}>
        <Hero />
      </SectionWrapper>

      <RecentWorks />

      <Projects />

      <SectionWrapper dataScrollSection={true} >
        <BlogPosts />
      </SectionWrapper>

      <SectionWrapper dataScrollSection={true}>
        <Experiments />
      </SectionWrapper>


      {
        !isSSR && <Suspense fallback={<h1>loading...</h1>}><MailUs /></Suspense>
      }


    </motion.div>
  )
}

export default HomePage
