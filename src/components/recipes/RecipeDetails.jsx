import React, { useState, useEffect } from 'react';
import { useSession } from '../../context/sessionContext';
import { Grid, Typography, Box } from '@material-ui/core';
import fetchRecipeById from '../../requests/fetchRecipeById';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import MainContentContainer from '../common/MainContentContainer';
import NavBar from './NavBar';
const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const [loaded, setLoaded] = useState(false);

    const { sessionToken } = useSession();

    useEffect(() => {
        (async () => {
            try {
                const { status, json } = await fetchRecipeById(
                    id,
                    sessionToken
                );
                if (status === 200) {
                    setRecipe(json.recipe);
                    setMessage('');
                    setError(false);
                }
                if (status === 403) {
                    setMessage(json.message);
                    setError(true);
                }
                if (status === 404) {
                    setMessage(json.message);
                    setError(true);
                }
            } catch (err) {
                setMessage(
                    'Uh-oh something went wrong. Try refreshing to view this page'
                );
                setError(true);
            }
        })();
    }, [id, sessionToken]);

    return (
        <MainContentContainer noPadding>
                {error ? (
                    <Grid container sx={{ textAlign: 'center' }}>
                        <Grid item xs={12} sx={{ pt: 5 }}>
                            <Typography variant="h3">{message}</Typography>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid
                        container
                        sx={{
                            backgroundColor: 'neutral.light',
                        }}
                    >
                        <Grid
                            item
                            container
                            md={12}
                            lg={5}
                            sx={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 5,
                            }}
                        >
                            {
                                //This grid is for the picture
                            }
                            <img
                                style={
                                    loaded
                                        ? { maxWidth: '100%' }
                                        : { display: 'none' }
                                }
                                src={recipe.photoURL}
                                alt="food"
                                onLoad={() => setLoaded(true)}
                            />
                        </Grid>
                        <Grid item md={12} lg={6} sx={{color: 'secondary.dark', px: 2} }>
                            <Box sx={{py: 8, }}>
                            <Typography variant="h1">{recipe.name}</Typography>
                            </Box>
                            <Typography>Created by: <Link className='router-link' to={`/users/${recipe.owner}`}>{recipe.owner}</Link></Typography>
                            <br />
                            <Typography>
                                Category:{' '}
                                <Link
                                    className="router-link"
                                    to={`/category/${recipe.category}`}
                                >
                                    {recipe.category}
                                </Link>
                            </Typography>
                            <br />
                            <Typography>
                                Cook Time: {recipe.cookTime}
                            </Typography>
                            <br />
                            <Typography>Servings: {recipe.servings}</Typography>
                            <br />
                            <Typography>
                                Directions: {recipe.directions}
                            </Typography>
                            <br />
                        </Grid>
                    </Grid>
                )}
                </MainContentContainer>
    );
};

export default RecipeDetails;
