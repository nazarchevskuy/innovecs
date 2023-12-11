import React, { FC, PropsWithChildren } from "react";
import { Box, Container } from "@mui/material";

const PageTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Box height={"100vh"} p={2}>
        {children}
      </Box>
    </Container>
  );
};

export default PageTemplate;
