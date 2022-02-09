import React from 'react'
import {Typography} from '@material-ui/core'
import styled from 'styled-components'
import {spacing} from '../../../../styles/mixins'

const TitleWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  ${spacing('mb', 10)};

  & > :last-child {
    align-self: flex-end;
    ${spacing('mt', 1)};
    ${spacing('mr', 2)};
  }
`

const Title = () => {
  return (
    <TitleWrapper>
      <Typography variant="h1"> Branding </Typography>
      <Typography>Analysis & Preparation</Typography>
    </TitleWrapper>
  )
}

export default Title
