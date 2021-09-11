import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  Grid,
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { useSession } from "../../context/sessionContext";
import fetchMyRecipes from "../../requests/fetchMyRecipes";
import { Link, useHistory } from 'react-router-dom';

const NavBar = () => {
  const { setSessionToken } = useSession();

  const history = useHistory();
  const handleLogout = (e) => {
    setSessionToken(undefined);
    history.push('/');
  };

  return (
    <Container maxWidth="false">
      <Toolbar
        sx={{
          backgroundColor: "secondary.main",
          width: "100%",
          minHeight: 100,
        }}
      >
        <Grid container spacing={2} maxWidth="xl" >
          <Grid item xs={6}>
            <Button variant="text" color="primary" sx={{cursor: 'default'}} disableRipple>
              <Link className='router-button' to='/category/breakfast'>Breakfast</Link>
            </Button>
            <Button variant="text" color="primary" sx={{cursor: 'default'}} disableRipple>
              <Link className='router-button' to='/category/lunch'>Lunch</Link>
            </Button>
            <Button variant="text" color="primary"  sx={{cursor: 'default'}} disableRipple>
              <Link className='router-button' to='/category/dinner'>Dinner</Link>
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Button
              color="secondary"
              variant="contained"
              sx={{border: 2, borderColor: '#fff'}}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  );
};

export default NavBar;
