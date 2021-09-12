import React, { useState, useEffect } from 'react'
import NavBar from './recipes/NavBar';
import { Box } from '@material-ui/core'
import { useParams } from 'react-router-dom';
import fetchRecipesByCategory from '../requests/fetchRecipesByCategory';
import RecipeCards from './recipes/RecipeCards';
const RecipeCategory = () => {
    const [recipes, setRecipes] = useState([]);
    const { cat } = useParams();

    useEffect(() => {
        (async () => {
           const { status, json } = await fetchRecipesByCategory(cat); 
           if(status === 200){
               setRecipes(json.recipes);
               console.log('json: ', json);
           }
        })();
    }, [cat])

    
    return (
            
        <>
            <NavBar />
            <Box
                container
                sx={{
                    minHeight: '90vh',
                    backgroundColor: 'neutral.light',
                    p: 5,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'space-between',
                    justifyContent: 'center'
                }}
                spacing={2}
            >
                {recipes.map(recipe => <RecipeCards recipe={recipe} />)}
            </Box>
        </>
    )
}

export default RecipeCategory;