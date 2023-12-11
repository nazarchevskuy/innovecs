import React, { FC } from "react";
import PageTemplate from "../../templates/pageTemplate/PageTemplate";
import { Typography } from "@mui/material";

const HomePage: FC = () => {
  return (
    <PageTemplate>
      <Typography variant={"h3"}>Welcome to home page</Typography>
    </PageTemplate>
  );
};

export default HomePage;
