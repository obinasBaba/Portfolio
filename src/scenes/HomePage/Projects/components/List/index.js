import React from 'react'
import styled from 'styled-components'
import { gridify, spacing } from '../../../../../styles/mixins'
import ProjectScene from './components/ProjectScene'
import StackUsed from './components/Stack'


const ProjectGrid = styled.div`
  ${ gridify };
  
  ${ spacing( 'mt', 14 ) }
`


const ProjectList = ({
  preview1,
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
}) => {

  const items = [
    {
      id: 0,
      link: 'https://www.behance.net/gallery/65940547/Primary-Smart-Bedding-Website',
      linkTitle: 'Case Study',
      preview: preview1,
      tags: 'UX, UI, Illustrations, Icons',
      title: 'bedding cutting price for 50%',
      alt: 'Primary Smart Bedding Website',
      imgTitle: 'Primary Smart Bedding Website',
      partners: [react, pwa, mongo, javascript],
    },
    {
      id: 1,
      link: 'https://www.behance.net/gallery/66754531/Mobalytics-Game-Analytics-Platform-Website',
      linkTitle: 'Case Study',
      preview: preview3,
      tags: 'Analytics, UX, UI, Icons, Front-end',
      title: 'Game wins Disrupt & Raise $2.6M',
      alt: 'Mobalytics. Game Analytics Platform Website',
      imgTitle: 'Mobalytics. Game Analytics Platform Website',
      partners: [node, angular, typescript, sql],
    },
    {
      id: 2,
      link:
        'https://www.behance.net/gallery/70303073/Glance-Clock-First-Smart-Clock',
      linkTitle: 'coming soon',
      preview: preview1,
      tags: 'Analytics, UX, UI, Front-end',
      title: 'smart clock which ease your life',
      alt: 'Glance Clock — First Smart Clock',
      imgTitle: 'Glance Clock — First Smart Clock',
      partners: [postgres, vue, javascript, css3],
    },
  ];

  return (
    <>
      {
        items.map( (item, index) => {

          const { id, partners, ...sceneProps } = item;
          const isReversed = !((index % 2) === 0)

          return (
            <ProjectGrid key={id}>

              <ProjectScene {...sceneProps} reversed={isReversed} />
              <StackUsed items={partners} reversed={isReversed} />

            </ProjectGrid>
          )
        })
      }
    </>
  )
}

export default ProjectList
