// noinspection JSIgnoredPromiseFromCall

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import { MotionValueContext } from "@contexts/MotionStateWrapper";
import {
  effectVariant,
  imgContainerVariant,
  imgCover,
  imgOverVariants,
  imgVariant,
  innerVariant,
  transition,
} from "./Variants";
import { InnerWrapper, OverflowWrapper, ProjectImg } from "./components";

import TestPreview from "./Bottle-Haus Thumbnail.png";

import StackUsed from "../StackUsed";

function ProjectImage({ index, exit, items }) {
  const {
    variantsUtil: { fromProjectList },
  } = useContext(MotionValueContext);

  const { partners, preview, link, url } = items;

  return (
    <ProjectImg
      reversed
      variants={imgContainerVariant}
      transition={transition}
      // custom={custom}
    >
      <InnerWrapper
        className="inner-div"
        variants={innerVariant}
        transition={transition}
      >
        <Link
          to={link}
          state={{ path: url }}
          onClick={() => fromProjectList.set(true)}
          data-pointer="focus"
          data-pointer-color="#3719ca"
          data-tooltip
          data-tooltip-text="Let me tell you a story"
        />

        <motion.img
          // data-src={preview.publicURL}
          src={TestPreview}
          variants={imgVariant}
          transition={transition}
        />

        <motion.div className="image-over" variants={imgOverVariants}>
          <motion.div
            className="image-cover cover-1"
            variants={imgCover}
            transition={transition}
          />

          <motion.div
            className="image-cover cover-2"
            variants={imgCover}
            transition={transition}
          />
        </motion.div>
      </InnerWrapper>

      <OverflowWrapper>
        <motion.div
          className="effect"
          variants={effectVariant}
          transition={transition}
          custom={{ exit }}
        >
          0{index + 1}
        </motion.div>
      </OverflowWrapper>

      <StackUsed items={partners} custom={{ exit }} />
    </ProjectImg>
  );
}

export default ProjectImage;
