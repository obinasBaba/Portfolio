import React from "react";
import styled, { css } from "styled-components";
import { Container, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { spacing, text } from "../../styles/mixins";
import { largeUp, mediumUp, xxLargeUp } from "../../styles/mixins/breakpoints";

const FooterMetaContainer = styled( Container )`
  display: flex !important;
  flex-flow: wrap;
  justify-content: space-between;
  margin: 0 auto;


  ${spacing( "mt", 14 )};


  ${mediumUp( css`
      // ${spacing( "mb", 4 )};
    ${spacing( "mv" )};
    flex-flow: row wrap;
  ` )};
`;

const MetaColumn = styled.div`
  display: flex;
  flex: 50%;
  flex-flow: column;
  align-items: center;
  //border: thin solid red;

  ${spacing( "mb", 7 )};
  ${spacing( "ph", 4 )};

  ${mediumUp( css`
    align-items: flex-start;
  ` )};

  & .titleTxt {
    ${spacing( "mb", 3.5 )};
    font-weight: bolder;
    letter-spacing: 1px;
  }

  & .link-txt {
    ${spacing( "mt", 0.5 )};
    font-weight: 300;
    ${text( 0.79 )};
  }

  ${mediumUp( css`
    flex: 25%;

    .link-txt {
      font-size: .895rem;
    }

  ` )};

  ${largeUp( css`
    & .titleTxt {
      ${spacing( "mb", 1.5 )};
    }

  ` )};

  ${xxLargeUp( css`
    ${spacing( "ph", 0 )};


    & .titleTxt {
      ${spacing( "mb", 1 )};
    }

    & .link-txt {
      ${spacing( "mt", 0.5 )};
      font-weight: 300;
      ${text( 0.8 )};
    }


  ` )};
`;

const Hover = styled( motion.div )`
  position: relative;
  text-decoration: none;
  color: inherit;
  //cursor: pointer;
  //border: thin solid red;

  & a {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
  }

  & .titleTxt {
    ${spacing( "mb", 0.5 )};
    font-weight: bolder;
    letter-spacing: 1px;
  }

  .wrapper {
    position: absolute;
    top: auto;
    bottom: auto;
    width: 40%;
    //overflow: hidden;
    //border: thin solid red;

    //transform-origin: left;
  }

  .line {
    width: 100%;
    background-color: white;
    height: 1px;
  }

  .link-txt {
    color: #7b8a9b;

  }

`;

const line1Variants = {
  transition: {
    duration: 0.8
    // ease: 'easeIn',
    // times: [0, 1, 1, 1],
  },

  initial: {
    opacity: 0,
    x: 0,
    scaleX: 1
  },
  animate: {
    opacity: 0,
    x: 0,
    scaleX: 1,
    transition: {
      opacity: { duration: 0.4 },
      default: {
        delay: 0.4,
        duration: 0
      }
    }
  },

  hover: {
    opacity: 1,
    x: 10,
    originX: "right",
    scaleX: [null, 0]
  },
  exit: {}
};

const line2Variant = {
  transition: {},

  initial: {
    opacity: 0,
    scaleX: 0,
    x: -10
  },

  animate: {
    opacity: 0,
    scaleX: 0,
    x: -10,
    transition: {
      opacity: {
        duration: 0.5
      },
      x: {
        delay: 0.5,
        duration: 0
      },
      scaleX: {
        delay: 0.5,
        duration: 0
      },
      default: {
        duration: 0
      }
    }
  },

  hover: {
    x: 0,
    opacity: 1,
    originX: "left",
    scaleX: [null, 1],
    transition: {
      delay: 0.4,
      duration: 0.8
    }
  }
};

function FooterMeta(){
  const titleData = ["Explore", "Social", "Contact", "Henzzo.io"];

  const data = [
    [
      {
        txt: "Home",
        link: "/"
      },
      {
        txt: "about",
        link: "/about"
      },
      {
        txt: "projects",
        link: "/projects"
      },
      {
        txt: "contact",
        link: "/contact"
      }
    ],
    [
      {
        txt: "Dribble",
        link: "https://dribbble.com/henok500",
        target: "_blank"
      },
      {
        txt: "Linkedin",
        link: "/"
      },
      {
        txt: "Github",
        link: "/"
      },
      {
        txt: "Readers-Corner",
        link: "https://readers-corner.netlify.app",
        target: "_blank"
      }
    ],
    [
      {
        txt: "Addis-Abeba"
      },
      {
        txt: "2020 Pop"
      },
      {
        txt: "Ethiopia"
      }
    ],
    [
      {
        txt: "hi@henzzo.io",
        mailTo: "mailto:henokgetachew500@gmail.com"
      },
      {
        txt: "+251-923-3655-39",
        tel: "tel:+251 923 3655 39"
      }
    ]

    // ['hi@henzzo.io', '+251 923 3655 39'],
    // ['Addis-Abeba,', '2020 Pop,', 'Ethiopia,'],
  ];

  return (
    <FooterMetaContainer maxWidth="lg" disableGutters>

      {titleData.map( ( titleTxt, i ) => (
        <MetaColumn key={titleTxt}>
          <Typography variant="h5" className="titleTxt">
            {titleTxt}
          </Typography>

          {data[i].map( ( { txt, link, target, mailTo, tel } ) => (
            <Hover
              key={txt + titleTxt}
              variants={{}}
              whileHover="hover"
              initial="initial"
              animate="animate"
              exit="exit"
              data-pointer="focus"

            >
              {link && <Link to={link} target={target} />}
              {mailTo && <a href={mailTo} />}
              {tel && <a href={tel} />}

              <Typography
                key={link + txt}
                className="link-txt"
                variant="subtitle2"
              >
                {txt}
              </Typography>

              <motion.div className="wrapper">
                <motion.div
                  className="line top"
                  variants={line1Variants}
                  transition={line1Variants.transition}
                />
                <motion.div
                  className="line bottom"
                  variants={line2Variant}
                  transition={line1Variants.transition}
                />
              </motion.div>
            </Hover>
          ) )}
        </MetaColumn>
      ) )}
    </FooterMetaContainer>
  );
}

export default FooterMeta;
