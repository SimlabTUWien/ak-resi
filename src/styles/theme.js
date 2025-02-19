import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#EAE8E8",
      /* default : "#5f686d" */
    },
    text: {
      primary: "#000",
      /* primary: "#fff" */
    },
  },
  typography: {
    fontFamily: "ivyepic-variable, sans-serif",
    allVariants: {
      fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 200', // Default for all text
    },
    h1: {
      fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
    },
    h2: {
      fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
    },
    h3: {
      fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
    },
    h4: {
      fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
    },
    h5: {
      fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
    },
    h6: {
      fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
    },
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500', // Adjust weight if needed
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500', // Set bold for table headers
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
        },
        body: {
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 300',
        },
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       fontFamily: "ivyepic-variable, sans-serif",
    //       fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400',
    //     },
    //     allVariants: {
    //       fontFamily: "ivyepic-variable, sans-serif",
    //       fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400',
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400', // Adjust weight if needed
        }
      },
    },
    MuiToolbar: {
      styleOverrides: {
        button: {
          fontFamily: "ivyepic-variable, sans-serif",
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "ivyepic-variable, sans-serif",
        },
        h4: {
          transform: "translateY(2px)"
        },
        h5: {
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 300',
        },

      },
    },
  },
});

export default theme;
