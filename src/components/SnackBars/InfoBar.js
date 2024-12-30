import { useSnackbar } from 'notistack';
import React from 'react'

function InfoBar() {
 const { enqueueSnackbar } = useSnackbar();

  const Info = (message) => {
    enqueueSnackbar(message, { variant: "info" });
  };

  return Info;
}

export default InfoBar