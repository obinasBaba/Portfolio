import styled, { css } from 'styled-components'
import { Typography } from '@material-ui/core'
import {
  gridColWidth, gridify, heightWidth,
  largeUp,
  mediumUp, spacing,
} from '../../../../../../styles/mixins'
import { motion } from 'framer-motion'


export const OthersContainer = styled(motion.div)`
  ${gridify()};
  ${spacing('mt', 14)};
  ${spacing('mb', 14)}; //todo remove this
  align-items: center;
`


export const Title = styled(Typography)`
  line-height: 1.25em;
  font-weight: 700;
  grid-row: 1;

  ${gridColWidth(5, 61)};

  ${mediumUp(css`
    ${gridColWidth(5, 61)};
    text-align: left;
  `)};

  ${largeUp(css`
    ${gridColWidth(5, 61)};
  `)};

  br {
    display: none;

    ${mediumUp(css`
      display: inline;
    `)};
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  box-sizing: border-box;
  margin: 0;
  box-shadow: inset 1px 1px 0 0.25px #32344d;
  grid-row: 2;
  padding: 0;

  ${spacing('mt', 6)};
  ${gridColWidth(5, 61)};

  ${mediumUp(css`
    
    ${gridColWidth(22, 65)};
    flex-wrap: nowrap;
    margin-top: 0;
    grid-row: 1;
  `)};
  
`

export const ListItem = styled.li`
  flex: 1 1 50%;
  position: relative;
  box-sizing: border-box;
  box-shadow: inset -1px -1px 0 0.25px #32344d;
  padding-bottom: 50%;

  ${mediumUp(css`
      flex: 0 0 25%;
      padding-bottom: 25%;
    `)};

  &:nth-of-type(1) img {
    ${heightWidth('width', 10)};
  }

  &:nth-of-type(2) img {
    ${heightWidth('width', 8)};
  }

  &:nth-of-type(3) {
    box-shadow: inset 0px -1px 0px .25px #32344d;

    img{
      ${heightWidth('width', 9)};
      // @include hl-height(92px);
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: block;
    width: 100%;
    height: auto;
    //@media screen and (max-width: $md) {
    //  --coef-size: 0.9;
    //}
  }
`

export const LinkWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  line-height: 1.67em;
  letter-spacing: 0.5em;
  text-decoration: none;
  text-transform: uppercase;
  background: ${({ theme }) => theme.palette.secondary.main};
  color: inherit;

  //font-size: calc(var(--unit-sm-text) * 0.7);

  ${mediumUp(css`
    //line-height: 2.14em;
    //letter-spacing: 0.71em;
  `)};

  span {
    transition: transform 0.3s ease-out;
  }

  &:hover span {
    transform: scale(0.9);
  }
`