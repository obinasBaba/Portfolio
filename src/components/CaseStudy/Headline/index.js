import React from "react";
import {
  HeadlineContainer,
  ImageWrapper,
  InnerWrapper,
  Texts,
} from "./Components";
import { motion } from "framer-motion";
import MotionBtn from "../../MotionBtn";

import {
  btnVariant,
  containerVariants,
  imgWrapperVariant,
  innerVariant,
  textsVariant,
  titleVariant,
  transition,
} from "./variants";
import Tags from "./components/Tags";
import Title from "../../../scenes/ProjectPage/components/ProjectDescription/components/Title";
import TestPreview from "@scenes/ProjectPage/components/ProjectImage/Bottle-Haus Thumbnail.png";

const Headline = ({ tags, title, liveUrl, media }) => (
  <HeadlineContainer variants={containerVariants}>
    <Texts variants={textsVariant} transition={transition}>
      <Tags txt={tags} />

      <Title
        title={title}
        variants={{
          title: titleVariant,
          transition,
        }}
      />

      <motion.div
        variants={btnVariant}
        transition={transition}
        style={{ color: "white" }}
      >
        <MotionBtn margin={false} text="Visit Site" to={liveUrl} external={true}/>
      </motion.div>
    </Texts>

    <ImageWrapper variants={imgWrapperVariant} transition={transition}>
      <InnerWrapper variants={innerVariant} transition={transition}>
        <motion.img
          src={media}
          // src={TestPreview}
        />
      </InnerWrapper>
    </ImageWrapper>
  </HeadlineContainer>
);

export default Headline;
