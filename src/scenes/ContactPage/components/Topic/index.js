import React, { useEffect } from "react";
import styled from 'styled-components'
import { Typography, Checkbox } from '@material-ui/core'
import { spacing } from '../../../../styles/mixins'
import TopicItem from './TopicItem'
import { useLottiAssets } from '../../../../hooks/queries/useLottiAssets'
import { Field, useField } from 'formik'

const TopicContainer = styled.div`
  //border: thin solid red;
  //width: min-content;
`

const HeadLineTitle = styled(Typography)`
  font-family: Elianto-Regular, serif;
  font-weight: bolder;
  line-height: 150%;
  //color: #617683;
  color: #a4b5c0;
  //color: #5d6c7b;
  //max-width: 20ch;
  
  
  span{
    text-transform: uppercase;
  }
`

const CardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${spacing('mt', 6)};
`

const TopicItemMap = ({ body, title, path, ...props }) => {
  const [field, meta, helpers] = useField(props)

  return (
    <TopicItem
      body={body}
      title={field.value}
      path={path}
      selected={field.checked}
      {...field}
    />
  )
}

const Topic = ({ values }) => {
  const topics = [
    {
      title: 'Not sure',
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
      body: 'i need an Api with all security, infrastructure setup',
    },
  ]
  const { ufo, design, pentool, prototype } = useLottiAssets()
  const iconIll = [ufo, design, pentool, prototype]

  return (
    <TopicContainer>
      <HeadLineTitle variant="h2">
        nice to meet you <span>{values.name}</span>, what can i help you with?
      </HeadLineTitle>

      <CardRow>
        {topics.map(({ body, title }, idx) => {
          return (
            <Field
              name={'topic'}
              body={body}
              path={iconIll[idx]}
              value={title}
              type="checkbox"
              as={TopicItemMap}
            />
          )
          // return <TopicItem body={body} title={title} path={iconIll[idx]} />
        })}
      </CardRow>
    </TopicContainer>
  )
}

export default Topic
