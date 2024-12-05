import { Stack, styled } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function RegisterForm() {
  const defaultValues = {
    email: "",
    password: "",
    username: "",
    phoneno: "",
  };

  const schema = yup.object({
    search: yup.string().required("Search field is required"),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    // console.log(data);
  };
  return (
    <MainContainer
      item
      xs={12}
      md={5.8}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      RegisterForm
    </MainContainer>
  );
}

export default RegisterForm;

export const MainContainer = styled(Grid)(({ theme }) => ({
  border: "1px solid Blue",
  height: "95%",
  padding: "8px",
}));
