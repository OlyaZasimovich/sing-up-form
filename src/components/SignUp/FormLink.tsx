import React from 'react';
import { Link } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

type FormLinkProps = {
  text: string;
};

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      fontWeight: 'bold'
    }
  })
);

export const FormLink = ({ text }: FormLinkProps) => {
  const classes = useStyles();
  return (
    <Link href="#" underline="always" classes={{ root: classes.link }}>
      {text}
    </Link>
  );
};
