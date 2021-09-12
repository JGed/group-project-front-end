import React, { useState, useEffect } from 'react';
import NavBar from './recipes/NavBar';
import { Box, Grid, Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import fetchRecipesByCategory from '../requests/fetchRecipesByCategory';
import RecipeCards from './recipes/RecipeCards';
const RecipeCategory = () => {
    const [recipes, setRecipes] = useState([]);
    const { cat } = useParams();

    useEffect(() => {
        (async () => {
            const { status, json } = await fetchRecipesByCategory(cat);
            if (status === 200) {
                setRecipes(json.recipes);
            }
        })();
    }, [cat]);

    return (
        <>
            <NavBar />
            <Box
                sx={{
                    minHeight: '90vh',
                    backgroundColor: 'neutral.light',
                    pt: 5,
                    px: 10,
                    justifyContent: 'center'
                }}
            >
                <Grid container spacing={2} sx={{px: 6}}>
                    {recipes.map((recipe) => (
                        <Grid item container key={recipe.id} xs={12} md={6} lg={3} sx={{mb: 4, justifyContent: 'center'}}>
                            <RecipeCards recipe={recipe} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default RecipeCategory;
