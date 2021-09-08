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
};
export default RecipeIndex;
