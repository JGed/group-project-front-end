import { useState, useEffect } from "react";
import globalTheme from "./assets/styles/globalStyles";
import { ThemeProvider } from "@material-ui/core/styles";
import HomeIndex from "./components/home/HomeIndex";
import RecipeIndex from './components/recipes/RecipeIndex';
import Footer from "./components/home/Footer";
import "./App.css";
import { SessionProvider } from './context/sessionContext'
import RecipeDetails from './components/recipes/RecipeDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App() {
  const [sessionToken, setSessionToken] = useState(undefined);


  useEffect(() => {
    document.title = 'ClickNCook';
    const storedToken = localStorage.getItem("sessionToken");
    if (storedToken !== 'undefined') {
      setSessionToken(storedToken);
    }
  }, []);

  const updateToken = newToken => {
    if(newToken) {
      localStorage.setItem('sessionToken', newToken);
    }
    else {
      localStorage.clear();
    }
    setSessionToken(newToken);
  }

  useEffect(() => {
    console.log('stored token: ', localStorage.getItem('sessionToken'));
    console.log('sessionToken: ', sessionToken)
  })


  return (
    <ThemeProvider theme={globalTheme}>
    <SessionProvider sessionToken={sessionToken} setSessionToken={updateToken}>
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              {sessionToken ? <RecipeIndex /> : <HomeIndex /> }
            </Route>
            <Route exact path='/recipe/:id'>
              <RecipeDetails />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </SessionProvider>
    </ThemeProvider>
  );
}

export default App;
