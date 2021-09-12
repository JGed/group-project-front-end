import React, { useEffect, useState } from 'react';
import NavBar from './recipes/NavBar';
import { Box, Button, Typography } from '@material-ui/core';
import fetchMyRecipes from '../requests/fetchMyRecipes';
import deleteMyRecipe from '../requests/deleteMyRecipe';
import { useSession } from '../context/sessionContext';
const Profile = () => {
    const [recipes, setRecipes] = useState([])
    const { sessionToken } = useSession();
    const handleDeleteClick = recipe => async e => {
        try {
            const { status, json } = await deleteMyRecipe(recipe, sessionToken);
            if(status === 200) {
                setRecipes(recipes.filter(el => el.id !== recipe.id))
            }
            else {
                console.log('status: ', status);
                console.log('json: ', json);
            }
        }
        catch(err) {

        }
    }
    useEffect(() => {
        (async () => {
            try {
                const { status, json } = await fetchMyRecipes(sessionToken);
                console.log(json);
                console.log(status);
                if(status === 200) {
                    setRecipes(json);
                }
            }
            catch(err) {

            }

        })()
    }, [sessionToken, recipes])
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
                {recipes.map(recipe => (
                    <Box key={recipe.id} sx={{m: 2, border: 1, height: '200px', width: '400px', overflow: 'hidden'}}>
                        <Box sx={{textAlign: 'center', py: 2, height: '100%'}}>
                            <Typography variant='h2'>
                                {recipe.name}
                            </Typography>
                            <Typography>
                                Created On: {recipe.createdAt.split('T')[0]}
                            </Typography>
                            <br />
                            <Button variant='contained' color='tertiary' sx={{color: '#fff'}}>Edit Recipe</Button>
                            <Button variant='contained' color='secondary' onClick={handleDeleteClick(recipe)}>Delete Recipe</Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default Profile;
