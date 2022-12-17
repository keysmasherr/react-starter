import { createTheme } from "@mui/material";



const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.8rem",
    },
    h2: {
      fontSize: "2.3rem",
    },
    h3: {
      fontSize: "2.1rem",
    },
    h4: {
      fontSize: "1.8rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.2rem",
    },
    fontFamily: [
      "gRegular",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: "#5C46F1"
    },
    background: {
      // default: "transparent linear-gradient(180deg, #2C5CDB 0%, #1E3D8F 9%, #101F46 100%) 0% 0% no-repeat"
      // default: "red"
    },
    lighter: createColor("#fff"),
    newP: createColor('#5C46F1')
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem"
        },
        "site-cta": {
          backgroundColor: "#815AFD",
          borderRadius: "0",
          border: "1px solid #815AFD",
          color: "white",
          fontFamily: 'gBold',
          letterSpacing: 1.5,
          padding: "1rem 3rem",
          ".MuiSvgIcon-root": {
            fontSize: "2.5rem"
          },
          "&:hover": {
            backgroundColor: "white",
            color: "#815AFD",
          }
        },
        "contained-outlined": {
          border: "3px solid #3AC3EC",
          borderRadius: "56px",
          fontFamily: 'gBold',
          letterSpacing: 1.5,
          color: "black",
          padding: "0.3rem 1rem",
          width: "100%",
          fontSize: '1.2rem',
          textTransform: 'uppercase',
          "&:hover": {
            backgroundColor: "#3AC3EC",
            color: "white"
          }
        },
        "profile-btn": {
          color: "#815AFD",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "7px",
          fontSize: "1.5rem",
          minWidth: "inherit",
      }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "1.4rem",
          
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.4rem"
        },
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor:"#e6deff", 
          color: "#371a93",
          borderRadius: "6px",
          ".MuiChip-deleteIcon": {
            color: "#371a93",
          }
        },
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          marginRight: "12px",
        }
      }
    },
  }
});

export default theme;
