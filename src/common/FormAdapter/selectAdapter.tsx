import React from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  SelectProps,
  FormControl,
} from "@mui/material";

type TSelectOptions = {
  value: string | number | undefined;
  label: string | undefined;
};

export const SelectAdapter = (
  props: SelectProps & {
    name: string;
    onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
    options: TSelectOptions[];
    borderColor?: boolean;
  }
) => {
  const { name, onChange, options, borderColor, ...rest } = props;

  return (
    <FormControl size="small" sx={{ width: "100%" }}>
      <InputLabel error={!!borderColor}>{rest.label}</InputLabel>
      <Select
        {...rest}
        name={name}
        value={rest.value}
        onChange={onChange}
        onBlur={rest.onBlur}
        error={!!borderColor}
        MenuProps={{
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
          sx: {
            maxHeight: "290px",
            width: "100px",
            "& li": {
              whiteSpace: "normal",
              overflowWrap: "break-word",
            },
          },
        }}
      >
        {options.map((option, index) => {
          return (
            <MenuItem
              key={`${index * (Math.random() * 999)}_option_${option.label}`}
              value={option?.value}
            >
              {option?.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
