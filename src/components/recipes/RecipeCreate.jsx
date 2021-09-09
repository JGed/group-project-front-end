import React, { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  FormControl,
  Checkbox,
  green,
  Container,
  InputAdornment,
  FormControlLabel,
} from "@material-ui/core";

const RecipeCreate = (props) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [directions, setDirections] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isPublic, setIsPublic] = useState("");
  const [checked, setChecked] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/recipe", {
      method: "post",
      body: JSON.stringify({
        category: category,
        name: name,
        directions: directions,
        cookTime: cookTime,
        servings: servings,
        isPublic: isPublic,
        photoURL: photoURL,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setName("");
        setDirections("");
        setCookTime("");
        setServings("");
        setPhotoURL("");
        setIsPublic("");
        setCategory("");
        props.fetchWorkouts();
      });
  };

  const foodCategories = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
  ];

  return (
    <div>
      <Modal>
        <h2>New Recipe</h2>
        <form novalidate autoComplete="off">
          <TextField
            select
            label="Category"
            value={foodCategories}
            SelectProps={{
              native: true,
            }}
            helperText="Please select your recipe category"
            variant="outlined"
          >
            {foodCategories.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            onChange={(e) => setName(e.target.value)}
            variant="filled"
            label="Enter name of recipe"
            required
          ></TextField>
          <TextField
            onChange={(e) => setDirections(e.target.value)}
            variant="filled"
            label="Enter directions"
            multiline
            rows={10}
            required
          ></TextField>
          <TextField
            onChange={(e) => setCookTime(e.target.value)}
            label="Cook Time"
            id="Cook Time"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Min</InputAdornment>
              ),
            }}
          />
          <TextField
            onChange={(e) => setServings(e.target.value)}
            label="Serving Size"
            id="ServingSize"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">1</InputAdornment>
              ),
            }}
            variant="filled"
          />
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            label="Make Recipe Public?"
          />
          <div>
            //{" "}
            <Button variant="contained" fullWidth type="submit">
              Create Recipe
            </Button>
            //{" "}
            <Button
              variant="contained"
              fullWidth
              type="button"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </form>
      </Modal>
      <Button
        type="button"
        color="primary"
        variant="contained"
        onClick={handleOpen}
      >
        Add a recipe
      </Button>
    </div>
  );
};
export default RecipeCreate;
