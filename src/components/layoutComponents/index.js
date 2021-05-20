import styled, { createGlobalStyle } from 'styled-components'
import { responsiveVar } from '../../styles/commons'

export const GlobalStyle = createGlobalStyle`
  
  ${responsiveVar};
  
  html{
    --dark: #02021e;
    -webkit-font-smoothing: antialiased;

    --sofia-soft: 'Sofia Pro Soft', sans-serif;
    --sofia-pro: 'Sofia Pro', sans-serif;
    --font-gramatika: 'Gramatika', sans-serif;
    
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  body{
    //overflow-x: hidden;
    position: relative;
    color: #fff;
    background: var(--dark);
  }
`

export const Page = styled.div`
  
  position: relative;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  min-height: 100vh;
  align-items: end;

  &::after{
    content: '';
    position: absolute;;
    width: 100%;
    max-width: 1185px;
    top: -390px;
    z-index: -999;
    opacity: 0.4;
    height: 1076px;
    transform: translateY(-30%);
    background: radial-gradient(
            41.38% 40.85% at 56.08% 46.24%,
            #3719ca 0%,
            rgba(55, 25, 202, 0) 100% );
  }

`

export const Main = styled.main`
  flex: 1;
`

export const VersionNo = styled.div`
  position: fixed;
  z-index: 9999;
  font-weight: 300;
  line-height: 1.6em;
  letter-spacing: 0.5px;
  color: gray;
  bottom: 3rem;
  text-shadow: 0.1em 0.1em 0.3em #000;
  right: 4rem;
`