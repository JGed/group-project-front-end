import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
} from "@material-ui/core";
import { styled } from "@mui/material/styles";

import auImage from "../../assets/images/About_Us.jpg";
import Laura from "../../assets/images/Laura.jpg";
import Paul from "../../assets/images/Paul.jpg";
import Krystle from "../../assets/images/Krystle.jpg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "",
});

const AboutUs = () => {
  return (
    <Container>
      <Container
        maxWidth="false"
        sx={{
          minHeight: 400,
          backgroundImage: `url(${auImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 20%",
        }}
      >
        <Box
          sx={{
            color: "Red",
            fontFamily: "'Fredoka One', cursive;",
            fontSize: 70,
          }}
        >
          ClickNCook
        </Box>
        <Typography variant="h3">Our Story</Typography>
      </Container>
      <Container>
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
          <h1>Our Motto:</h1>
          <p>Great Food is just a click away~</p>
          <h2>Our Mission:</h2>

          <p>
            To create a community of Home Cooks, Chefs, Foodies, Grillers, and
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

          <h4>The Web Design Team</h4>
          <Grid container spacing={4} wrap="nowrap">
            <Grid item xs={6} md={4}>
              <Item>
                <Img
                  src="https://cdn.notonthehighstreet.com/system/product_images/images/002/357/630/original_inky-chicken-apron.jpg"
                  alt="Josh"
                />
                <Avatar>JG</Avatar>

                <p>A Microwaver</p>
              </Item>
            </Grid>

            <Grid item xs={6} md={4}>
              <Item>
                <Img src={`${Paul}`} alt="Paul" />
                <Avatar>PR</Avatar>

                <p>A Griller</p>
              </Item>
            </Grid>

            <Grid item xs={6} md={4}>
              <Item>
                <Img src={`${Krystle}`} alt="Krystle" />

                <Avatar>KM</Avatar>
                <p>A Foodie</p>
              </Item>
            </Grid>

            <Grid item xs={6} md={4}>
              <Item>
                <Img src={`${Laura}`} alt="Laura" />
                <Avatar>LS</Avatar>
                <p>A Home Cook</p>
              </Item>
            </Grid>
          </Grid>
          <br />
        </Box>
      </Container>
    </Container>
  );
};
export default AboutUs;
