import React from 'react';
import {
  Button,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItemText,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Dialog from '@mui/material/Dialog';
import * as _ from 'lodash';
import { Gender } from '../../types/commonTypes';
import {
  FemaleIcon,
  LogoIcon,
  MaleIcon,
  OtherIcon,
  VisibilityIcon
} from '../../assets/icons';
import { FormLink } from './FormLink';

interface ShowPasswordState {
  showConfirmedPassword: boolean;
  showCreatedPassword: boolean;
}

export interface FormDialogProps {
  values: FormData | undefined;
  open: boolean;
  onClose: () => void;
}

type FormData = {
  email: string;
  userPassword: string;
  confirmedPassword: string;
  gender: Gender.Male | Gender.Female | Gender.Other | '';
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputForm: {
      '&-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent'
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: 1
      }
    },
    radio: {
      color: theme.palette.text.primary,
      '&:hover': {
        background: 'transparent'
      }
    },
    checked: {},
    radioGroup: {
      display: 'flex'
    },
    controlLabel: {
      display: 'grid',
      textAlign: 'center',
      gridTemplateRows: '1fr 1fr',
      justifyContent: 'center',
      padding: '12px 10px 10px',
      height: '100px',
      flex: '1',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      border: '1px solid #C1C1C1',
      borderRadius: '16px',
      '&:first-of-type': {
        marginLeft: 0
      },
      '&:last-of-type': {
        marginRight: 0
      },
      '&:hover': {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        '&>span': {
          color: theme.palette.primary.main
        }
      },
      '&>span': {
        [theme.breakpoints.down('sm')]: {
          paddingBottom: '6px'
        }
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: '2px',
        height: '80px',
        marginLeft: '9px',
        marginRight: '9px'
      }
    },
    checkedControlLabel: {
      borderColor: theme.palette.primary.main,
      '&>span': {
        color: theme.palette.primary.main,
        fontWeight: 'bold'
      }
    },
    logo: {
      width: '80px',
      height: '82px',
      [theme.breakpoints.down('sm')]: {
        width: '55px',
        height: '56px'
      }
    },
    h2: {
      marginTop: '25px',
      marginBottom: '35px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '21px',
        marginBottom: '24px'
      }
    },
    inputLabel: {
      fontWeight: 'bold',
      marginBottom: '12px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '8px'
      }
    },
    signUpForm: {
      width: '100%'
    },
    rowGroup: {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '20px'
      }
    },
    footerText: {
      '&:first-of-type': {
        marginBottom: '20px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
        lineHeight: '17px',
        marginBottom: '0',
        marginTop: '16px',
        '&:first-of-type': {
          marginBottom: '0'
        }
      }
    },
    submitFormButton: {
      [theme.breakpoints.down('sm')]: {
        padding: '15px',
        marginBottom: '0'
      }
    }
  })
);

const validationSchema = yup.object({
  email: yup.string().email().required('Email is required'),
  userPassword: yup
    .string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  confirmedPassword: yup
    .string()
    .required('Confirming is required')
    .oneOf([yup.ref('userPassword'), null], 'Passwords must match')
});

export const Form = () => {
  const classes = useStyles();

  const [dialogData, setDialogData] = React.useState<FormData | undefined>();
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleToggleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  const formik = useFormik<FormData>({
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: {
      email: '',
      userPassword: '',
      confirmedPassword: '',
      gender: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formik.setSubmitting(true);
      formik.resetForm();
      setDialogData(values);
      handleToggleOpenDialog();
    }
  });

  const [showPassword, setDisplayingPassword] =
    React.useState<ShowPasswordState>({
      showCreatedPassword: false,
      showConfirmedPassword: false
    });

  const togglePasswordShow = (fieldName: keyof ShowPasswordState) => () =>
    setDisplayingPassword((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName]
    }));

  return (
    <>
      <LogoIcon
        classes={{ root: classes.logo }}
        width="80"
        height="82"
        viewBox="0 0 80 82"
      />
      <Typography variant="h2" className={classes.h2}>
        {'Sign Up with email'}
      </Typography>
      <form className={classes.signUpForm} onSubmit={formik.handleSubmit}>
        <InputLabel className={classes.inputLabel} htmlFor="gender">
          Gender
        </InputLabel>
        <RadioGroup
          aria-label="gender"
          defaultValue="female"
          value={formik.values.gender}
          id="gender"
          name="gender"
          onChange={formik.handleChange}
          row
          className={clsx(classes.radioGroup, classes.rowGroup)}
        >
          <FormControlLabel
            value="male"
            labelPlacement="bottom"
            className={clsx(classes.controlLabel, {
              [classes.checkedControlLabel]:
                formik.values.gender === Gender.Male
            })}
            control={
              <Radio
                color="primary"
                icon={<MaleIcon width="32" height="32" viewBox="0 0 32 32" />}
                checkedIcon={
                  <MaleIcon width="32" height="32" viewBox="0 0 32 32" />
                }
                classes={{ root: classes.radio }}
              />
            }
            label="Male"
          />
          <FormControlLabel
            value="female"
            labelPlacement="bottom"
            className={clsx(classes.controlLabel, {
              [classes.checkedControlLabel]:
                formik.values.gender === Gender.Female
            })}
            control={
              <Radio
                icon={<FemaleIcon width="20" height="32" viewBox="0 0 20 32" />}
                checkedIcon={
                  <FemaleIcon width="20" height="32" viewBox="0 0 20 32" />
                }
                classes={{ root: classes.radio }}
              />
            }
            label="Female"
          />
          <FormControlLabel
            value="other"
            labelPlacement="bottom"
            className={clsx(classes.controlLabel, {
              [classes.checkedControlLabel]:
                formik.values.gender === Gender.Other
            })}
            control={
              <Radio
                icon={<OtherIcon width="30" height="32" viewBox="0 0 30 32" />}
                checkedIcon={
                  <OtherIcon width="30" height="32" viewBox="0 0 30 32" />
                }
                classes={{ root: classes.radio }}
              />
            }
            label="Other"
          />
        </RadioGroup>
        <InputLabel className={classes.inputLabel} htmlFor="email">
          E-mail
        </InputLabel>
        <TextField
          fullWidth
          id="email"
          name="email"
          hiddenLabel
          type="email"
          placeholder="Text here"
          className={clsx(classes.rowGroup)}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={(formik.touched.email && formik.errors.email) || ' '}
          InputProps={{ classes: { root: classes.inputForm } }}
        />
        <InputLabel className={classes.inputLabel} htmlFor="email">
          Create Password
        </InputLabel>
        <TextField
          fullWidth
          id="userPassword"
          name="userPassword"
          hiddenLabel
          className={clsx(classes.inputForm, classes.rowGroup)}
          type={showPassword.showCreatedPassword ? 'text' : 'password'}
          value={formik.values.userPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.userPassword && Boolean(formik.errors.userPassword)
          }
          helperText={
            (formik.touched.userPassword && formik.errors.userPassword) || ' '
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordShow('showCreatedPassword')}
                >
                  {showPassword.showCreatedPassword ? (
                    <VisibilityIcon
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    />
                  ) : (
                    <VisibilityIcon
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ),
            classes: { root: classes.inputForm }
          }}
        />
        <InputLabel className={classes.inputLabel} htmlFor="email">
          Confirm Password
        </InputLabel>
        <TextField
          fullWidth
          id="confirmedPassword"
          name="confirmedPassword"
          hiddenLabel
          className={clsx(classes.inputForm, classes.rowGroup)}
          type={showPassword.showConfirmedPassword ? 'text' : 'password'}
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmedPassword &&
            Boolean(formik.errors.confirmedPassword)
          }
          helperText={
            (formik.touched.confirmedPassword &&
              formik.errors.confirmedPassword) ||
            ' '
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordShow('showConfirmedPassword')}
                >
                  {showPassword.showConfirmedPassword ? (
                    <VisibilityIcon
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    />
                  ) : (
                    <VisibilityIcon
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ),
            classes: { root: classes.inputForm }
          }}
        />
        <Button
          disabled={!formik.isValid || formik.isSubmitting}
          color="primary"
          className={clsx(classes.rowGroup, classes.submitFormButton)}
          variant="contained"
          fullWidth
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <Typography variant="body1" className={classes.footerText}>
        Already have an account? <FormLink text={'Log In'} />
      </Typography>
      <Typography variant="body1" className={classes.footerText}>
        Review privacy and disclosures <FormLink text={'here'} />
      </Typography>
      <FormDialog
        values={dialogData}
        open={openDialog}
        onClose={handleToggleOpenDialog}
      />
    </>
  );
};

export const FormDialog = (props: FormDialogProps) => {
  const { values, onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Form values</DialogTitle>
      <List sx={{ pt: 0 }}>
        {_.map(values, (value, key) => (
          <ListItemText
            key={value}
            primary={`${key}: ${value}`}
            sx={{ padding: '10px' }}
          />
        ))}
      </List>
    </Dialog>
  );
};
