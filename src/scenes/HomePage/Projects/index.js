import React from 'react'
import useProjectsAssets from '../../../hooks/queries/useProjectsAssets'
import { Typography } from '@material-ui/core'
import ProjectList from './components/List'
import Others from './components/Others'

const Projects = () => {
  const { auth, kklLuzern, udemy, ...listAssets } = useProjectsAssets()
  const othersAssets = { auth, kklLuzern, udemy }


  return (
    <>
      <Typography variant="h1" align='center'>Projects</Typography>
      <ProjectList {...listAssets} />
      <Others {...othersAssets} />
    </>
  )
}

export default Projects
