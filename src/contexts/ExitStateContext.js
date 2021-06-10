import React, {useEffect} from 'react'
import {useState} from 'react'


export const ExitStateContext = React.createContext(false);


const ExitStateProvider = ( {children} ) => {

  const [show, setShow] = useState(false);
  const [moon, setMoon] = useState(true);

  return (
    <ExitStateContext.Provider value={{
      show,
      setShow,
      moon,
      setMoon,
    }} >

      {children}

    </ExitStateContext.Provider>
  )
}

export default ExitStateProvider
