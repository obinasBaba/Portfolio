import React from 'react'
import styled from 'styled-components'
import { GradientText } from '../GrdientText'
import { spacing } from '../../styles/mixins'
import {useMediaQuery, useTheme} from '@material-ui/core'

const TitleContainer = styled.header`
  text-align: center;
  margin: 0 auto;
  width: min-content;
  ${ ({mb}) => mb ? spacing('mb', mb) : spacing('mb', 0) };
  
  & > :last-child{
    margin-right: 10px;
  }
  
`



const Headline = ( {title, subtitle, mb} ) => {


  return (
    <TitleContainer mb={mb} >
      <GradientText variant='h1' noWrap={true}  >
        {title}
      </GradientText>

      <GradientText color='textSecondary' align='right' variant={'body1'} noWrap={true}>
        {subtitle}
      </GradientText>

    </TitleContainer>
  )
}

export default Headline
