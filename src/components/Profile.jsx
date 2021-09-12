import React, { useEffect, useState } from 'react';
import NavBar from './recipes/NavBar';
import { Box, Grid, Typography } from '@material-ui/core';
import fetchMyRecipes from '../requests/fetchMyRecipes';
import { useSession } from '../context/sessionContext';
const Profile = () => {
    const [recipes, setRecipes] = useState([])
    const { sessionToken } = useSession();
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
            <Grid
                container
                sx={{
                    minHeight: '90vh',
                    backgroundColor: 'neutral.light',
                    p: 5
                }}
                spacing={2}
            >
                {recipes.map(recipe => (
                    <Grid item sx={{textAlign: 'center'}} key={recipe.id} xs={12} md={6} lg={3}>
                        <Box sx={{border: 1, height: '100%'}}>
                            <Typography variant='h2'>
                                {recipe.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Profile;
