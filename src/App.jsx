import { useState, useEffect } from "react";
import globalTheme from "./assets/styles/globalStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import HomeIndex from "./components/home/HomeIndex";
import RecipeIndex from './components/recipes/RecipeIndex';
import Footer from "./components/home/Footer";
import "./App.css";
import { SessionProvider } from './context/sessionContext'
function App() {
  const [sessionToken, setSessionToken] = useState(undefined);

  useEffect(() => {
      document.title = 'ClickNCook';
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
    <SessionProvider sessionToken={sessionToken} setSessionToken={setSessionToken}>
      <div>
        {sessionToken ? <RecipeIndex token={sessionToken}/> : <HomeIndex setSessionToken={setSessionToken}/> }
        <Footer />
      </div>
    </SessionProvider>
    </ThemeProvider>
  );
}

export default App;
