import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { spacing } from '../../../../styles/mixins'
import TopicItem from './TopicItem'
import {useLottiAssets} from '../../../../hooks/queries/useLottiAssets'

const TopicContainer = styled.div`

`

const HeadLineTitle = styled(Typography)`
  font-family: Elianto-Regular, serif;
  font-weight: bolder;
  line-height: 150%;
  //color: #617683;
  color: #a4b5c0;
  //color: #5d6c7b;
`

const CardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${spacing('mt', 6)};

`

const Topic = ({ name }) => {
  const topics = [
    {
      title: 'Not SURE',
      body: "i don't know yet. let's talk and explore the possibilities ",
    },
    {
      title: 'Design',
      body: 'i need a interactive web design or design system to be created',
    },
    {
      title: 'Development',
      body: 'i need a website, oline store or prototype to be built',
    },
    {
      title: 'Api',
      body: 'i need a Api with all security, infrastructure setup',
    },
  ]
  const {ufo, design, pentool, prototype,} = useLottiAssets();
  const iconIll = [ufo, design, pentool, prototype]

  return (
    <TopicContainer>
      <HeadLineTitle variant="h2">
        nice to meet you henok getachew. what can i help you with?
      </HeadLineTitle>

      <CardRow>
        {topics.map(({ body, title }, idx) => {
          return <TopicItem body={body} title={title} path={iconIll[idx]} />
        })}
      </CardRow>
    </TopicContainer>
  )
}

export default Topic
