import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@material-ui/core";
import bgImage from "../../assets/images/hero_background3.jpg";

const HeroSection = (props) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: 500,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 20%",
      }}
    >
      <Box
        sx={{
          color: "white",
          fontFamily: "'Fredoka One', cursive;",
          fontSize: 70,
        }}
      >
        ClickNCook
      </Box>
      <Typography variant="h3">Yummm.....what's clicking?</Typography>
    </Container>
  );
};

export default HeroSection;
