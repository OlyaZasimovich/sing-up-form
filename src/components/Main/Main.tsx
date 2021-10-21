import React from 'react';
import { Box } from '@mui/material';
import { Popup } from '../SignUp/Popup';
import { Form } from '../SignUp/Form';

export const Main = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Popup>
        <Form />
      </Popup>
    </Box>
  );
};
