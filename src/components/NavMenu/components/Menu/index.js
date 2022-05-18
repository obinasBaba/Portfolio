import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import useMenuAssets from "../../../../hooks/queries/useMenuAssets";
import styled, { css } from "styled-components";
import { spacing, text } from "../../../../styles/mixins";
import { containerVariants } from "./variants";
import { AppStateContext } from "../../../../contexts/AppStateContext";
import Item from "./components/Item";
import { largeUp, mediumDown } from "../../../../styles/mixins/breakpoints";

const MenuItemContainer = styled( motion.ul )`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  list-style-type: none;
  padding: 0;
  margin: auto;
  width: 70%;
  height: 55%;
  z-index: 11;

  //border: thin solid red;

  ${largeUp( css`
    //margin-top: 0;
    width: 45%;

    height: 80%;
  ` )};

  ${mediumDown( css`
    //margin-left: -8%;
    //width: 50%;
  ` )};

  a {
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`;

const MenuContainer = styled( motion.div )`
  position: absolute;
  inset: 0;
  //border: thick solid teal;
  display: flex;
  flex-flow: column;
  z-index: 11;

`;

const MenuMetaRow = styled( motion.div )`
  //position: absolute;
  bottom: 0;

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: max-content;
  overflow: hidden;

  width: 100%;
  color: #02021e;

  ${spacing( "mv", 3 )};
  ${spacing( "ph", 5 )};
  ${spacing( "pv", 0.23 )};


  ${largeUp( css`
    position: absolute;
    justify-content: flex-start;

    &:last-child {
      justify-content: flex-end;
    }

  ` )};



`;


const MetaItem = styled( motion.div )`
  //text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: lighter;
  opacity: 1;
  text-shadow: 0 3px 3px rgba(0, 0, 0, 0.51);

  //border: thin solid red;

  ${text( 0.9 )};
`;

const metaRowVariants = {
  initial: {},

  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1.5
    }
  },

  exit: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
      staggerDirection: -1
    }
  }
};

const transition = {
  duration: 1,
  ease: [0.6, 0.01, 0, 0.9]
};

const metaVariant = {
  initial: {
    opacity: 0,
    y: "110%"
  },

  animate: {
    opacity: 1,
    y: 0
  },

  exit: {
    opacity: 0,
    y: "-110%",
    transition: {
      ...transition,
      duration: .3
    }
  }
};


const Menu = ( { onClick } ) => {
  const {
    blogIcon,
    blogStars,
    contactsIcon,
    contactsStars,
    portfolioIcon,
    portfolioStars,
    servicesIcon,
    servicesStars
  } = useMenuAssets();

  const items = [
    {
      title: "Projects",
      link: "/projects/",
      icon: portfolioIcon,
      stars: portfolioStars
    },
    {
      title: "About",
      link: "/about/",
      icon: servicesIcon,
      stars: servicesStars
    },
    {
      title: "Blog",
      link: "/blog",
      icon: blogIcon,
      stars: blogStars
    },
    {
      title: "Contact",
      link: "/contact/",
      icon: contactsIcon,
      stars: contactsStars
    }
  ];
  const metaTxt = [
    "Linkedin",
    " Github",
    "Instagram"
  ];

  const metaTxt2 = [

    "+251 923 36 5539",
    "hi@henzzo.io"
  ];

  const { currentPath, setListenerTargetSelector } = useContext( AppStateContext );

  useEffect( () => {
    setListenerTargetSelector( "#menu-container [data-pointer]" );

    return () => setListenerTargetSelector( undefined );
  }, [] );


  return (
    <MenuContainer
      variants={{}}
      initial="initial"
      animate="animate"
      exit="exit"
    >

      <MenuMetaRow variants={metaRowVariants} transition={transition}>
        {metaTxt.map( ( txt, i ) => (
          <MetaItem variants={metaVariant}
                    transition={transition}
          >{txt} {i === 3 && <> &#160; &#160;</>} </MetaItem>
        ) )}

      </MenuMetaRow>

      <MenuItemContainer variants={containerVariants}>
        {items.map( ( { icon, link, stars, title }, index ) => (
          <Item
            active={link === currentPath && currentPath !== "/"}
            key={link + index + title}
            link={link}
            stars={stars}
            icon={icon}
            currentPath={currentPath}
            index={index}
            title={title}
            onClick={onClick}
          />
        ) )}
      </MenuItemContainer>

      <MenuMetaRow variants={metaRowVariants} transition={transition}>
        {metaTxt2.map( ( txt, i ) => (
          <MetaItem variants={metaVariant}
                    transition={transition}
          >{txt} {i === 3 && <> &#160; &#160;</>} </MetaItem>
        ) )}

      </MenuMetaRow>

    </MenuContainer>
  );
};

export default Menu;
