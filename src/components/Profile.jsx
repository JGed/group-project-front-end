import React, { useEffect, useState } from 'react';
import NavBar from './recipes/NavBar';
import {
    Box,
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Grid,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import fetchMyRecipes from '../requests/fetchMyRecipes';
import deleteMyRecipe from '../requests/deleteMyRecipe';
import { useSession } from '../context/sessionContext';
import RecipeCreate from '../components/recipes/RecipeCreate';
import RecipeEdit from '../components/recipes/RecipeEdit';

const Profile = () => {
    const [recipes, setRecipes] = useState([]);
    const { sessionToken } = useSession();
    const [createIsOpen, setCreateIsOpen] = useState(false);
    const [editIsOpen, setEditIsOpen] = useState(false);
    const [recipeToEdit, setRecipeToEdit] = useState();

    const handleDeleteClick = (recipe) => async (e) => {
        try {
            const { status } = await deleteMyRecipe(recipe, sessionToken);
            if (status === 200) {
                setRecipes(recipes.filter((el) => el.id !== recipe.id));
            } else {
            }
        } catch (err) {}
    };
    const handleEditClick = recipe => e => {
        console.log(recipe)
        setRecipeToEdit({ ...recipe })
        setEditIsOpen(true);
    }
    useEffect(() => {
        (async () => {
            try {
                const { status, json } = await fetchMyRecipes(sessionToken);
                if (status === 200) {
                    setRecipes(json);
                }
            } catch (err) {}
        })();
    }, [sessionToken]);
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
                <Typography variant='h2' color='secondary.dark' align='center' gutterBottom>
                    Good Morning!  What are we cooking Today?
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant='contained' color='secondary' onClick={() => setCreateIsOpen(true)}>Add A Recipe</Button>
                    <RecipeCreate open={createIsOpen} setOpen={setCreateIsOpen} />
                </Box>
                <Typography variant='h3' color='secondary.dark' align='center' sx={{pt: 2}}>
                    Your Recipes:
                </Typography>
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
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={recipe.photoURL}
                                    alt={recipe.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" noWrap>
                                        {recipe.name}
                                    </Typography>
                                    <Grid container>
                                        <Grid
                                            item
                                            xs={3}
                                            container
                                            sx={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <VisibilityIcon />
                                            <Typography variant='h6'>
                                               &nbsp;{recipe.views}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            xs={9}
                                            sx={{ justifyContent: 'flex-end' }}
                                        >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleEditClick(recipe)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={handleDeleteClick(
                                                    recipe
                                                )}
                                            >
                                                Delete
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {recipeToEdit && <RecipeEdit open={editIsOpen} setOpen={setEditIsOpen}  recipe={recipeToEdit} />}
            </Box>
        </>
    );
};

export default Profile;
