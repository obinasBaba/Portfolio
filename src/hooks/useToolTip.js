/** @format */

import { useContext, useEffect, useRef } from "react";
import { BackgroundOverlayStateContext } from "../contexts/AppStateContext";
import { MotionValueContext } from "../contexts/MotionStateWrapper";
import { useMotionBreakPoint } from "@contexts/BreakPoint";
import { useMediaQuery, useTheme } from "@material-ui/core";

export default (selector) => {
  const { backgroundOverlay } = useContext(BackgroundOverlayStateContext);
  const { toolTipsData } = useContext(MotionValueContext);
  const toolTipTextNode = useRef(null);
  const { breakpoint } = useMotionBreakPoint();

  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.up("md"));

  const onEnter = (el) => {
    toolTipsData.set({
      text: el.target.dataset.tooltipText,
      show: true,
    });
  };

  const onLeave = () => {
    toolTipsData.set({
      text: "",
      show: false,
    });
  };

  const addListener = async () => {
    const toolTipElements = document.querySelectorAll(selector);
    toolTipElements.forEach((el) => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseenter", onEnter);

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.removeEventListener("mousemove", addListener);
  };

  useEffect(() => {
    if (backgroundOverlay) return;

    if (medium) {
      toolTipTextNode.current = document.querySelector(".tool-tip-excerpt");
      // onLeave()
      window.addEventListener("mousemove", addListener, { once: true });
    }
  }, [selector, backgroundOverlay, medium]);
};
