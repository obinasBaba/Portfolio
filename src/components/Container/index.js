import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

let StyledSectionWrapper = styled(Container)`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  //height: 100vh;
  
`

export const SectionWrapper = ({
  children,
  disableGutters = true,
  maxWidth = false,
  fixed = false,
  component = 'section',
  bg = 'transparent',
  idName='',
  dataScrollSection = false
}) => {
  return (
    <StyledSectionWrapper
      disableGutters={disableGutters}
      maxWidth={maxWidth}
      fixed={fixed}
      component={component}
      id={idName}
      style={{
        background: `${ bg ? bg : 'initial' }`
      }}

      data-scroll-section={dataScrollSection}
    >
      {children}
    </StyledSectionWrapper>
  )
}


