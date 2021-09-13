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
import MainContentContainer from './common/MainContentContainer';

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
        <MainContentContainer>
            <Typography variant="h2" color="secondary.dark" align="center">
                {username}'s recipes:
            </Typography>
            <RecipeCards recipes={recipes} />
        </MainContentContainer>
    );
};

export default RecipeUser;
