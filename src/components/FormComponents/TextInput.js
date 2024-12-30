import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function TextInput({ label, name, control, errors }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          fullWidth
          size="small"
          error={Boolean(errors?.[name])} // Highlight the input field in case of error
          helperText={errors?.[name]?.message} // Show error message below the input field
        />
      )}
    />
  );
}

export default TextInput;
