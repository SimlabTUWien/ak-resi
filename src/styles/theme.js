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
      fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 300', // Default for all text
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
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
          paddingTop: "18px",
        },
        body: {
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 300',
          paddingTop: "18px",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
          root: {
            fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400',
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
            transform: "translateY(2px)",
            fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 500',
          },
          "&.Mui-selected > label": {
            fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 600',
          }
        },
      },
    },
    
    MuiButton: {
      styleOverrides: {
        root: {
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400',
          "& > label": {
            display: "inline-block",
            transform: "translateY(3px)",
          },
        },
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
        body1: {
          transform: "translateY(2px)",
          fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 400',
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

// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   components: {
//     // 1) Override the label used in <Select>
    
//     // 2) Override the <MenuItem> used in <Select>
//     MuiMenuItem: {
//       styleOverrides: {
//         root: {
//           fontWeight: 600,             // Make menu items bolder
//           transform: 'translateY(2px)', // Shift menu item text down
//         },
//       },
//     },
//   },
// });

// export default theme;


export default theme;
