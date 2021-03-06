import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItemText,
    ListItem,
    ListItemIcon,
    IconButton,
    Grid,
    Box,
    Modal,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { Link, useHistory } from 'react-router-dom';
import { useSession } from '../../context/sessionContext';
import Mascot from '../../assets/images/clickncook_logomark.svg';
import Login from '../auth/Login';
import Register from '../auth/Register';

const DrawerComponent = () => {
    const { sessionToken, setSessionToken } = useSession();

    const history = useHistory();
    const handleLogout = (e) => {
        setSessionToken();
        history.push('/');
    };

    const useStyles = makeStyles((theme) => ({
        menuIconContainer: {
            marginLeft: 'auto',
            MuiDrawer: {
                backgroundColor: '#f50505',
            },
        },
    }));
    const [openDrawer, setOpenDrawer] = useState(false);
    const closeDrawer = (e) => setOpenDrawer(false);
    const classes = useStyles();
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
        <>
            <Drawer
                anchor="left"
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <Grid>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link
                            className="router-card"
                            to="/"
                            onClick={closeDrawer}
                        >
                            <Box
                                component="img"
                                sx={{
                                    width: 100,
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                    backgroundColor: '#C20000',
                                }}
                                alt="Clickin the Chicken"
                                src={Mascot}
                            />
                        </Link>
                    </Box>
                </Grid>
                <List>
                    <ListItem divider button>
                        <ListItemIcon>
                            <Link
                                className="router-link"
                                to="/category/breakfast"
                                onClick={closeDrawer}
                            >
                                <ListItemText>Breakfast</ListItemText>
                            </Link>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button>
                        <ListItemIcon>
                            <Link
                                className="router-link"
                                to="/category/lunch"
                                onClick={closeDrawer}
                            >
                                <ListItemText>Lunch</ListItemText>
                            </Link>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button>
                        <ListItemIcon>
                            <Link
                                className="router-link"
                                to="/category/dinner"
                                onClick={closeDrawer}
                            >
                                <ListItemText>Dinner</ListItemText>
                            </Link>
                        </ListItemIcon>
                    </ListItem>

                    <ListItem divider button>
                        <ListItemIcon>
                            <Link
                                className="router-link"
                                to="/category/dessert"
                                onClick={closeDrawer}
                            >
                                <ListItemText>Dessert</ListItemText>
                            </Link>
                        </ListItemIcon>
                    </ListItem>
                    {sessionToken ? (
                        <>
                            <ListItem divider button>
                                <ListItemIcon>
                                    <Link
                                        className="router-button"
                                        to="/profile"
                                        onClick={closeDrawer}
                                    >
                                        <ListItemText
                                            sx={{ color: 'tertiary.light' }}
                                        >
                                            Profile
                                        </ListItemText>
                                    </Link>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem divider button onClick={handleLogout}>
                                <ListItemIcon>
                                    <ListItemText
                                        sx={{ color: 'secondary.dark' }}
                                    >
                                        Logout
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItem>
                        </>
                    ) : (
                        <>
                            <ListItem
                                divider
                                button
                                onClick={handleClick('Register')}
                            >
                                <ListItemText sx={{ color: 'secondary.dark' }}>
                                    Register
                                </ListItemText>
                            </ListItem>
                            <ListItem
                                divider
                                button
                                onClick={handleClick('Login')}
                            >
                                <ListItemText sx={{ color: 'secondary.dark' }}>
                                    Login
                                </ListItemText>
                            </ListItem>
                            <Modal
                                open={modalIsOpen}
                                aria-labelledby="modal-title"
                                aria-describedby="modal-description"
                            >
                                {
                                    <div>
                                        {renderModalComponent(modalComponent)}
                                    </div>
                                }
                            </Modal>
                        </>
                    )}
                </List>
            </Drawer>
            <IconButton
                className={classes.menuIconContainer}
                sx={{color: 'white'}}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon />
            </IconButton>
        </>
    );
};

export default DrawerComponent;
