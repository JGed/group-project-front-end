import * as React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea, Container } from "@mui/material";

const RecipeCards = () => {
  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: 100, marginTop: 10
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://next.material-ui.com/static/images/cards/paella.jpg"
            alt="Shrimp and Chorizo Paella"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shrimp and Chorizo Paella
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default RecipeCards;
