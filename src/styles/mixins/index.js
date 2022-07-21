import { css } from "styled-components";

export function Flexi( { align = "center", justify = "center" } ){
  return css`
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `;
}

export function gridColWidth( from = 1, to = 65 ){
  return css`
    grid-column-start: ${from};
    grid-column-end: ${to};
  `;
}

export function gridify(){
  return css`
    display: grid;
    grid-template-columns: repeat(64, calc(100% / 64));
  `;
}

export const gridMultiplayer = ( key, value = 1 ) => {
  return css`
    ${key}: 100vw / 64 * ${value};
  `;
};

export const shadow = depth => {
  return css`
    box-shadow: 0 14px 80px rgba(34, 45, 58, 0.2);
    transition: box-shadow 0.3s;

    /*&:hover {
      transform: translateY(2px);
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.12);
    }*/
  `;
};

export const spacing = ( key, value ) => {
  let propKey = key;
  let temp;

  if ( key.length <= 2 ) {
    switch ( key ) {
      case "mt":
        propKey = "margin-top";
        break;
      case "mr":
        propKey = "margin-right";
        break;
      case "mb":
        propKey = "margin-bottom";
        break;
      case "ml":
        propKey = "margin-left";
        break;
      case "m":
        propKey = "margin";
        break;
      case "mv":
        temp = (value * 10) / 16;
        return css`
          margin-top: calc(${temp}rem * var(--indent));
          margin-bottom: calc(${temp}rem * var(--indent));
        `;
      case "mh":
        temp = (value * 10) / 16;
        return css`
          margin-right: calc(${temp}rem * var(--indent));
          margin-left: calc(${temp}rem * var(--indent));
        `;

      case "pt":
        propKey = "padding-top";
        break;
      case "pr":
        propKey = "padding-right";
        break;
      case "pb":
        propKey = "padding-bottom";
        break;
      case "pl":
        propKey = "padding-left";
        break;
      case "p":
        propKey = "padding";
        break;
      case "ph":
        temp = (value * 10) / 16;
        return css`
          padding-right: calc(${temp}rem * var(--indent));
          padding-left: calc(${temp}rem * var(--indent));
        `;

      case "pv":
        temp = (value * 10) / 16;
        return css`
          padding-top: calc(${temp}rem * var(--indent));
          padding-bottom: calc(${temp}rem * var(--indent));
        `;

      case "br":
        propKey = "border-radius";
        break;
      default:
        propKey = key;
    }
  }

  return css`
    ${propKey}: calc(${(value * 10) / 16}rem * var(--indent));
  `;
};

export const length = ( key, value ) => {
  return css`
    ${key}: calc(${(value * 10) / 16}rem * var(--size));
  `;
};

export const text = ( value ) => {
  return css`
    font-size: calc(${value}rem * var(--text));;
  `;
};

export const title = ( value ) => {
  return css`
    font-size: calc(${value}rem * var(--title));;
  `;
};



