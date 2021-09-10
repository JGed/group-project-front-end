import { Button, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSession } from '../../context/sessionContext';
import RecipeDetails from './RecipeDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const RecipeIndex = (props) => {
    const { setSessionToken } = useSession();

    const handleLogout = (e) => {
        setSessionToken(undefined);
    };
    return (
        <div>
            <Typography variant="h1">This is the RecipeIndex</Typography>
            <Button
                color="secondary"
                variant="contained"
                onClick={handleLogout}
            >
                Logout
            </Button>
        </div>
    );
};

export default RecipeIndex;
