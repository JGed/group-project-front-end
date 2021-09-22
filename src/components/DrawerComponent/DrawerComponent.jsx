import React, { useState } from 'react';
import { Drawer, List, ListItemText, ListItem, ListItemIcon, IconButton, Grid, Box,Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { Link, useHistory } from 'react-router-dom';
import { useSession } from '../../context/sessionContext';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Mascot from '../../assets/images/clickncook_logomark.svg';
import globalTheme from '../../assets/styles/globalStyles';

const DrawerComponent = () => {
    const { sessionToken, setSessionToken } = useSession();

    const history = useHistory();
    const handleLogout = (e) => {
        setSessionToken();
        history.push('/');
    };
    
    const useStyles = makeStyles(theme => ({
        menuIconContainer: {
            marginLeft: 'auto',
        },
    }));
    const [openDrawer, setOpenDrawer] = useState(true);
const classes = useStyles()

    return (
        <>
        <Drawer 
        anchor='left'
        onClose ={() => setOpenDrawer(false)} 
        open={openDrawer}>
            <Grid>
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
            </Grid>
            <List>
                <ListItem divider button>
                    <ListItemIcon><Link
                                to="/category/breakfast"
                            >
                    <ListItemText>Breakfast</ListItemText>
                    
                    </Link></ListItemIcon>
                </ListItem>

                <ListItem divider button>
                    <ListItemIcon><Link
                                to="/category/lunch"
                            >
                    <ListItemText>Lunch</ListItemText>
                    </Link>
                    </ListItemIcon>
                </ListItem>

                <ListItem divider button>
                    <ListItemIcon><Link
                                to="/category/dinner"
                            >
                    <ListItemText>Dinner</ListItemText>
                    </Link>
                    </ListItemIcon>
                </ListItem>

                <ListItem divider button>
                    <ListItemIcon><Link
                                to="/category/dessert"
                            >
                    <ListItemText>Dessert</ListItemText>
                    </Link>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button onClick={handleLogout}> 
                
                    <ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
        <IconButton className={classes.menuIconContainer} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
        </>
    )
}

export default DrawerComponent;