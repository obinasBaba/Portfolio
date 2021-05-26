import React from 'react'
import useProjectsAssets from '../../../hooks/queries/useProjectsAssets'
import ProjectList from './components/List'
import Others from './components/Others'
import Headline from '../../../components/Headline'

const Projects = () => {
  const { auth, kklLuzern, udemy, ...listAssets } = useProjectsAssets()
  const othersAssets = { auth, kklLuzern, udemy }


  return (
    <>
      <Headline title={'Projects'} subtitle={'Case-Studies'} />
      <ProjectList {...listAssets} />
      <Others {...othersAssets} />
    </>
  )
}

export default Projects
