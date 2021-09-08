<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Typography, Button, ButtonGroup, Container } from "@material-ui/core";
import RecipeCards from './RecipeCards';

const RecipeIndex = () => {
  return (
    <div id="homeParent">
      <div class="homeNav">
        <ButtonGroup color="secondary">
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </ButtonGroup>
      </div>
      <Container class="homeMain">
        <Typography variant="h2" color="textPrimary">
          Good Morning! What are we cooking today?{" "}
        </Typography>
        <br />
        <Button type="submit" color="primary" variant="outlined">
          Add a recipe
        </Button>
      </Container>
      <RecipeCards />   
    </div>
  );
=======
import { Button, Typography } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import { useSession } from '../../context/sessionContext';

const RecipeIndex = (props) => {
  const { setSessionToken } = useSession();

  const handleLogout = e => {
    setSessionToken(undefined);
  }
  return <div>
    <Typography variant='h1'>
      This is the RecipeIndex
    </Typography>
    <Button color='secondary' variant='contained' onClick={handleLogout} >Logout</Button>
    </div>;
>>>>>>> f091995a8bcb0956436449eaf643fedc359cdd98
};
export default RecipeIndex;
