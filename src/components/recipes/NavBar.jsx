import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Grid, Modal } from "@material-ui/core";
import fetchMyRecipes from "../../requests/fetchMyRecipes";

const Appbar = () => {


return (
<Toolbar>
<Button variant="contained" color="secondary" onClick={fetchMyRecipes}>
  Breakfast
</Button>
<Button variant="contained" color="secondary">
  Lunch
</Button>
<Button variant="contained" color="secondary">
  Dinner
</Button>
{/* <Button variant="contained" color="secondary" href="#contained-buttons">
  Dessert
</Button> */}
</Toolbar>
)
}

export default Appbar;