import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import MotionBtn from '../../../../../../../components/MotionBtn'
import { Typography } from '@material-ui/core'
import ProjectDescription from './ProjectDescription'
import ProjectImage from './ProjectImage'
import { motion } from 'framer-motion'

const Tags = styled(Typography)`
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 0.5px;
  color: #b3afaf;
`

const ProjectScene = ({
  link,
  preview,
  reversed,
  tags,
  title,
  alt,
  imgTitle,
}) => {
  return (
    <>
      <ProjectImage reversed={reversed} link={link} alt={alt} title={title} preview={preview} />


      <ProjectDescription reversed={reversed}>
        <Tags variant={'subtitle2'}> {tags} </Tags>

        <Link to="/">
          {' '}
          <Typography
            variant={'h3'}
            style={{
              lineHeight: '1.25em',
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>{' '}
        </Link>

        <MotionBtn text="Case-Study" />
      </ProjectDescription>
    </>
  )
}

export default ProjectScene
