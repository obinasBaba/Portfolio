import React from 'react'
import { Divider } from '@material-ui/core'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/all'
import styled, {css} from 'styled-components'
import useHeaderAssets from '../../../hooks/queries/useHeaderAssets'
import { Link } from 'gatsby'
import {heightWidth, mediumUp, spacing} from '../../../styles/mixins'
import { ReactSVG } from 'react-svg'

const Logo = styled.div`
  margin-right: auto;
  fill: white; //todo gradient
  z-index: 50;
  display: flex;
  ${spacing('gap', 1)}; //todo polifill
  align-items: center;
  justify-content: center;

  & > :first-child {
    ${heightWidth('max-width', 6)};
    
    ${ mediumUp( css`
      ${heightWidth('max-width', 5)};

    `) };

    & svg {
    }
  }

  & > :nth-child(n + 2) {
    ${heightWidth('font-size', 2)};

    ${ mediumUp( css`
      ${heightWidth('font-size', 1.7)};

    `) };
  }
`

const DividerLine = styled( Divider )`
  ${heightWidth('margin-left', .6)};
  ${heightWidth('margin-right', .6)};
  background: rgba( 255, 255, 255, .2 );
  height: 25px;
  align-self: center;
`

const LogoAndSocial = () => {
  const { logo } = useHeaderAssets()

  return (
    <Logo>
      <Link to={'/'}>
        <ReactSVG src={logo.publicURL} />
      </Link>

      <DividerLine orientation="vertical" light={true} flexItem />
      {/**/}
      <FaTwitter />
      <FaGithub />
      <FaLinkedin />
    </Logo>
  )
}

export default LogoAndSocial
