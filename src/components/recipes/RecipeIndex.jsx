import React, { useState, useEffect } from "react";
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
};

export default RecipeIndex;
