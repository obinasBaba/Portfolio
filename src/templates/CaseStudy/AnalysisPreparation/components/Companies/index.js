import React from 'react'
import styled, {css} from 'styled-components'
import BE from './behance.svg'
import HufPost from './huffpost.svg'
import { Typography } from '@material-ui/core'
import {smallDown, spacing} from '../../../../../styles/mixins'

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  color: ${({ theme }) => theme.palette.primary.main};

  li {
    opacity: 0.5;
    max-width: 190px;
    
    ${ smallDown( css`
      --indent: .7

    ` ) };

    ${spacing('mr', 4)};
    ${spacing('mb', 5)};
    
  }

  li:last-child {
    ${spacing('mr', 0)};
  }
`

const CompanyTxt = styled(Typography)`
  ${spacing('mt', 1.8)};
  ${spacing('mb', 0)};
  font-family: var(--sofia-pro);
  line-height: 120%;
  font-weight: 700;
  max-width: 130px;
`

const Companies = () => {
  const companies = [
    {
      src: HufPost,
      txt: 'Media Publications & Mentions',
    },
    {
      src: BE,
      txt: 'Behance Award Best UI Illustration',
    },
  ]

  return (
    <List>
      {companies.map(({ src, txt }) => {
        return (
          <li key={txt}>
            <img src={src} alt={txt} />

            <CompanyTxt variant="subtitle2">{txt}</CompanyTxt>
          </li>
        )
      })}
    </List>
  )
}

export default Companies
