import { useSnackbar } from 'notistack';
import React from 'react'

function SuccessBar() {
   const { enqueueSnackbar } = useSnackbar();
 
   const Success = (message) => {
     enqueueSnackbar(message, { variant: "success" });
   };
 
   return Success;
}

export default SuccessBar