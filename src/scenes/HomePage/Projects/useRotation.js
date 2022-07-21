import { useContext, useEffect, useState } from "react";
import { MotionValue, useSpring, useTransform } from "framer-motion";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { map } from "../../../helpers/utils";
import { MotionValueContext } from "../../../contexts/MotionStateWrapper";

export default function(){

  const {
    moScroll: { y, limit }
  } = useContext( MotionValueContext );

  const theme = useTheme();
  const matches = useMediaQuery( theme.breakpoints.up( "md" ) );

  const [refresh, setRefresh] = useState( false );

  const rotate = useTransform( y, latest => map( latest, 0, limit.get(), 0, matches ? 360 : 70 ) );

  const x = useSpring( refresh ? rotate : new MotionValue( 0 ), {
    mass: 1,
    damping: 10,
    stiffness: 50
  } );

  useEffect( () => {
    if ( matches )
      x.destroy();

    setRefresh( true );
  }, [] );

  if ( matches ) {
    x.destroy();
    return rotate;
  }

  return x;

}
