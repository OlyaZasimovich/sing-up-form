import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#3C9C41',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#5B5B5B',
      secondary: '#000000'
    },
    error: {
      main: '#D23737'
    },
    success: {
      main: '#87D78B'
    }
  }
});

theme = createTheme(theme, {
  components: {
    styleOverrides: {
      defaultProps: {
        root: {
          fontFamily: 'Montserrat',
          fontSize: '18px'
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '20px 34px',
          fontSize: 'inherit',
          lineHeight: 'inherit',
          fontFamily: 'inherit',
          borderRadius: '16px',
          fontWeight: 'bold',
          textTransform: 'initial',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#4DB252',
            boxShadow: 'none'
          },
          '&:active': {
            boxShadow: 'none'
          },
          '&:focus': {
            backgroundColor: '#318636'
          },
          '&.Mui-focusVisible': {
            boxShadow: 'none'
          }
        },
        outlined: {
          borderWidth: '3px',
          borderRadius: '36px',
          fontSize: '16px'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 'inherit',
          lineHeight: 'inherit'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat, Arial',
          color: theme.palette.text.primary,
          fontSize: 'inherit',
          lineHeight: 'inherit'
        },
        h2: {
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          fontSize: '24px',
          lineHeight: '29px'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          borderColor: '#C1C1C1',
          borderRadius: '16px',
          backgroundColor: '#ffffff'
        },
        input: {
          '&:-webkit-autofill': {
            'WebkitBoxShadow': '0 0 0px 1000px #fff inset'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          borderRadius: '16px',
          borderColor: 'inherit',
          fontSize: 'inherit',
          color: 'inherit',
          height: '70px',
          '&.Mui-error': {
            color: theme.palette.error.main
          },
          [theme.breakpoints.down('sm')]: {
            height: '50px'
          }
        },
        input: {
          padding: '25px',
          [theme.breakpoints.down('sm')]: {
            padding: '15px 18px'
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: 'absolute',
          bottom: '-24px',
          fontSize: '16px',
          left: '0',
          margin: '0',
          lineHeight: '20px',
          [theme.breakpoints.down('sm')]: {
            bottom: '-18px',
            fontSize: '12px',
            lineHeight: '16px'
          }
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          height: 'inherit',
          width: 'inherit'
        }
      }
    }
  }
});

export const mainTheme = createTheme(theme);
