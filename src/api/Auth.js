import api from "./axios";
import { apilinks } from "./urls";

export const Register = async (data) => {
  const response = await api.post(
    apilinks.auth.register,
    JSON.stringify({
      email: data.uemail,
      password: data.upassword,
      username: data.username,
      phoneno: data.phoneno,
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response;
};

export const VRegister = async (data) => {
  const response = await api.post(
    apilinks.auth.vregister,
    JSON.stringify({
      Eemail: data.email,
      uid: data.uid,
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response;
};

// Passwords

export const forgotPassword = async (emaildata) => {
  const response = await api.post(
    apilinks.auth.fpassword,
    JSON.stringify({
      email: emaildata,
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response;
};

export const resetPassword = async (data) => {
  const response = await api.post(
    apilinks.auth.rpassword,
    JSON.stringify({
      Eemail: data.uemail,
      uid: data.uid,
      new_password: data.npassword,
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response;
};

export const changePassword = async (data, token) => {
  const response = await api.post(
    apilinks.auth.cpassword,
    JSON.stringify({
      old_password: data.opassword,
      new_password: data.npassword,
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
