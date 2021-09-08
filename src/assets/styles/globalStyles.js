import { createTheme } from "@material-ui/core/styles";

const pageFont = "'Archivo', sans-serif";

const globalTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          borderRadius: 25,
          paddingLeft: 20,
          paddingRight: 20,
          marginLeft: 5,
          marginRight: 5,
          textTransform: "capitalize",
          boxShadow: "none",
          maxWidth: 200,
        },
      },
    },   
  },
  palette: {
    primary: {
      // 
      main: "#FFFF17",
    },
    secondary: {
      main: "#C20000",
      light: '#FF4747',
      dark: '#7A0000'
    },
    tertiary: {
      main: "#34741B",
      light: '#5AC62F',
      dark: '#1E4210'
    },
      // 
    neutral: {
      main: "#DAEBFB",
    },
      // 
    info: {
      main: "#2B2728",
    },
  },
  typography: {
    fontFamily: pageFont,
    h1: {
      fontFamily: pageFont,
      fontSize: 70,
      fontWeight: 800,
    },
    h2: {
      fontFamily: pageFont,
      fontSize: 40,
      fontWeight: 800,
      marginBottom: 20,
    },
    h3: {
      fontFamily: pageFont,
      fontSize: 25,
      fontWeight: 800,
      marginBottom: 20,
      // color: "white",      
    },
  },
});

export default globalTheme;
