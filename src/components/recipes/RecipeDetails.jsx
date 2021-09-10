import React, { useState, useEffect } from 'react';
import { useSession } from '../../context/sessionContext';
import { Grid, Typography } from '@material-ui/core';
import fetchRecipeById from '../../requests/fetchRecipeById';
import { useParams } from 'react-router-dom';
const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

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
                    'Uh-oh something on our end went wrong. Try refreshing to view this page'
                );
                setError(true);
                console.log(err);
            }
        })();
    }, [id, sessionToken]);

    return (
        <>
            {error ? (
                <Grid container sx={{textAlign: 'center'}}>
                    <Grid item xs={12} sx={{pt: 5}}>
                        <Typography variant='h3'>
                            {message}
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <Grid container sx={{ height: '90vh' }} spacing={4}>
                    <Grid item md={12} lg={5}>
                        {
                            //This grid is for the picture
                        }
                        <img src={recipe.photoURL} alt='food' />
                    </Grid>
                    <Grid item md={12} lg={7}>
                        <Typography variant='h1'>{recipe.name}</Typography>
                        <Typography>Category: {recipe.category}</Typography>
                        <br />
                        <Typography>Directions: {recipe.directions}</Typography>
                        <br />
                        <Typography>Cook Time: {recipe.cookTime}</Typography>
                        <br />
                        <Typography>Servings: {recipe.servings}</Typography>
                        <br />
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default RecipeDetails;
