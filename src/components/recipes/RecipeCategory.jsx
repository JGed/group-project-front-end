import { useState, useEffect, useRef } from 'react';
import { Typography, Box, Select, MenuItem } from '@material-ui/core';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import fetchRecipesByCategory from '../../requests/fetchRecipesByCategory';
import RecipeCardArea from '../common/RecipeCardArea';
import RecipeCardContainer from '../common/RecipeCardContainer';
import RecipeCard from '../common/RecipeCard';
import MainContentContainer from '../common/MainContentContainer';
import queryString from 'query-string';
const orders = [
    {
        value: 'views',
        label: 'views',
    },
    {
        value: 'date',
        label: 'date'
    },
    {
        value: 'random',
        label: 'random',
    },
];
const directions = [
    {
        value: 'decreasing',
        label: 'decreasing'
    },
    {
        value: 'increasing',
        label: 'increasing'
    }
]
const RecipeCategory = () => {
    const [recipes, setRecipes] = useState([]);
    const { cat } = useParams();
    const [order, setOrder] = useState('random');
    const history = useHistory();
    const [direction, setDirection] = useState('decreasing')
    const [error, setError] = useState(false);

    const handleOrderChange = (e) => {
        setOrder(e.target.value);
    };
    const handleDirectionChange = e => {
        setDirection(e.target.value);
    }
    useEffect(() => {
        (async () => {
            try {
                const { status, json } = await fetchRecipesByCategory(
                    cat,
                    `?orderby=${order}&direction=${direction}`
                );
                if (status === 200) {
                    setRecipes(json.recipes);
                }
            } catch (err) {
                setError(true);
            }
        })();
    }, [cat, order, direction]);

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
                            sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}
                        >
                            <Typography color='info'>
                                Sort:
                            </Typography> 
                            <Select
                                sx={{mx: 2}}
                                defaultValue="random"
                                onChange={handleOrderChange}
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
                            { order !== 'random' ? 
                            <Select
                                defaultValue="decreasing"
                                onChange={handleDirectionChange}
                                variant="standard"
                                color="info"
                            >
                                {directions.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                            :
                            <>
                            </>
                            }
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
