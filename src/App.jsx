import { useState, useEffect } from "react";
import globalTheme from "./assets/styles/globalStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import HomeIndex from "./components/home/HomeIndex";
import RecipeIndex from './components/recipes/RecipeIndex';
import Footer from "./components/home/Footer";
import "./App.css";

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);

  useEffect(() => {
    const storedToken = localStorage.getItem("sessionToken");
    if (storedToken !== undefined) {
      setSessionToken(storedToken);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sessionToken", sessionToken);
    console.log(sessionToken);
  }, [sessionToken]);


  return (
    <ThemeProvider theme={globalTheme}>
      <div>
        {sessionToken === localStorage.getItem('token') ? <RecipeIndex token={sessionToken}/> : <HomeIndex setSessionToken={setSessionToken}/> }
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
