import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import HeadlineTxt from '../../../components/Headline'
import { mediumUp, spacing } from '../../../styles/mixins'
import preview from './preview.jpg'
import {A, ImgGradient, Q, Role} from './Components'
import {GradientText} from '../../../components/GrdientText'

const HeadlineContainer = styled(Container)`
  display: flex;
  flex-flow: column;

  img {
    width: 100%;
    max-width: 100%;
    max-height: 600px;
    object-fit: cover;
    margin: 0 auto;
  }
`

const Title = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  ${ spacing( 'mb', 7 ) }
  
  & > :first-child{
    line-height: 1.29;
  }
  
  & > :last-child{
    margin-left: auto;
    margin-top: -5px;
  }
`

const Headline = ({ subTitle, title, about, media }) => {
  const About = [
    { q: 'Role ', a: ' FrontEnd Developer' },
    { q: 'Context ', a: ' Design' },
    { q: 'Period ', a: ' End 2020' },
  ]

  return (
    <HeadlineContainer maxWidth={'xl'}>
      <Role>
        {About.map(({ q, a }) => (
          <li key={q}>
            <Q > {q} : </Q>
            <A> { a} </A>
          </li>
        ))}
      </Role>

      <Title>
        <GradientText variant='h1'>{title}</GradientText>
        <Typography >{subTitle}</Typography>
      </Title>

      <ImgGradient>
        <img src={preview} alt="project pic" />
        <div className="overlay"/>
      </ImgGradient>

    </HeadlineContainer>
  )
}

export default Headline
