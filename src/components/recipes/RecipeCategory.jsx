import { useState, useEffect } from 'react';
import { Typography, Box, Select, MenuItem } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import fetchRecipesByCategory from '../../requests/fetchRecipesByCategory';
import RecipeCardArea from '../common/RecipeCardArea';
import RecipeCardContainer from '../common/RecipeCardContainer';
import RecipeCard from '../common/RecipeCard';
import MainContentContainer from '../common/MainContentContainer';
const orders = [
    {
        value: 'views',
        label: 'Views',
    },
    {
        value: 'newest',
        label: 'Newest',
    },
    {
        value: 'random',
        label: 'Random',
    },
];
const RecipeCategory = () => {
    const [recipes, setRecipes] = useState([]);
    const { cat } = useParams();
    const history = useHistory();
    const [order, setOrder] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setOrder(e.target.value);
    };
    useEffect(() => {
        history.push(`/category/${cat}${order ? `?order=${order}` : ''}`);
    }, [order, cat, history]);
    useEffect(() => {
        (async () => {
            try {
                const { status, json } = await fetchRecipesByCategory(
                    cat,
                    order
                );
                if (status === 200) {
                    setRecipes(json.recipes);
                }
            } catch (err) {
                setError(true);
            }
        })();
    }, [cat, order]);

    return (
        <>
            <MainContentContainer>
                {error ? (
                    <></>
                ) : (
                    <>
                        <Typography
                            variant="h2"
                            align="center"
                            color="secondary.dark"
                        >
                            {cat} recipes:
                        </Typography>
                        <Box
                            sx={{ ml: 'auto' }}
                        >
                            <Select
                                defaultValue="random"
                                onChange={handleChange}
                                variant="standard"
                                color="info"
                            >
                                {orders.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
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
