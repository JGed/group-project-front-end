import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { useSession } from '../../context/sessionContext';

import { Link, useHistory } from 'react-router-dom';

import Mascot from '../../assets/images/clickncook_mascot.png';

const NavBar = () => {
    const { setSessionToken } = useSession();

    const history = useHistory();
    const handleLogout = (e) => {
        setSessionToken(undefined);
        history.push('/');
    };

    return (
        <Container maxWidth="false" disableGutters>
            <Toolbar
                sx={{
                    backgroundColor: 'secondary.main',
                    width: '100%',
                    minHeight: 100,
                }}
            >
                <Grid container spacing={2}>
                    <Grid item container xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Link to="/">
                                <Box
                                    component="img"
                                    sx={{
                                        width: 50,
                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                    }}
                                    alt="Clickin the Chicken"
                                    src={`${Mascot}`}
                                />
                            </Link>
                        </Box>
                        <Button
                            variant="text"
                            color="primary"
                            sx={{ cursor: 'default' }}
                            disableRipple
                        >
                            <Link
                                className="router-button"
                                to="/category/breakfast"
                            >
                                Breakfast
                            </Link>
                        </Button>
                        <Button
                            variant="text"
                            color="primary"
                            sx={{ cursor: 'default' }}
                            disableRipple
                        >
                            <Link
                                className="router-button"
                                to="/category/lunch"
                            >
                                Lunch
                            </Link>
                        </Button>
                        <Button
                            variant="text"
                            color="primary"
                            sx={{ cursor: 'default' }}
                            disableRipple
                        >
                            <Link
                                className="router-button"
                                to="/category/dinner"
                            >
                                Dinner
                            </Link>
                        </Button>
                        <Button
                            variant="text"
                            color="primary"
                            sx={{ cursor: 'default' }}
                            disableRipple
                        >
                            <Link
                                className="router-button"
                                to="/category/dessert"
                            >
                                Dessert
                            </Link>
                        </Button>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={6}
                        sx={{
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <Grid item>
                            <Button
                                color="secondary"
                                variant="contained"
                                sx={{ border: 2 }}
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </Container>
    );
};

export default NavBar;
