import React, { useState } from 'react';
import { Box, Button, Grid, Modal } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { useSession } from '../../context/sessionContext';
import Login from '../auth/Login';
import Register from '../auth/Register';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Mascot from '../../assets/images/clickncook_logomark.svg';

const NavBar = () => {
    const { sessionToken, setSessionToken } = useSession();

    const history = useHistory();
    const handleLogout = (e) => {
        setSessionToken();
        history.push('/');
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState();

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => {
        setModalIsOpen(false);
        setModalComponent('');
    };
    const handleClick = (name) => (e) => {
        setModalComponent(name);
        openModal();
    };

    const renderModalComponent = (component) => {
        switch (component) {
            case 'Login':
                return (
                    <Login
                        closeModal={closeModal}
                        setModalComponent={setModalComponent}
                    />
                );
            case 'Register':
                return (
                    <Register
                        closeModal={closeModal}
                        setModalComponent={setModalComponent}
                    />
                );
            default:
                return <></>;
        }
    };
    return (
        <Box sx={{ flex: '0 1 auto' }}>
            <Toolbar
                sx={{
                    backgroundColor: 'secondary.main',
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
                                    src={Mascot}
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
                            {sessionToken ? (
                                <>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        sx={{
                                            border: 2,
                                            '&:hover': {
                                                color: 'secondary.main',
                                                backgroundColor: 'white',
                                            },
                                        }}
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Button>
                                    <IconButton>
                                        <Link to="/profile">
                                            <Avatar src="/broken-image.jpg" />
                                        </Link>
                                    </IconButton>
                                </>
                            ) : (
                                <>
                                    <Modal
                                        open={modalIsOpen}
                                        aria-labelledby="modal-title"
                                        aria-describedby="modal-description"
                                    >
                                        {
                                            <div>
                                                {renderModalComponent(
                                                    modalComponent
                                                )}
                                            </div>
                                        }
                                    </Modal>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        sx={{
                                            border: 2,
                                            '&:hover': {
                                                color: 'secondary.main',
                                                backgroundColor: 'white',
                                            },
                                        }}
                                        onClick={handleClick('Login')}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        sx={{
                                            border: 2,
                                            '&:hover': {
                                                color: 'secondary.main',
                                                backgroundColor: 'white',
                                            },
                                        }}
                                        onClick={handleClick('Register')}
                                    >
                                        Register
                                    </Button>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </Box>
    );
};

export default NavBar;
