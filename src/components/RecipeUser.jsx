import React, { useEffect, useState } from 'react';
import NavBar from './recipes/NavBar';
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Grid,
    CardActionArea,
} from '@material-ui/core';
import fetchPublicRecipesByUsername from '../requests/fetchPublicRecipesByUsername';
import { useParams, Link } from 'react-router-dom';
import RecipeCards from './recipes/RecipeCards';

const RecipeUser = () => {
    const [recipes, setRecipes] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        (async () => {
            const { json, status } = await fetchPublicRecipesByUsername(
                username
            );
            if (status === 200) {
                setRecipes(json.recipes);
            }
        })();
    }, [username]);
    return (
        <>
            <NavBar />
            <Box
                sx={{
                    minHeight: '90vh',
                    backgroundColor: 'neutral.light',
                    pt: 5,
                    px: 10,
                }}
            >
                <Typography variant='h2' color='secondary.dark' align='center'>
                    {username}'s recipes: 
                </Typography>
                <RecipeCards recipes={recipes} />
            </Box>
        </>
    );
};

export default RecipeUser;
