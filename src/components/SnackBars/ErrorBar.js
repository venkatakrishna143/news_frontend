import { useSnackbar } from 'notistack';
import React from 'react'

function ErrorBar() {
  const { enqueueSnackbar } = useSnackbar();
 
   const Error = (message) => {
     enqueueSnackbar(message, { variant: "error" });
   };
 
   return Error;
}

export default ErrorBar