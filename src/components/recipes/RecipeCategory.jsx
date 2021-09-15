import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useParams, Redirect } from 'react-router-dom';
import fetchRecipesByCategory from '../../requests/fetchRecipesByCategory';
import RecipeCardArea from '../common/RecipeCardArea';
import RecipeCardContainer from '../common/RecipeCardContainer';
import RecipeCard from '../common/RecipeCard';
import MainContentContainer from '../common/MainContentContainer';

const RecipeCategory = () => {
    const [recipes, setRecipes] = useState([]);
    const { cat } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const { status, json } = await fetchRecipesByCategory(cat);
                if (status === 200) {
                    setRecipes(json.recipes);
                }
            } catch (err) {
                setError(true);
            }
        })();
    }, [cat]);

    return (
        <>
            <MainContentContainer>
                {error ? (
                    <Redirect to="/" />
                ) : (
                    <>
                        <Typography
                            variant="h2"
                            align="center"
                            color="secondary.dark"
                        >
                            {cat} recipes:
                        </Typography>
                        <RecipeCardArea>
                            {recipes.map((recipe) => (
                                <RecipeCardContainer key={recipe.id}>
                                    <RecipeCard recipe={recipe} />
                                </RecipeCardContainer>
                            ))}
                        </RecipeCardArea>
                    </>
                )}
            </MainContentContainer>
        </>
    );
};

export default RecipeCategory;
