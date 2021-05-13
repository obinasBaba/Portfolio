import React from "react"
import { Divider } from "@material-ui/core"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/all"
import styled from "styled-components"

const AvatarSocial = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: .5em;
`;

const AvatarWithSocial = () => {
  return (

    <AvatarSocial>

      <ReactSvg/>

      <Divider orientation="vertical" flexItem />

      <FaTwitter />
      <FaGithub />
      <FaLinkedin />

    </AvatarSocial>
  );
};

export default AvatarWithSocial;
