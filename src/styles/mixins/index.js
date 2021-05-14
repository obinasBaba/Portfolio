import { css } from 'styled-components'

export function Flexi({ align = 'center', justify = 'center' }) {
  return css`
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `
}

export const shadow = depth => {
  return css`
    box-shadow: 0 14px 80px rgba(34, 45, 58, 0.2);
    transition: box-shadow 0.3s;

    &:hover {
      transform: translateY(2px);
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.12);
    }
  `
}

export const  spacing = (key, value) => {
  let propKey

  switch (key) {
    case 'mt':
      propKey = 'margin-top'
      break
    case 'mr':
      propKey = 'margin-right'
      break
    case 'mb':
      propKey = 'margin-bottom'
      break
    case 'ml':
      propKey = 'margin-left'
      break
    case 'margin':
      propKey = 'margin'
      break

    case 'pt':
      propKey = 'padding-top'
      break
    case 'pr':
      propKey = 'padding-right'
      break
    case 'pb':
      propKey = 'padding-bottom'
      break
    case 'pl':
      propKey = 'padding-left'
      break
    case 'padding':
      propKey = 'padding'
      break

    case 'br':
      propKey = 'border-radius'
      break
    default:
      propKey = key
  }

  return css`
    ${ propKey }: calc( ${ value * 10 }px * var( --indent ) )
  `;

};

export const heightWidth = (key, value) => {
  return css`
    ${key}: calc( ${ value * 10 }px * var( --size ) )
  `
}

export const smallUp = (content) => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.up('sm')} {
        ${content}
      }
    `}
  `
}

export const mediumUp = content => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.up('md')} {
        ${content}
      }
    `}
  `
}

export const largeUp = content => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.up('lg')} {
        ${content}
      }
    `}
  `
}
