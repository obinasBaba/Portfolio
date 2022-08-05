import React, { createContext, useEffect, useMemo } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { MotionValue, useMotionValue } from "framer-motion";

type BreakPointContextType = {
  breakpoint: MotionValue<string>
}

export const BreakPointContext = createContext<BreakPointContextType>({} as any);


const BreakPointProvider: React.FC = ({ children }) => {

  const theme = useTheme();
  const xSmall = useMediaQuery(theme.breakpoints.up("xs"));
  const small = useMediaQuery(theme.breakpoints.up("sm"));
  const medium = useMediaQuery(theme.breakpoints.up("md"));
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const xLarge = useMediaQuery(theme.breakpoints.up("xl"));

  const breakpoint = useMotionValue("sm");


  useEffect(() => {

    if (xSmall) {
      breakpoint.set("sx");
    } else if (small) {
      breakpoint.set("sm");
    } else if (medium) {
      breakpoint.set("md");
    } else if (large) {
      breakpoint.set("lg");

    } else if (xLarge) {
      breakpoint.set("xl");
    }


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
