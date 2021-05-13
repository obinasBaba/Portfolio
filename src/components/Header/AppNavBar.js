import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import NavLinks from "./NavLinks";
import styled from "styled-components";
import AvatarWithSocial from "./AvatarWithSocial";
import { RiNavigationLine } from "react-icons/all";
import { useMediaQuery, useTheme } from "@material-ui/core";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger( { target: window ? window() : undefined } );

  return (
    <Slide  appear={ false } direction="down" in={ !trigger }>
      { children }
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

const StyledToolbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  background-color: darkslateblue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
`;

function AppNavBar(props) {

  const theme = useTheme();
  const media = useMediaQuery( theme.breakpoints.up( "sm" ) );

  return (
    <React.Fragment>

      <HideOnScroll { ...props }>
          <StyledToolbar>
            <AvatarWithSocial />

            { media ? <NavLinks />
              :
              <RiNavigationLine /> }

          </StyledToolbar>
      </HideOnScroll>
    </React.Fragment>
  );
}

export default AppNavBar;