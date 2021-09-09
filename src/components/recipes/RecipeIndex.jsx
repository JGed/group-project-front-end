import { Button, Typography } from '@material-ui/core';
import React, { useState, useEffect } from "react";
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
};

export default RecipeIndex;
