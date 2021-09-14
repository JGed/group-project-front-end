import React from "react";
import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const HotRecipes = (props) => {
  let recipes = props.recipes;
  recipes.sort((a, b) => {
    return b.views - a.views;
  });
  recipes = recipes.slice(0, 4);
  return (    
      <Container maxWidth="false" sx={{ mt: 5 }}>
        <Box>
          <Typography variant="h2">Top Recipes of the Week</Typography>
        </Box>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          {recipes.map((recipe) => {
            return (
              <Grid item xs={12} lg={3} sm={6} sx={{ mb: 10 }}>
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
      </Container>
  );
};

export default HotRecipes;
