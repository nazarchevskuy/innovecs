import React, { FC } from "react";
import { TextField } from "@mui/material";

interface IInputProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  isError?: boolean;
  isFullWidth?: boolean;
  mb?: number;
}

const Input: FC<IInputProps> = ({
  name,
  isError,
  value,
  onChange,
  isFullWidth,
  mb,
}) => {
  return (
    <TextField
      label={name}
      value={value}
      variant="outlined"
      onChange={(e) => onChange(e.target.value)}
      error={isError ? true : false}
      fullWidth={isFullWidth ? true : false}
      sx={{ marginBottom: mb ? mb : "auto" }}
    />
  );
};

export default Input;
