import React, {useEffect} from 'react'
import styled from 'styled-components'
import { GradientText } from '../GrdientText'
import { spacing } from '../../styles/mixins'
import {useMediaQuery, useTheme} from '@material-ui/core'
import {useIntersection} from 'react-use'

const TitleContainer = styled.header`
  text-align: center;
  margin: 0 auto;
  width: min-content;
  max-height: 225px;
  
  ${ ({mb}) => mb ? spacing('mb', mb) : spacing('mb', 0) };
  
  & > :last-child{
    margin-right: 10px;
  }
  
  &.fp-tableCell{
    background-color: green;
  }
  
`



const Headline = ( {title, subtitle, mb, showProjects} ) => {

  const targetElement = React.useRef(null)


  return (
    <TitleContainer mb={mb} ref={targetElement} >
      <GradientText variant='h1'
                    onClick={ () => showProjects && showProjects(true) }
                    noWrap={true}  >
        {title}
      </GradientText>

      <GradientText color='textSecondary' align='right' variant={'body1'} noWrap={true}>
        {subtitle}
      </GradientText>



    </TitleContainer>
  )
}

export default Headline