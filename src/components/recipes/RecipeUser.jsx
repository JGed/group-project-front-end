import { useEffect, useState } from 'react';
import {
    Typography,
} from '@material-ui/core';
import fetchPublicRecipesByUsername from '../../requests/fetchPublicRecipesByUsername';
import { useParams } from 'react-router-dom';
import MainContentContainer from '../common/MainContentContainer';
import RecipeCardArea from '../common/RecipeCardArea'
import RecipeCard from '../common/RecipeCard'
import RecipCardContainer from '../common/RecipeCardContainer'
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
            <RecipeCardArea>
                {recipes.map(recipe => (
                    <RecipCardContainer key={recipe.id}>
                        <RecipeCard recipe={recipe} />
                    </RecipCardContainer>
                ))}
            </RecipeCardArea>
        </MainContentContainer>
    );
};

export default RecipeUser;
