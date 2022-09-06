/** @format */

import { useContext, useLayoutEffect } from 'react';
import { AppStateContext } from '@contexts/AppStateContext';

export default function useUpdatePath(path) {
  const { setCurrentPath } = useContext(AppStateContext);

  useLayoutEffect(() => {
    setCurrentPath(path);
  }, []);
}
