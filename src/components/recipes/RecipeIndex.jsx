import { Typography, Button, Container, Divider } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { useSession } from "../../context/sessionContext";
import fetchPublicRecipes from "../../requests/fetchPublicRecipes";
import MainContentContainer from "../common/MainContentContainer";
import RecipeCards from "./RecipeCards";
import RecipeCreate from "./RecipeCreate";

const RecipeIndex = (props) => {
  const unmounted = useRef(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { sessionToken } = useSession();


  const greeting = () => {
    const hours = new Date().getHours();
    return hours < 12
      ? "Good morning!"
      : hours >= 12 && hours <= 18
      ? "Good afternoon!"
      : "Good evening!"
  }

  useEffect(() => {
    unmounted.current = false;
    (async () => {
      try {
        const { status, json } = await fetchPublicRecipes(sessionToken);
        if (status === 200) {
          if (unmounted.current) return;
          setRecipes(json);
          setMessage("");
          setError(false);
        }
        if (status === 403) {
          if (unmounted.current) return;
          setMessage(json.message);
          setError(true);
        }
        if (status === 404) {
          if (unmounted.current) return;
          setMessage(json.message);
          setError(true);
        }
      } catch (err) {
        if (unmounted.current) return;
        setMessage(
          "Uh-oh something on our end went wrong. Try refreshing to view this page"
        );
        setError(true);
      }
      return () => unmounted.current = true;
    })();
  }, [sessionToken]);

  return (
    <>
      <MainContentContainer>
        <Container className="homeMain" sx={{pb: 2}}>
          <Typography variant="h2" color="textPrimary" sx={{ mt: 5 }}>
            {greeting()} What are we cooking today?{" "}
          </Typography>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Add a recipe
          </Button>
          <RecipeCreate open={open} setOpen={setOpen} />
        </Container>
        <Divider flexItem />
        <RecipeCards recipes={recipes} />
      </MainContentContainer>
    </>
  );
};

export default RecipeIndex;
