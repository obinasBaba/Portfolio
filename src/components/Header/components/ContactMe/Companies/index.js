import React from 'react'
import styled, {css} from 'styled-components'
import {smallDown, spacing} from '../../../../../styles/mixins'
import { Typography } from '@material-ui/core'
import R from './react-native.svg';
import J from './javascript.svg';
import N from './nodejs.svg';
import C from './css3.svg';

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  color: ${({ theme }) => theme.palette.primary.main};

  li {
    opacity: 0.5;
    max-width: 50px;
    
    img{
      max-width: 100%;
    }
    
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



const Companies = () => {
  const companies = [ R, J, N , C ]

  return (
    <List>
      {companies.map((logo, i) => {
        return (
          <li key={i}>
            <img src={logo} alt={'txt'} />
          </li>
        )
      })}
    </List>
  )
}

export default Companies
