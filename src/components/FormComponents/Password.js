import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { EyeClose, EyeOpen } from "../../assets/Icons";

function Password({ label, name, control, errors }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field} // Spread field properties from Controller
          label={label}
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          size="small"
          autoComplete="off"
          error={Boolean(errors?.[name])}
          helperText={errors?.[name]?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <EyeClose /> : <EyeOpen />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

export default Password;
