import React from 'react'
import NavBar from './recipes/NavBar';
import { Grid } from '@material-ui/core'
import { useParams } from 'react-router-dom';
const RecipeCategory = () => {
    const { cat } = useParams();

    return (
            
        <>
            <NavBar />
            <Grid
                container
                sx={{
                    minHeight: '90vh',
                    backgroundColor: 'neutral.light',
                }}
            >
            </Grid>
        </>
    )
}

export default RecipeCategory;