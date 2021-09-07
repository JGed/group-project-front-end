<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import HotRecipes from "./HotRecipes";
import Header from './Header';

const HomeIndex = (props) => {
  return (
    <div>
      <Header token={props.token}/>  
      <HeroSection />
      <HotRecipes />
    </div>
  );
};

=======
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
>>>>>>> c3f8e4c32444f533137e0778dfc93aa1e67d16f0
export default HomeIndex;
