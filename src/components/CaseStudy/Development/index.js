import React from 'react'
import styled from 'styled-components'
import {Container, Typography} from '@material-ui/core'
import {spacing} from '../../../styles/mixins'
import devPic from './Design-stack@2x.png';

const DevelopmentContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  ${spacing('mt', 10)};

`

const TitleWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  ${spacing('mb', 9)};

  & > :last-child {
    align-self: flex-end;
    ${spacing('mt', 1)};
    ${spacing('mr', 2)};
  }
`

const Development = () => {
  return (
    <DevelopmentContainer >

      <TitleWrapper>
        <Typography variant="h1"> Development </Typography>
        <Typography>UI & Components</Typography>
      </TitleWrapper>


      <img src={devPic} alt={'dev pic'} style={{
        maxWidth: '100%',
        width: '1600px'
      }}/>

    </DevelopmentContainer>
  )
}

export default Development
