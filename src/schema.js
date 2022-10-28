import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Prompt, sans-serif',
    h1: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#fff'
    },
    h2: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#444444',
      letterSpacing: '0.03em'
    },
    body1: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.75,
      color: '#444444'
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.75,
      color: '#777777'
    },
    button: {
      fontWeight: 500,
      textTransform: 'none'
    },
    error: {
      color: '#d32f2f',
      fontSize: 12,
      fontWeight: 400,
      fontFamily: 'Prompt, sans-serif',
      marginBottom: '3px'
    }
  },
  palette: {
    background: {
      default: '#FAFAFA',
      paper: '#ffffff'
    },
    primary: {
      contrastText: '#ffffff',
      main: '#444444'
    },
    secondary: {
      contrastText: '#ffffff',
      main: '#EB0A0A'
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '68px',
          boxShadow: 'none',
          borderBottom: 'solid 1px #BCBDBC'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: '324px',
          padding: '8px',
          margin: '8px',
          boxShadow: 'none',
          border: '1px solid #F0F0F0',
          borderRadius: 'none'
        },
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 0
        },
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          flex: 1,
          ':last-child': {
            paddingBottom: 0
          }
        },
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          maxWidth: '130px',
          marginRight: '8px'
        },
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          paddingBottom: '16px'
        }
        
      },
      
    },
    MuiDrawer: {
      styleOverrides: {
        modal: {
          width: 'calc(100vw - 72px)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          maxHeight: '36px'
        }
      }
    }
  }
});


export default theme;