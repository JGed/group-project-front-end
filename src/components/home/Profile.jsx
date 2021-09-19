import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Grid,
    CardActionArea,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import fetchMyRecipes from '../../requests/fetchMyRecipes';
import deleteMyRecipe from '../../requests/deleteMyRecipe';
import { useSession } from '../../context/sessionContext';
import RecipeCardArea from '../common/RecipeCardArea';
import RecipeCardContainer from '../common/RecipeCardContainer';
import MainContentContainer from '../common/MainContentContainer';
import { Link } from 'react-router-dom';
import RecipeEdit from '../recipes/RecipeEdit';
import RecipeCreate from '../recipes/RecipeCreate';

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
    const handleAddClick = e => {
        setCreateIsOpen(true);
    }
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
        <MainContentContainer>
            <Typography
                variant="h2"
                color="secondary.dark"
                align="center"
                gutterBottom
            >
                Good Morning! What are we cooking Today?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="secondary" onClick={handleAddClick}>
                    Add A Recipe
                </Button>
                <RecipeCreate open={createIsOpen} setOpen={setCreateIsOpen} />
            </Box>
            <Typography
                variant="h3"
                color="secondary.dark"
                align="center"
                sx={{ pt: 2 }}
            >
                Your Recipes:
            </Typography>
            <RecipeCardArea>
                {recipes.map((recipe) => (
                    <RecipeCardContainer key={recipe.id}>
                        <Card sx={{ width: 350, height: 300 }}>
                            <Link className='router-card' to={`recipe/${recipe.id}`}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={recipe.photoURL}
                                        alt={recipe.name}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="h4"
                                            noWrap
                                        >
                                            {recipe.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <CardContent>
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
                                        <Typography variant="h6">
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
                                            onClick={handleDeleteClick(recipe)}
                                        >
                                            Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </RecipeCardContainer>
                ))}
            </RecipeCardArea>
            {recipeToEdit && <RecipeEdit open={editIsOpen} setOpen={setEditIsOpen} recipe={recipeToEdit} />}
        </MainContentContainer>
    );
};

export default Profile;
