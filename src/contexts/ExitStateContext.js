import React, {useEffect} from 'react'
import {useState} from 'react'


export const ExitStateContext = React.createContext({});


const ExitStateProvider = ( {children} ) => {

  const [exit, toggle] = useState(false);

  useEffect( () => {
    // setTimeout(() => {
    //   toggle( !exit );
      // console.log('unmounted state', exit)
    // }, 1500);
    // return () => toggle(false);

  }, [exit] )

  // const toggle = ( state ) => {
  //   setExit(state);
  //   setTimeout( () => {
  //     setExit( !state );
  //   }, 1000)
  // }

  return (
    <ExitStateContext.Provider value={{
      exit,
      toggle
    }} >

      {children}

    </ExitStateContext.Provider>
  )
}

export default ExitStateProvider
