import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Container,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const RecipeCards = (props) => {
  return (
    <Container maxWidth="false" sx={{ mt: 10 }}>
      <Grid container spacing={4}>
        {props.recipes?.map((recipe) => {
          return (
            <Grid key={recipe.id} item xs={12} lg={3} sm={6} sx={{ mb: 4 }}>
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

export default RecipeCards;
