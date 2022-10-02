import { useMotionValueContext } from "@contexts/MotionStateWrapper";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { useEffect } from "react";
import MouseFollower from "@components/MouseFollwer";

export default function useCursor() {
  const { screenOverlayEvent } = useMotionValueContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const mf = new MouseFollower();

    screenOverlayEvent.onChange((v) => {
      if (v === "closed") {
        const mf = new MouseFollower();
      }
    });
  }, [screenOverlayEvent]);
}
