import { createTheme, ThemeProvider } from "@mui/material/styles";

export const myThemeColors = createTheme({
  palette: {
    primary: {
      // teal color
      main: "#15a2b6",
    },
    secondary: {
      // gray
      main: "rgb(128,128,128)",
    },
    error: {
      // gray
      main: "#da3144",
    },
  },
});
