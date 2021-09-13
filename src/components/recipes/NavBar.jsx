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

const NavBar = () => {
  const { setSessionToken } = useSession();

  const handleLogout = (e) => {
    setSessionToken(undefined);
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
        <Grid container spacing={2} maxWidth="xl" alignItems="center">
          <Grid item xs={6}>
            <Button variant="text" color="primary" onClick={fetchMyRecipes}>
              Breakfast
            </Button>
            <Button variant="text" color="primary">
              Lunch
            </Button>
            <Button variant="text" color="primary">
              Dinner
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Button
              color="secondary"
              variant="contained"
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
