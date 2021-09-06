import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../../styles/mixins'
import { Typography } from '@material-ui/core'

const HeaderMetaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${spacing('gap', 3)};
  ${spacing('mt', 3)};

  & * {
    font-weight: lighter;
    color: #617683;
    letter-spacing: 1px;
  }
`
const HeaderMeta = () => {
  return (
    <HeaderMetaContainer>
      <Typography variant="body2">hi@henzzo.space</Typography>

      <Typography variant="body2">+251 923 36 5539</Typography>
    </HeaderMetaContainer>
  )
}

export default HeaderMeta
