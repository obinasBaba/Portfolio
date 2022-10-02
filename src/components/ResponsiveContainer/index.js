import React, { useEffect, useState } from "react";
import { Container, useMediaQuery, useTheme } from "@material-ui/core";

const ResponsiveContainer = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    //console.log('matches: ', matches);
  }, [matches]);

  return (
    <Container
      maxWidth={matches ? "xl" : "lg"}
      {...props}
      ref={ref}
      fixed={true}
    >
      {props?.children}
    </Container>
  );
});

ResponsiveContainer.displayName = "ResponsiveContainer";

export default ResponsiveContainer;
