import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Divider, Typography } from '@material-ui/core'
import Headline from '../../../components/Headline'
import { mediumUp, spacing } from '../../../styles/mixins'
import wireFrame from './wireframe.jpg'
import Excerpts from './components/Excerpts'
import Title from './components/Title'

const AnalysisContainer = styled(Container)`
  //border: thin solid red;
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
      ${spacing('mt', 0)};
    }
  `)};
`

const BrandingTxt = styled.div`
  //border: thin solid greenyellow;
  flex: 1.3;
`

const WireFrame = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    margin-left: auto;
  }
`

const AnalysisPreparation = () => {
  return (
    <AnalysisContainer fixed={false} maxWidth="xl" component="section">
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
