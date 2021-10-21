import React from 'react';
import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popupWrapper: {
      maxWidth: '570px',
      width: '100%',
      padding: '29px 35px 35px',
      boxShadow: '5px 10px 30px rgba(0, 0, 0, 0.05)',
      borderRadius: '16px',
      background: '#fff',
      [theme.breakpoints.down('sm')]: {
        padding: '25px 16px 18px'
      }
    }
  })
);

export const Popup = (props) => {
  const classes = useStyles();
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      className={classes.popupWrapper}
    >
      {props.children}
    </Box>
  );
};
