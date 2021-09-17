import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, Box, Typography } from "@material-ui/core";

import auImage from "../../assets/images/About_Us.jpg";
const AboutUs = () => {
  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: 500,
        backgroundImage: `url(${auImage})`,
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
      <Typography variant="h3">Our Story</Typography>

      <Container>
        <Box>
          <h1>Our Motto:</h1>
          <p>Great Food, is just a click away~</p>
          <h2>Our Mission:</h2>

          <p>
            To create a community of HomeCooks, Chefs, Foodies, Grillers and
            Microwavers to unite and create their own recipes to share with the
            world.
          </p>
          <h2>Our Goal:</h2>
          <p>
            We understand with cooking it's all about the taste. At Click-N-Cook
            we are here to help spread the love and enjoyment of cooking to all
            of our users and help bring cooks of all levels together.
          </p>
          <h2>Who we Are?</h2>
          <h3>The Design Team</h3>
          <p>A Microwaver</p>
          <p>A Griller</p>
        </Box>
      </Container>
    </Container>
  );
};
export default AboutUs;
