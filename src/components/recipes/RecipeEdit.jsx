import React, { useState, useEffect } from "react";
import {
  Modal,
  TextField,
  Button,
  Checkbox,
  InputAdornment,
  Box,
  FormControlLabel,
  MenuItem,
  IconButton,
  Grid,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useSession } from "../../context/sessionContext";
import updateMyRecipe from "../../requests/updateMyRecipe";
import ImageUpload from './ImageUpload';

const RecipeEdit = (props) => {
  const [category, setCategory] = useState(props.recipe.category);
  const [name, setName] = useState(props.recipe.name);
  const [directions, setDirections] = useState(props.recipe.directions);
  const [cookTime, setCookTime] = useState(props.recipe.cookTime);
  const [servings, setServings] = useState(props.recipe.servings);
  const [photoURL, setPhotoURL] = useState(props.recipe.photoURL);
  const [isPublic, setIsPublic] = useState(props.recipe.isPublic);
  const { sessionToken } = useSession();
  useEffect(() => {
    setCategory(props.recipe.category);
    setName(props.recipe.name);
    setDirections(props.recipe.directions);
    setCookTime(props.recipe.cookTime);
    setServings(props.recipe.servings);
    setPhotoURL(props.recipe.photoURL);
    setIsPublic(props.recipe.isPublic);
  }, [
    props.recipe.category,
    props.recipe.name,
    props.recipe.directions,
    props.recipe.cookTime,
    props.recipe.servings,
    props.recipe.photoURL,
    props.recipe.isPublic,
  ]);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const foodCategories = [
    { value: "breakfast", label: "Breakfast" },
    { value: "lunch", label: "Lunch" },
    { value: "dinner", label: "Dinner" },
    { value: "dessert", label: "Dessert" },
  ];

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleUpdateRecipe = async (e) => {
    e.preventDefault();
    try {
      const { status } = await updateMyRecipe(
        {
          id: props.recipe.id,
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
      if (status === 200) {
        handleClose();
      }
    } catch (error) {}
  };
  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {props.open && (
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
            borderRadius: 5,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            component="form"
            sx={{ display: "flex", flexWrap: "wrap" }}
          ></Box>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "info.main",
            }}
          >
            <CloseIcon />
          </IconButton>          
            <h2>Update Recipe</h2>          
          <TextField
            sx={{ my: 1, mr: 2, width: "25ch" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="filled"
            label="Enter name of recipe"
            color="info"
            required
          ></TextField>
          <TextField
            sx={{ my: 1, width: "25ch" }}
            select
            label="Select"
            defaultValue={category}
            value={category}
            onChange={handleChange}
            helperText="Please select your category"
            variant="filled"
            color="info"
          >
            {foodCategories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            sx={{ my: 1 }}
            value={directions}
            onChange={(e) => setDirections(e.target.value)}
            variant="filled"
            label="Enter directions"
            multiline
            rows={10}
            color="info"
            required
          ></TextField>
          <TextField
            sx={{ my: 1, mr: 2, width: "25ch" }}
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            label="Cook Time"
            id="Cook Time"
            color="info"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Mins</InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ my: 1, width: "25ch" }}
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            label="Serving Size"
            id="ServingSize"
            variant="filled"
            color="info"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                checked={isPublic}
                color="secondary"
              />
            }
            label="Make recipe public?"
            sx={{ display: "flex", alignItems: "flex-center", m: 1 }}
            defaultChecked
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <ImageUpload setPhotoURL={setPhotoURL} />
          <br />
          <div>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  fullWidth
                  color="secondary"
                  type="submit"
                  onClick={handleUpdateRecipe}
                >
                  Update Recipe
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  color="secondary"
                  variant="outlined"
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </div>
        </Box>
      )}
    </Modal>
  );
};

export default RecipeEdit;
