import React, { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  Checkbox,
  InputAdornment,
  Box,
  FormControlLabel,
  MenuItem,
} from "@material-ui/core";
import { useSession } from "../../context/sessionContext";
import createMyRecipe from "../../requests/createMyRecipe";

const RecipeCreate = (props) => {
  const [category, setCategory] = React.useState("");
  const [name, setName] = useState("");
  const [directions, setDirections] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isPublic, setIsPublic] = useState("");
  const [checked, setChecked] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const { sessionToken } = useSession();
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const foodCategories = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
  ];
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleCreateRecipeClick = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:3000/recipe", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       category: category,
  //       name: name,
  //       directions: directions,
  //       cookTime: cookTime,
  //       servings: servings,
  //       isPublic: isPublic,
  //       photoURL: photoURL,
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: sessionToken,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((logData) => {
  //       console.log(logData);
  //       setName("");
  //       setDirections("");
  //       setCookTime("");
  //       setServings("");
  //       setPhotoURL("");
  //       setIsPublic("");
  //       setCategory("");
  //     })
  //     .catch((error) => console.log(error));
  // };
  const handleCreateRecipeClick = async (e) => {
    e.preventDefault();
    try {
      const { status, json } = await createMyRecipe(
        {
          category: category,
          name: name,
          directions: directions,
          cookTime: cookTime,
          servings: servings,
          isPublic: isPublic,
          photoURL: photoURL,
        },
        sessionToken
      );
      console.log(status);
      console.log(json);
      // setMessage(json.message);
    } catch (error) {
      // setMessage(
      //   "Recipe cannot be created at this time.  Please try again later."
      // );
    }
  };
  return (
    <div>
      <Button
        type="button"
        color="primary"
        variant="contained"
        onClick={handleOpen}
      >
        Add a recipe
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800",
            height: "800",
            maxWidth: "100%",
            maxHeight: "100%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            component="form"
            onSubmit={handleCreateRecipeClick}
            sx={{ display: "flex", flexWrap: "wrap" }}
          ></Box>
          <h2>New Recipe</h2>
          <TextField
            sx={{ m: 1, width: "25ch" }}
            onChange={(e) => setName(e.target.value)}
            variant="filled"
            label="Enter name of recipe"
            required
          ></TextField>
          <TextField
            sx={{ m: 1, width: "25ch" }}
            select
            label="Select"
            value={category}
            onChange={handleChange}
            helperText="Please select your category"
            variant="outlined"
          >
            {foodCategories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            sx={{ m: 1 }}
            onChange={(e) => setDirections(e.target.value)}
            variant="filled"
            label="Enter directions"
            multiline
            rows={10}
            required
          ></TextField>
          <TextField
            sx={{ m: 1, width: "25ch" }}
            onChange={(e) => setCookTime(e.target.value)}
            label="Cook Time"
            id="Cook Time"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Mins</InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 1, width: "25ch" }}
            onChange={(e) => setServings(e.target.value)}
            label="Serving Size"
            id="ServingSize"
            variant="filled"
          />
          <FormControlLabel
            value="TRUE"
            control={<Checkbox />}
            label="Make recipe public?"
            labelPlacement="bottom"
            sx={{ display: "flex", alignItems: "flex-center" }}
            defaultChecked
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <br />
          <div>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              onClick={handleCreateRecipeClick}
            >
              Create Recipe
            </Button>

            <Button
              variant="contained"
              fullWidth
              type="button"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default RecipeCreate;
