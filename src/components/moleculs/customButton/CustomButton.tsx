import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import Loader from "../../atom/loader/Loader";

interface ICustomButtonProps {
  name: string;
  onClick: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const CustomButton: FC<ICustomButtonProps> = ({
  name,
  onClick,
  isLoading,
  isDisabled,
}) => {
  return (
    <Button
      variant="contained"
      onClick={() => onClick()}
      disabled={isDisabled ? true : false}
    >
      {isLoading ? <Loader mr={2} /> : null}
      <Typography variant={"body2"} sx={{ fontWeight: "600" }}>
        {name}
      </Typography>
    </Button>
  );
};

export default CustomButton;
