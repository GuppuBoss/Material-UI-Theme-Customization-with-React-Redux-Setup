import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const DARK_GREY = '#5A5B6A';
const LIGHT_GREY = '#787885';
const PRIMARY = '#2979FF';
const LIGHT_BLUE = '#EBF2FF';
// A custom theme for this app
const theme = createMuiTheme({
  transparent: 'transparent',
  black: '#333333',
  blackShadow: '0px 1px 2px rgba(120, 120, 133, 0.7), 0px 3px 5px rgba(120, 120, 133, 0.2)',
  palette: {
    primary: {
      main: PRIMARY,
      dark: 'red'
    },
    secondary: {
      main: '#163360',
    },
    error: {
      main: '#EB5757',
    },
    background: {
      default: '#fff',
    },
    color: {
      DARK_GREY,
      LIGHT_GREY,
      LIGHT_BLUE
    }
  },
  overrides: {
    MuiAppBar: {
      // colorDefault: {
      //   backgroundColor: '#fff'
      // }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 10
      }
    },
    MuiButton: {
      root: {
        borderRadius: 100,
        padding: '8px 30px'
      },
      outlined: {
        padding: '6px 16px'
      },
      contained: {
        boxShadow: 'none',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#2979FF',
        }
      },
      outlinedPrimary: {
       border: `2px solid ${PRIMARY}`, 
       '&:hover': {
        border: `2px solid ${PRIMARY}` 
       }
      }
    },
    // Applied to the <ul> element
    MuiMenu: {
      root: {
      },
      list: {
      },
    },
    // Applied to the <li> elements
    MuiMenuItem: {
      root: {

      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: '#EBF2FF'
        }
      },
      root: {
        '&.Mui-selected': {
          backgroundColor: '#EBF2FF'
        },
      },
      gutters: {
        paddingLeft: 8,
        paddingRight: 8
      }
    },
    MuiFormLabel: {
      root: {
        color: DARK_GREY,
        '&$focused': {
          color: DARK_GREY
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 10,
        '&$focused $notchedOutline': {
          borderColor: DARK_GREY,
          borderWidth: 2,
        },
        '&:hover $notchedOutline': {
          borderColor: DARK_GREY,
          borderWidth: 2,
        }
      },
      notchedOutline: {
        borderColor: LIGHT_GREY,
      },
      input: {
        padding: '10.5px 16px'
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 10
      },
      input: {
        padding: 10
      }
    },
    MuiInputLabel: {
      outlined: {
        transform: `translate(20px, 13px) scale(1)`
      }
    },
    MuiSelect: {
      background: 'yellow',
      root: {
        border: 0,
      },
      outlined: {
        borderRadius: 10
      },
      select: {
        '&:focus': {
          backgroundColor: 'transparent',
          borderRadius: 10,
        },
        '&:before': {
          borderColor: 'orange'
        },
        '&:after': {
          borderColor: 'green',
        }
      }
    },
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;