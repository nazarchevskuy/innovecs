import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface ILoaderProps {
  size?: number;
  mr?: number;
}

const Loader: FC<ILoaderProps> = ({ size, mr }) => {
  return (
    <Box sx={{ display: "flex" }} mr={mr ? mr : "auto"}>
      <CircularProgress color="inherit" size={size ? size : 25} />
    </Box>
  );
};

export default Loader;
