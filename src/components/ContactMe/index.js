import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Contact from "./Contact";
import About from "./About";
import BgEffect from "./BgEffect";
import StarEffect from "./StarEffect";
import { spacing } from "../../styles/mixins";

const ContactContainer = styled(motion.section)`
  position: fixed;
  overflow: hidden;
  background-color: rgba(12, 17, 39, 0.1);
  backdrop-filter: blur(6px);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  //transform: translateX(100%);
  z-index: 9;
  margin: auto auto;

  ${spacing("ph", 4.8)};
  ${spacing("pv", 3)};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.1,
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const ContactMe = ({ toggleModal: { setContactModal, isContactOpen } }) => {
  useEffect(() => {
    const closeModal = (key) => {
      if (key.key === "Escape") setContactModal(!isContactOpen);
    };

    window.addEventListener("keyup", closeModal);

    return () => {
      window.removeEventListener("keyup", closeModal);
    };
  }, []);

  return (
    <ContactContainer
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BgEffect />
      <StarEffect pos={{ top: "10%", left: "2%" }} />
      <StarEffect pos={{ bottom: "-6%", left: "1%" }} />

      <About />
      <Contact toggleModal={setContactModal} modalState={isContactOpen} />
    </ContactContainer>
  );
};

export default ContactMe;
