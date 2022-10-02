import React, { createContext, useState } from "react";

type LoadStateType = {
  heroLoaded: boolean;
  setHeroLoaded: React.Dispatch<React.SetStateAction<boolean>>;

  recentDesign: boolean;
  setRecentDesign: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadStateContext = createContext<LoadStateType>({} as any);

export const LoadStateWrapper: React.FC = ({ children }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [recentDesign, setRecentDesign] = useState(false);

  const value = {
    heroLoaded,
    setHeroLoaded,
    recentDesign,
    setRecentDesign,
  };

  return (
    <LoadStateContext.Provider value={value}>
      {children}
    </LoadStateContext.Provider>
  );
};

export default LoadStateContext;
