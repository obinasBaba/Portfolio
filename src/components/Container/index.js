import React from 'react'
import styled, { css } from 'styled-components'
import { largeUp, spacing } from '../../styles/mixins'
import { Container } from '@material-ui/core'

export const PageContainer = styled.div`
  ${spacing('pt', 20)};

  ${largeUp(css`
    ${spacing('pt', 14)};
  `)};
`

let StyledSectionWrapper = styled(Container)`
  max-width: 1600px;
  margin: 0 auto;
`

export const SectionWrapper = ({
  children,
  disableGutters = true,
  maxWidth = false,
  fixed = false,
  component = 'section',
  bg = 'transparent',
  idName='',
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

    >
      {children}
    </StyledSectionWrapper>
  )
}


