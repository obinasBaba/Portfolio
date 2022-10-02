/** @format */

import { useContext, useEffect } from "react";
import { MotionValueContext } from "../contexts/MotionStateWrapper";

export default function useRefreshMouseListeners(selector = "[data-pointer]") {
  const { refreshCursorEventListeners } = useContext(MotionValueContext);

  useEffect(() => {
    refreshCursorEventListeners.set(selector);
  }, []);
}
