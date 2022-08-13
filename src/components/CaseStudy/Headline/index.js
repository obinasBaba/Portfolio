import React from "react";
import { HeadlineContainer, ImageWrapper, InnerWrapper, Texts } from "./Components";
import { motion } from "framer-motion";
import MotionBtn from "../../MotionBtn";

import {
  btnVariant,
  containerVariants,
  imgWrapperVariant,
  innerVariant,
  textsVariant,
  titleVariant,
  transition
} from "./variants";
import Tags from "./components/Tags";
import Title from "../../../scenes/ProjectPage/components/ProjectDescription/components/Title";


const Headline = ( { subTitle, title, about, media } ) => {
  return (
    <HeadlineContainer variants={containerVariants}>
      <Texts variants={textsVariant} transition={transition}>
        <Tags txt="Analytics, UX, UI, Icons, Front-end" />

        <Title
          title={title}
          variants={{
            title: titleVariant,
            transition
          }}
        />

        <motion.div variants={btnVariant} transition={transition}>
          <MotionBtn margin={false} text="Visit Site" />
        </motion.div>
      </Texts>

      <ImageWrapper variants={imgWrapperVariant} transition={transition}>
        <InnerWrapper variants={innerVariant} transition={transition}>
          <motion.img src={media} />
        </InnerWrapper>
      </ImageWrapper>
    </HeadlineContainer>
  );
};

export default Headline;
