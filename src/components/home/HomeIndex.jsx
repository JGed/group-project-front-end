import React, { useEffect, useState } from "react";
import { Typography, Button, ButtonGroup, Container } from "@material-ui/core";
import RecipeCards from "../recipes/RecipeCards";
import Footer from "../home/Footer";

const HomeIndex = () => {
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
      <Footer />
    </div>
  );
};
export default HomeIndex;
