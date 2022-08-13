import React, { Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import Menu from "./components/Menu";
import { container } from "./navmenu.module.scss";
import { useLocomotiveScroll } from "@contexts/LocoMotive";


const containerVariants = {};

const LogoBgEffect = React.lazy( () => import( /* webpackPrefetch: true */ /* webpackChunkName: "LogoBg" */  "./components/LogoBgEffect") );

const NavMenu = ( { closeMenu } ) => {

  // useRefreshMouseListeners( "#menu-container [data-pointer]" );
  const { locoInstance } = useLocomotiveScroll();


  useEffect( () => {
    locoInstance.stop();

    return () => {
      locoInstance.start();
    };
  }, [] );


  return (
    <motion.div className={container} variants={containerVariants} id="menu-container">
      <Suspense fallback={<div />}>
        <LogoBgEffect />
      </Suspense>
      <Menu onClick={closeMenu} />

    </motion.div>
  );
};

export default NavMenu;
