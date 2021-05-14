import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Typography } from "@material-ui/core";
import { spacing } from '../../../styles/mixins'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  ${ spacing('ml', 2) };
  z-index: 50;

  & a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

`;

const NavLinks = () => {
  return (
    <Nav>

      <Link to="/works">
        <Typography variant="h6">
          Works
        </Typography>
      </Link>

      <Link to="/experiments">
        <Typography variant="h6">
          Experiments
        </Typography>
      </Link>

      <Link to="/blog">
        <Typography variant="h6">
          Blog
        </Typography>
      </Link>

    </Nav>
  );
};

export default NavLinks;
