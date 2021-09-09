import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { useSession } from "../../context/sessionContext";
import RecipeCreate from "./RecipeCreate";
const RecipeIndex = (props) => {
  const { setSessionToken } = useSession();

  const handleLogout = (e) => {
    setSessionToken(undefined);
  };
  return (
    <div>
      <Typography variant="h1">This is the RecipeIndex</Typography>
      <Button type="submit" color="primary" variant="outlined">
        Add a recipe
      </Button>
      <Button color="secondary" variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default RecipeIndex;
