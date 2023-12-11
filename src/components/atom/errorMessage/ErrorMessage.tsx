import { Typography } from "@mui/material";
import React, { FC } from "react";

interface IErrorMessage {
  title: string;
  mt?: number;
  mb?: number;
}

const ErrorMessage: FC<IErrorMessage> = ({ title, mb, mt }) => {
  return (
    <Typography
      variant={"body1"}
      sx={{ color: "red" }}
      mb={mb ? mb : "0px"}
      mt={mt ? mt : "0px"}
    >
      {title}
    </Typography>
  );
};

export default ErrorMessage;
