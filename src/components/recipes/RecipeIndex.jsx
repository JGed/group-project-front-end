import React, { useState, useEffect } from "react";
import { Typography, Button, ButtonGroup, Container } from "@material-ui/core";
import NavBar from "./NavBar";
import RecipeCards from "./RecipeCards";
import RecipeCreate from "./RecipeCreate";

const RecipeIndex = (props) => {
  return (
    <div>
      <NavBar />
      <Container className="homeMain">
        <Typography variant="h2" color="textPrimary" sx={{ mt: 5 }}>
          Good Morning! What are we cooking today?{" "}
        </Typography>
        <RecipeCreate />
        <br />
      </Container>
      <RecipeCards recipe={{ id: 4 }} />
    </div>
  );
};

export default RecipeIndex;
