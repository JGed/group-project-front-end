import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { Typography, Button, ButtonGroup, Container } from "@material-ui/core";
import NavBar from "./NavBar";
import RecipeCards from "./RecipeCards";

const RecipeIndex = (props) => {
  
  return (
    <div>
      <NavBar />      
      <Container className="homeMain">
        <Typography variant="h2" color="textPrimary" sx={{mt: 5}}>
          Good Morning! What are we cooking today?{" "}
        </Typography>        
        <Button type="submit" color="secondary" variant="contained">
          Add a recipe
        </Button>
      </Container>
      <RecipeCards />      
    </div>
  );
=======
import Navbar from "./NavBar";

import { useSession } from '../../context/sessionContext';

const RecipeIndex = (props) => {
  const { setSessionToken } = useSession();

  const handleLogout = e => {
    setSessionToken(undefined);

  }
  return <div>
    <Typography variant='h1'>
      ClickNCook
    </Typography>
    <Navbar />
    <Button color='secondary' variant='contained' onClick={handleLogout} >Logout</Button>
    </div>;
>>>>>>> 3d4ca107a7a630758925277a3c3be6328fbd5b42
};

export default RecipeIndex;
