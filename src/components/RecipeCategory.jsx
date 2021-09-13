import React, { useState, useEffect } from 'react';
import NavBar from './recipes/NavBar';
import { Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import fetchRecipesByCategory from '../requests/fetchRecipesByCategory';
import { Link } from 'react-router-dom';
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
                    {recipes.length > 0 && recipes.map((recipe) => (
                        <Grid item container key={recipe.id} xs={12} md={6} lg={3} sx={{mb: 4, justifyContent: 'center'}}>
                            <Card sx={{ width: 350, height: 300 }}>
                <CardActionArea>
                    <Link className='router-card' to={`/recipe/${recipe.id}`}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://next.material-ui.com/static/images/cards/paella.jpg"
                            alt="Shrimp and Chorizo Paella"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Shrimp and Chorizo Paella
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish
                                and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the
                                mussels, if you like.
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

export default RecipeCategory;
