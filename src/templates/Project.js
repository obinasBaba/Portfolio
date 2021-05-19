import React from 'react'
import { Typography } from '@material-ui/core'

const Project = ({ pageContext }) => {

  return (
    <div>
      <Typography variant="h1"> This is Project Page {pageContext.index} </Typography>
    </div>
  )
}

export default Project
