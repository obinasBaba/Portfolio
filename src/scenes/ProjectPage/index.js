import React, {useEffect} from 'react'
import useProjectsAssets from '../../hooks/queries/useProjectsAssets'
import { motion, useAnimation } from 'framer-motion'
import Others from './components/Others'
import ProjectImage from './components/ProjectImage'
import ProjectDescription from './components/ProjectDescription'
import StackUsed from './components/StackUsed'
import styled, { css } from 'styled-components'
import { gridify, smallUp, spacing } from '../../styles/mixins'




const ProjectPage = ({partners, tags, preview, alt, link, title, url, index}) => {



  return (
    <>


              <ProjectImage
                reversed={true}
                link={link}
                alt={alt}
                title={title}
                index={index}
                preview={preview}
                url={url}
              />

              <ProjectDescription
                link={link}
                reversed={true}
                title={title}
                index={index}
                tags={tags}
                url={url}
              />

              <StackUsed
                items={partners}
                reversed={true}
              />

    </>
  )
}

export default ProjectPage
