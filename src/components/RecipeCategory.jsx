import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import fetchRecipesByCategory from '../requests/fetchRecipesByCategory';
import RecipeCardArea from './common/RecipeCardArea';
import RecipeCardContainer from './common/RecipeCardContainer';
import RecipeCard from './common/RecipeCard';
import MainContentContainer from './common/MainContentContainer';

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
            <MainContentContainer>
                <Typography variant="h2" align="center" color="secondary.dark">
                    {cat} recipes:
                </Typography>
                <RecipeCardArea>
                    {recipes.map((recipe) => (
                        <RecipeCardContainer key={recipe.id}>
                            <RecipeCard recipe={recipe} />
                        </RecipeCardContainer>
                    ))}
                </RecipeCardArea>
            </MainContentContainer>
        </>
    );
};

export default RecipeCategory;
