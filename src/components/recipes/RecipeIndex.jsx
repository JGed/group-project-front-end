import {
  Box,
  Typography,
  ButtonGroup,
  Button,
  Container,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSession } from "../../context/sessionContext";
import fetchPublicRecipes from "../../requests/fetchPublicRecipes";

import NavBar from "./NavBar";
import RecipeCards from "./RecipeCards";
import RecipeCreate from "./RecipeCreate";

const RecipeIndex = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const { sessionToken } = useSession();
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    (async () => {
      try {
        const { status, json } = await fetchPublicRecipes(sessionToken);
        console.log(json);
        if (status === 200) {
          setRecipes(json);
          setMessage("");
          setError(false);
        }
        if (status === 403) {
          setMessage(json.message);
          setError(true);
        }
        if (status === 404) {
          setMessage(json.message);
          setError(true);
        }
      } catch (err) {
        setMessage(
          "Uh-oh something on our end went wrong. Try refreshing to view this page"
        );
        setError(true);
        console.log(err);
      }
    })();
  }, [sessionToken]);

  return (
    <Box sx={{ minHeight: "90vh" }}>
      <NavBar />

      <Container className="homeMain">
        <Typography variant="h2" color="textPrimary" sx={{ mt: 5 }}>
          Good Morning! What are we cooking today?{" "}
        </Typography>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          onClick={(e) => setOpen(true)}
        >
          Add a recipe
        </Button>
        <RecipeCreate open={open} setOpen={setOpen} />
      </Container>
      <RecipeCards recipes={recipes} />
    </Box>
  );
};

export default RecipeIndex;
