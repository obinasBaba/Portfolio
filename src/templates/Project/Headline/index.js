import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import HeadlineTxt from '../../../components/Headline'
import { mediumUp, spacing } from '../../../styles/mixins'
import preview from './preview.jpg'
import {A, ImgGradient, Q, Role} from './Components'

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

      <HeadlineTxt title={title} subtitle={subTitle} mb={7} />

      <ImgGradient>
        <img src={preview} alt="project pic" />
        <div className="overlay"/>
      </ImgGradient>

    </HeadlineContainer>
  )
}

export default Headline
