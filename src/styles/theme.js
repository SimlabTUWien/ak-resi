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
  // typography: {
  //   fontFamily: "ivyepic-variable, sans-serif",
  //   allVariants: {
  //     fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 300', // Default for all text
  //   },
  //   h1: {
  //     fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
  //   },
  //   h2: {
  //     fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
  //   },
  //   h3: {
  //     fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
  //   },
  //   h4: {
  //     fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
  //   },
  //   h5: {
  //     fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
  //   },
  //   h6: {
  //     fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
  //   },
  // },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    allVariants: {
      fontWeight: 300, // default
    },
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  // typography: {
  //   fontFamily: '"M PLUS Rounded 1c", sans-serif',
  //   allVariants: {
  //     fontWeight: 400
  //   },
  //   h1: { fontWeight: 600 },
  //   h2: { fontWeight: 600 },
  //   h3: { fontWeight: 600 },
  //   h4: { fontWeight: 600 },
  //   h5: { fontWeight: 600 },
  //   h6: { fontWeight: 600 },
  // },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: ({ theme }) => ({
          fontWeight: 600,
          // fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
          paddingTop: "18px",
          fontSize: "1.0rem",
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.925rem",
          },
          hyphens: "manual"
        }),
        body: ({ theme }) => ({
          fontWeight: 400,
          // fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 300',
          paddingTop: "18px",
          fontSize: "1.0rem",
          [theme.breakpoints.down("sm")]: {
            fontSize: "0.925rem",
          },
          hyphens: "auto"
        }),
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          // fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
          root: {
            fontWeight: 400,
            // fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400',
            "& > svg": {
            display: "inline-block",
            transform: "translateY(1px)",
          },
          },
        },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "& > label": {
            display: "inline-block",
            hyphens: "manual",
            // transform: "translateY(2px)",
            // fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500',
            fontWeight: 500,
          },
          "&.Mui-selected > label": {
            // fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
            fontWeight: 600,
          }
        },
      },
    },
    
    MuiButton: {
      styleOverrides: {
        root: {
            fontWeight: 400,
          // fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400',
          "& > label": {
            display: "inline-block",
            // transform: "translateY(3px)",
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        button: {
          // fontFamily: '"M PLUS Rounded 1c", sans-serif',
          fontWeight: 400,
          
          // fontFamily: "ivyepic-variable, sans-serif",
          // fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "1.08rem",
          fontWeight: 400,
          color: "#333",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // root: {
        //   fontFamily: "ivyepic-variable, sans-serif",
        // },
        // body1: {
        //   transform: "translateY(2px)",
        //   fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 300',
        // },
        h4: {
          fontWeight: 500,
          // transform: "translateY(2px)"
        },
        // h5: {
        //   fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 300',
        // },
      },
    },
  },
});

export default theme;