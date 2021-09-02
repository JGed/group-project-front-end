import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Register from "../auth/Register";
import Login from "../auth/Login";

const Logo = styled('div')({
    color: 'black',
    padding: 8,
    width: 100,
    height: 100,
    marginTop: 10,
    textAlign: 'center'
});

const HeroSection = (props) => {
  return (
    <Container maxWidth="false">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Logo>ClickNCook</Logo>
        </Grid>
        <Grid item xs={6}>
          <Register />
          <Login />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
