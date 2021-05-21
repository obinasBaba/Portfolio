import React from 'react'
import styled from 'styled-components'
import { GradientText } from '../../../../../components/GrdientText'
import { spacing } from '../../../../../styles/mixins'

const TitleContainer = styled.header`
  text-align: center;
  margin: 0 auto;
  width: min-content;
  ${spacing('mb', 10)};
`



const TitleWithSub = () => {
  return (
    <TitleContainer >
      <GradientText variant='h1' noWrap={true} > Web is fun </GradientText>
      <GradientText color='textSecondary' align='right' variant={'body2'} noWrap={true}> Experiments & Open Source </GradientText>
    </TitleContainer>
  )
}

export default TitleWithSub
