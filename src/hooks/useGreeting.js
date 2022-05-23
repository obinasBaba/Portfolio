import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { MotionValueContext } from "../contexts/MotionStateWrapper";


const GREETING_CONST = "henzzo.greeting";

export default function useGreeting(){

  const {
    toolTipsData, screenOverlayEvent
  } = useContext( MotionValueContext );

  const getHello = ( callback, time = 1800 ) => () => {
    setTimeout( callback, time );
  };

  useEffect( () => {
    const greeting = Cookies.get( GREETING_CONST );

    let sayHello;

    if ( greeting ) {
      sayHello = getHello( () => {
        toolTipsData.set( {
          text: ["👽 Welcome Back!"],
          show: true,
          timer: [3000]
        } );
      } );
    } else {
      Cookies.set( GREETING_CONST, "greeting" );
      sayHello = getHello( () => {
        toolTipsData.set( {
          text: [
            "🖖 hello human, welcome to my space.",
            "i haven't done building this ship, you may find some broken parts"
          ],
          timer: [3500, 4400],
          show: true
        } );
      } );
    }


    screenOverlayEvent.onChange( state => {
      if ( state !== "closed" ) return;
      sayHello();
    } );

    return null;

  }, [] );

}
