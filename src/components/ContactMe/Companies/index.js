import React from 'react'
import styled, { css } from 'styled-components'
import { smallDown, spacing } from '../../../styles/mixins'
import {Css, Js, UiUx, ReactSvg} from './icons'

const List = styled.ul`
  margin: auto 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  
  //border: thin solid rebeccapurple;
  color: ${({ theme }) => theme.palette.primary.main};

  li {
    //opacity: 0.5;

    // ${spacing('mr', 4)};
    align-self: center;
    
  }
  
  & > :first-child{
    &:hover svg path{
      fill: #61dafb;
    }
  }
  
  & > :nth-child(2n){
    &:hover svg path{
      fill: #26308b;
    }
  }
  
  & > :nth-child(3n){
    &:hover svg path{
      fill: #e43d26;
    }
  }
  
  & > :nth-child(4n){
    &:hover svg path{
      fill: #ecd120;
    }
  }

  
`



const Companies = () => {
  const companies = [ ReactSvg,  UiUx, Css, Js ]

  console.log(Js)

  return (
    <List>
      {companies.map((Logo, i) => {
        return (
          <li key={i}>
            <Logo/>
          </li>
        )
      })}
    </List>
  )
}

export default Companies
