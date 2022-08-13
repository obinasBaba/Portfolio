import React, { createContext, useEffect, useLayoutEffect, useMemo } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { MotionValue, useMotionValue } from "framer-motion";

type BreakPointContextType = {
  breakpoint: MotionValue<breakpoints>
}

type breakpoints = {
  xlUp: boolean,
  smUp: boolean,
  mdUp: boolean,
  xsUp: boolean,
  lgUp: boolean,
}
const BreakPointContext = createContext<BreakPointContextType>({} as any);


const BreakPointProvider: React.FC = ({ children }) => {

  const theme = useTheme();
  const xSmall = useMediaQuery(theme.breakpoints.up("xs"));
  const small = useMediaQuery(theme.breakpoints.up("sm"));
  const medium = useMediaQuery(theme.breakpoints.up("md"));
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const xLarge = useMediaQuery(theme.breakpoints.up("xl"));

  const breakpoint = useMotionValue({
    xlUp: xLarge,
    smUp: small,
    mdUp: medium,
    xsUp: xSmall,
    lgUp: large
  });

  useLayoutEffect(() => {
    breakpoint.set({
      xlUp: xLarge,
      smUp: small,
      mdUp: medium,
      xsUp: xSmall,
      lgUp: large
    });

    // console.log("breakpoits: ", breakpoint.get());

  }, [xSmall, xSmall, small, medium, large, xLarge]);


  const memoBreakpoint = useMemo(() => breakpoint, [xSmall, xSmall, small, medium, large, xLarge]);


  return (
    <BreakPointContext.Provider value={{ breakpoint: memoBreakpoint }}>
      {children}
    </BreakPointContext.Provider>
  );
};

export const useMotionBreakPoint = () => {
  const context = React.useContext(BreakPointContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }

  return context as BreakPointContextType;
};

export default BreakPointProvider;
