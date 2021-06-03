import React from 'react'
import styled from 'styled-components'
import { gridify, spacing } from '../../../../../styles/mixins'
import StackUsed from './components/StackUsed'
import ProjectImage from './components/ProjectImage'
import ProjectDescription from './components/ProjectDescription'
import {motion} from 'framer-motion'
import ReactFullpage from '@fullpage/react-fullpage'
import {Typography} from '@material-ui/core'
import Others from '../Others'
import Headline from '../../../../../components/Headline'

const ProjectGrid = styled( motion.div )`
  ${ gridify };
  
  ${ spacing( 'pt', 7 ) }

  border: thick solid red;
  min-height: 100vh;
  //scroll-snap-align: start;
`


const ProjectList = ({
  preview1,
  preview2,
  preview3,
  css3,
  postgres,
  sql,
  typescript,
  javascript,
  mongo,
  vue,
  pwa,
  react,
  angular,
  node,
  othersAssets,

}) => {


  const items = [
    {
      id: 0,
      link: '/portfolio/project-1',
      linkTitle: 'Case Study',
      preview: preview1,
      tags: 'UX, UI, Illustrations, Icons',
      title: 'Digital Creative Agency.',
      alt: 'Primary Smart Bedding Website',
      imgTitle: 'Primary Smart Bedding Website',
      partners: [react, pwa, mongo, javascript],
    },
    {
      id: 1,
      link: '/portfolio/project-2',
      linkTitle: 'Case Study',
      preview: preview2,
      tags: 'Analytics, UX, UI, Icons, Front-end',
      title: 'Simplistic Beauty And Hair Space.',
      alt: 'Mobalytics. Game Analytics Platform Website',
      imgTitle: 'Mobalytics. Game Analytics Platform Website',
      partners: [node, angular, typescript, sql],
    },
    {
      id: 2,
      link: '/portfolio/project-3',
      linkTitle: 'coming soon',
      preview: preview3,
      tags: 'Analytics, UX, UI, Front-end',
      title: 'smart clock which ease your life',
      alt: 'Glance Clock — First Smart Clock',
      imgTitle: 'Glance Clock — First Smart Clock',
      partners: [postgres, vue, javascript, css3],
    },
  ];
  const topVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      }
    },
  };

  return (
    <>
      {
        items.map( (item, index) => {

          const { id, partners, tags, preview, alt, link, title,  } = item;
          const reversed = !((index % 2) === 0)


          return (

            <div className='section' key={link} >

            <ProjectGrid key={index + tags.toString()}
                         variants={topVariant}
                         initial='initial'
                         whileHover='hover'
                         animate='animate'
                         exit='exit' >

              <ProjectImage reversed={reversed}
                            link={link}
                            alt={alt} title={title}
                            preview={preview} />

              <ProjectDescription link={link}  reversed={reversed} title={title} tags={tags} />

              <StackUsed items={partners} reversed={reversed} />

            </ProjectGrid>

            </div>

          )
        })
      }

       <div className="section"  >
        <Others {...othersAssets} />
      </div>


    </>
  )


}

export default ProjectList
