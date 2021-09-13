import { Box, Typography, ButtonGroup, Button, Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSession } from "../../context/sessionContext";
import fetchPublicRecipes from "../../requests/fetchPublicRecipes";

import NavBar from "./NavBar";
import RecipeCards from "./RecipeCards";
import RecipeCreate from "./RecipeCreate";

const RecipeIndex = (props) => {
<<<<<<< HEAD
  return (
    <div>
      <NavBar />
=======
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const { sessionToken } = useSession();

  useEffect(() => {
    (async () => {
      try {
        const { status, json } = await fetchPublicRecipes(sessionToken);
        console.log(json)
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

    <Box sx={{minHeight: '90vh'}}>
      <NavBar />      


>>>>>>> bbb195f11e911a85c36972ee0dd00081305b04a8
      <Container className="homeMain">
        <Typography variant="h2" color="textPrimary" sx={{ mt: 5 }}>
          Good Morning! What are we cooking today?{" "}
        </Typography>
<<<<<<< HEAD
        <RecipeCreate />
        <br />
      </Container>
      <RecipeCards recipe={{ id: 4 }} />
    </div>
=======
        <Button type="submit" color="secondary" variant="contained">
          Add a recipe
        </Button>
      </Container>
      <RecipeCards recipes={recipes} />
    </Box>

  
>>>>>>> bbb195f11e911a85c36972ee0dd00081305b04a8
  );
};

export default RecipeIndex;
