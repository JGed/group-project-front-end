import { useState, useEffect } from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core";
import recipePic1 from "../../assets/images/pizza.jpg";
import recipePic2 from "../../assets/images/tacos.jpg";
import recipePic3 from "../../assets/images/hamburgers.jpg";
import recipePic4 from "../../assets/images/spaghetti.jpg";

const HotRecipesImage = styled(Box)(({ theme }) => ({
  height: 200,
  backgroundColor: theme.palette.neutral.main,
  backgroundSize: "cover",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
}));

const HotRecipesTitle = styled(Box)(({ theme }) => ({
  minHeight: 60,
  backgroundColor: theme.palette.tertiary.main,
  textAlign: "center",
  paddingTop: 20,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
}));

const HotRecipes = (props) => {
  
  return (
    <div>
      <Container
        maxWidth="false"
        sx={{
          minHeight: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <Box>
          <Typography variant="h2">Top Recipes of the Week</Typography>
        </Box>
        <Grid container spacing={2} maxWidth="xl" alignItems="center">
          <Grid item xs={12} lg={3} sm={6}>
            <HotRecipesImage
              sx={{ backgroundImage: `url(${recipePic1})` }}
            ></HotRecipesImage>
            <HotRecipesTitle>
              <Typography variant="h3">Pizza</Typography>
            </HotRecipesTitle>
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <HotRecipesImage
              sx={{ backgroundImage: `url(${recipePic2})` }}
            ></HotRecipesImage>
            <HotRecipesTitle>
              <Typography variant="h3">Tacos</Typography>{" "}
            </HotRecipesTitle>
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <HotRecipesImage
              sx={{ backgroundImage: `url(${recipePic3})` }}
            ></HotRecipesImage>
            <HotRecipesTitle>
              <Typography variant="h3">Burgers</Typography>{" "}
            </HotRecipesTitle>
          </Grid>
          <Grid item xs={12} lg={3} sm={6}>
            <HotRecipesImage
              sx={{ backgroundImage: `url(${recipePic4})` }}
            ></HotRecipesImage>
            <HotRecipesTitle>
              <Typography variant="h3">Spaghetti</Typography>{" "}
            </HotRecipesTitle>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HotRecipes;
