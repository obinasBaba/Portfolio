import { css } from "styled-components";


export function pxToRm(value, fontSizeBase = 16){
  return (value * fontSizeBase) + 'rem';
}