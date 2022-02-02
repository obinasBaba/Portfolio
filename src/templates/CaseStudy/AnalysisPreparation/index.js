import React from 'react'
import styled, { css } from 'styled-components'
import { Container } from '@material-ui/core'
import {mediumUp, spacing, text} from '../../../styles/mixins'
import wireFrame from './components/photo_2021-06-10_05-58-23.jpg'
import Excerpts from './components/Excerpts'
import Title from './components/Title'

const AnalysisContainer = styled(Container)`
  color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
  
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 100%;

  & > :last-child {
    ${spacing('mt', 7)};
  }

  ${mediumUp(css`
    flex-flow: row;

    & > :last-child {
      
    }
  `)};
`

const BrandingTxt = styled.div`
  //border: thin solid greenyellow;
  flex: 1.3;
  //background-color: #f3f3f3; 

`

const WireFrame = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  transition: transform .3s;

  &:hover{
    //box-shadow: 0 0px 15px 0px;
    transform: scale(1.01);
  }

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    margin-left: auto;

    box-shadow: 0 5px 20px 0 rgb( 0 0 0 / 53%);
    
    
  }
`

const AnalysisPreparation = () => {
  return (
    <AnalysisContainer fixed={false} maxWidth="xl" component="section" >
      <Title />

      <Flex>
        <BrandingTxt>
          <Excerpts />
        </BrandingTxt>

        <WireFrame>
          <img src={wireFrame} alt={'wireframe'} />
        </WireFrame>
      </Flex>
    </AnalysisContainer>
  )
}

export default AnalysisPreparation
