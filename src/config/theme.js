import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // BG Colors
    primary: {
      main: "#D9D9D9",
    },
    accentColor: {
       main: '#66ccff',
    },
    // Text Colors
    buttonText: {
        main: '#000',
        light: '#fff',
        dark: '#444'
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          borderRadius: '4px'
        }
      }
    }
  }
});


export default theme