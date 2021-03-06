import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MainContentContainer from "../common/MainContentContainer";

const HotRecipes = (props) => {
  let recipes = props.recipes;
  recipes.sort((a, b) => {
    return b.views - a.views;
  });
  recipes = recipes.slice(0, 4);
  return (
    <MainContentContainer>
      <Box>
        <Typography variant="h2">Top Recipes of the Week</Typography>
      </Box>
      <Grid container spacing={4} sx={{ mt: 0 }}>
        {recipes.map((recipe) => {
          return (
            <Grid key={recipe.id} item xs={12} sm={6} md={3} sx={{ mb: { md: 10 } }}>
              <Card>
                <CardActionArea>
                  <Link to={`/recipe/${recipe.id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={recipe.photoURL}
                      alt={recipe.name}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        noWrap
                      >
                        {recipe.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {recipe.category}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </MainContentContainer>
  );
};

export default HotRecipes;
