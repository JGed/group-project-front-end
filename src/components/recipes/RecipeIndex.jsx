import {
    Typography,
    Button,
    Container,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSession } from '../../context/sessionContext';
import fetchPublicRecipes from '../../requests/fetchPublicRecipes';
import MainContentContainer from '../common/MainContentContainer';
import RecipeCards from './RecipeCards';

const RecipeIndex = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const { sessionToken } = useSession();

    useEffect(() => {
        (async () => {
            try {
                const { status, json } = await fetchPublicRecipes(sessionToken);
                console.log(json);
                if (status === 200) {
                    setRecipes(json);
                    setMessage('');
                    setError(false);
                }
                if (status === 403) {
                    setMessage(json.message);
                    setError(true);
                }
                if (status === 404) {
                    setMessage(json.message);
                    setError(true);
                }
            } catch (err) {
                setMessage(
                    'Uh-oh something on our end went wrong. Try refreshing to view this page'
                );
                setError(true);
                console.log(err);
            }
        })();
    }, [sessionToken]);

    return (
        <>
        <MainContentContainer>
            <Container className="homeMain">
                <Typography variant="h2" color="textPrimary" sx={{ mt: 5 }}>
                    Good Morning! What are we cooking today?{' '}
                </Typography>
                <Button type="submit" color="secondary" variant="contained">
                    Add a recipe
                </Button>
            </Container>
            <RecipeCards recipes={recipes} />
        </MainContentContainer>
        </>
    );
};

export default RecipeIndex;
