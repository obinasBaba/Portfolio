import React from 'react'
import styled from 'styled-components'
import {useLottiAssets} from '../../../../hooks/queries/useLottiAssets'
import {Typography} from '@material-ui/core'
import {spacing, text} from '../../../../styles/mixins'
import TopicIllustration from './Topicillustration'

const TopicItemContainer = styled.div`
  height: 200px;
  width: 300px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  border-radius: 20px;
  background-color: #485564;
  transition: background-color .3s ease-in;

  &:hover {
    //background-color: #5d6c7b;;
    background-color: #657785;;
    transition: background-color .3s ease-out;
  }

  ${spacing('p',
          2.7)};

`

const TopicTitle = styled( Typography )`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.3px;
  color: #02021e;

  ${text(1)};
  ${spacing('mt', .5)};

`

const TopicBody = styled( Typography )`
  font-weight: lighter;
  color: #bac2d3;
  letter-spacing: .6px;
  line-height: 170%;
  color: #02021e;
  
  ${text(.8)};

`

const TopicItem = ({title, body, path}) => {



  return (
    <TopicItemContainer>

      <TopicIllustration path={path} />

      <TopicTitle varaint='subtitle2' gutterBottom={true}>
        {title}
      </TopicTitle>

      <TopicBody variant='subtitle2'>
        {body}
      </TopicBody>

    </TopicItemContainer>
  )
}

export default TopicItem
