import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react'

const MyBackdrop = ({open}) => {
  return (
    <Backdrop
        sx={{ color: '#fff'}}
        open={open}
    >
        <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default MyBackdrop;
