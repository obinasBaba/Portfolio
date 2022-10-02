import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavMenu from "../NavMenu";
import { MotionValueContext } from "../../contexts/MotionStateWrapper";

export default function NavigationMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { menuIsOpen: moMenuState, screenOverlayProxy } =
    useContext(MotionValueContext);

  const toggleMenu = (v) => {
    if (!v)
      return setTimeout(() => {
        screenOverlayProxy.set({ state: v });
      }, 270);

    return screenOverlayProxy.set({ state: v });
  };

  useLayoutEffect(() => {
    moMenuState.onChange((v) => {
      toggleMenu(v);
      setMenuIsOpen(v);
    });
  }, []);

  useEffect(() => {
    if (menuIsOpen) {
      setTimeout(() => {
        document.body.classList.add("menu_open");
      }, 1000);
    } else if (!menuIsOpen) {
      setTimeout(() => {
        document.body.classList.remove("menu_open");
      }, 1000);
    }
  }, [menuIsOpen]);

  const onCloseMenu = () => moMenuState.set(!moMenuState.get());

  return (
    <AnimatePresence>
      {menuIsOpen && <NavMenu closeMenu={onCloseMenu} />}
    </AnimatePresence>
  );
}
