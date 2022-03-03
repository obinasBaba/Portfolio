import styled, {css} from 'styled-components'
import { Typography } from '@material-ui/core'

export const GradientText = styled(Typography)`
  color: tomato;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // this one fixes gradient text line breaks safari bug: https://zellwk.com/blog/multi-line-gradient-links/
  -webkit-box-decoration-break: clone;

  
  background-image: var(--gray_gradient);

  //font-family: var(--gramatika);
  //font-weight: 900;

`

export const GradientTextStyle = css`
  color: tomato;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // this one fixes gradient text line breaks safari bug: https://zellwk.com/blog/multi-line-gradient-links/
  -webkit-box-decoration-break: clone;


  background-image: var(--gray_gradient);

  //font-family: var(--gramatika);
  //font-weight: 900;
`
