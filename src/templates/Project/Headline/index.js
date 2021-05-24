import React from 'react'
import { Container, Typography } from '@material-ui/core'
import styled, { css } from 'styled-components'
import HeadlineTxt from '../../../components/Headline'
import { mediumUp, spacing } from '../../../styles/mixins'
import preview from './preview.jpg'

const HeadlineContainer = styled(Container)`
  display: flex;
  flex-flow: column;

  img {
    max-width: 100%;
    max-height: 600px;
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
`

const Role = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  flex-flow: column;
  list-style-type: none;
  padding: 0;
  margin: 0;

  ${spacing('mb', 5)};

  ${mediumUp(
    css`
      flex-flow: row;
      justify-content: space-evenly;
    `
  )};
`

const Headline = ({ subTitle, title, about, media }) => {
  return (
    <HeadlineContainer maxWidth={'xl'}  >
      <Role>
        <li>
          <Typography align="center">
            Role : <b> FrontEnd developer </b>
          </Typography>
        </li>
        <li>
          <Typography align="center">
            Context : <b> Design </b>
          </Typography>
        </li>
        <li>
          <Typography align="center">
            Period : <b> End 2019 </b>
          </Typography>
        </li>
      </Role>

      <HeadlineTxt title={title} subtitle={subTitle} mb={6} />

      <img src={preview} alt="project pic" />
    </HeadlineContainer>
  )
}

export default Headline
