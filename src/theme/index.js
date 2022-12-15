
import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: '#0A47C4'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    }
  },
  overrides: {
    MuiTableRow: {
        root: {  '&$selected, &$selected:hover': { backgroundColor: '#F2F9FF', }  }
    },
    MuiCheckbox: {
        colorSecondary: {
          '&$checked': {
            color: '#0A47C4',
          },
        },
      },
  },
  secondary:{
    main:'#F2F9FF'
  },
  shadows,
  typography
});

export default theme;