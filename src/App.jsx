import { useState, useEffect } from 'react';
import globalTheme from './assets/styles/globalStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import HomeIndex from './components/home/HomeIndex';
import RecipeIndex from './components/recipes/RecipeIndex';
import Footer from './components/home/Footer';
import './App.css';
import { SessionProvider } from './context/sessionContext';
import RecipeDetails from './components/recipes/RecipeDetails';
import Profile from './components/home/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RecipeCategory from './components/recipes/RecipeCategory';
import RecipeUser from './components/recipes/RecipeUser';
import GoToTop from './components/GoToTop';
import NavBar from './components/recipes/NavBar';
import { Redirect } from 'react-router-dom';
import AppContainer from './components/common/AppContainer';
// import seed from './requests/seeding'
function App() {
    const [sessionToken, setSessionToken] = useState(undefined);

    useEffect(() => {
        document.title = 'ClickNCook';
        const storedToken = localStorage.getItem('sessionToken');
        if (storedToken) {
            setSessionToken(storedToken);
        }
    }, []);
    // useEffect(() => {
    //         seed();
    // }, [])
    const updateToken = (newToken) => {
        if (newToken) {
            localStorage.setItem('sessionToken', newToken);
        } else {
            localStorage.clear();
        }
        setSessionToken(newToken);
    };

    return (
        <ThemeProvider theme={globalTheme}>
            <SessionProvider
                sessionToken={sessionToken}
                setSessionToken={updateToken}
            >
                <AppContainer>
                    <Router>
                        <GoToTop />
                        <NavBar />
                        <Switch>
                            <Route exact path="/">
                            {sessionToken ? <RecipeIndex /> : <HomeIndex />}
                            </Route>
                            <Route exact path="/recipe/:id">
                                <RecipeDetails />
                            </Route>
                            <Route
                                exact
                                path="/category/:cat"
                                render={(props) => (
                                    <RecipeCategory
                                        key={props.match.params.cat}
                                    />
                                )}
                            />
                            <Route exact path="/users/:username">
                                <RecipeUser />
                            </Route>
                            <Route exact path="/profile">
                                <Profile />
                            </Route>
                            <Route>
                                <Redirect to="/" />
                            </Route>
                        </Switch>
                        <Footer />
                    </Router>
                </AppContainer>
            </SessionProvider>
        </ThemeProvider>
    );
}

export default App;
