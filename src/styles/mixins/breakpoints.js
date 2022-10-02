import { css } from "styled-components";

export const smallUp = (content) => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.up("sm")} {
        ${content}
      }
    `}
  `;
};
export const smallDown = (content) => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.down("sm")} {
        ${content}
      }
    `}
  `;
};
export const mediumUp = (content) => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.up("md")} {
        ${content}
      }
    `}
  `;
};
export const mediumDown = (content) => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.down("md")} {
        ${content}
      }
    `}
  `;
};
export const largeUp = (content) => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.up("lg")} {
        ${content};
      }
    `}
  `;
};
export const xLargeDown = (content) => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.down("xl")} {
        ${content};
      }
    `}
  `;
};
export const xLargeUp = (content) => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.up("xl")} {
        ${content};
      }
    `}
  `;
};
export const xxLargeUp = (content) => {
  return css`
    ${({ theme }) => css`
      ${theme.breakpoints.up("xxl")} {
        ${content};
      }
    `}
  `;
};
