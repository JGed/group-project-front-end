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
                <Grid container spacing={2} sx={{ pt: 4, px: 6 }}>
                    {recipes.map((recipe) => (
                        <Grid
                            item
                            container
                            key={recipe.id}
                            xs={12}
                            md={6}
                            lg={3}
                            sx={{ mb: 4, justifyContent: 'center' }}
                        >
                            <Card sx={{ width: 350, height: 300 }}>
                                <CardActionArea>
                                    <Link
                                        className="router-card"
                                        to={`/recipe/${recipe.id}`}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={recipe.photoURL}
                                            alt={recipe.name}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                noWrap
                                            >
                                                {recipe.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {recipe.directions}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default RecipeUser;
