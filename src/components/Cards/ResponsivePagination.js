import { Button, Stack } from '@mui/material'
import React from 'react'

function ResponsivePagination() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" sx={{ width: "100%", p: "4px" }}>
      <Button variant="contained" >
        More News ...
      </Button>
    </Stack>
  )
}

export default ResponsivePagination