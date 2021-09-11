import React from "react";
import { Box, Typography, Button, Container } from "@material-ui/core";
import NavBar from "./NavBar";
import RecipeCards from "./RecipeCards";

const RecipeIndex = (props) =>  {
  
  return (
    <Box sx={{minHeight: '90vh'}}>
      <NavBar />      
      <Container className="homeMain">
        <Typography variant="h2" color="textPrimary" sx={{mt: 5}}>
          Good Morning! What are we cooking today?{" "}
        </Typography>        
        <Button type="submit" color="secondary" variant="contained">
          Add a recipe
        </Button>
      </Container>
      <RecipeCards recipe={{id: 4}}/>      
    </Box>
  );
};

export default RecipeIndex;
