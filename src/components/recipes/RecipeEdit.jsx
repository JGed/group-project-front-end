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
import updateMyRecipe from "../../requests/updateMyRecipe";

const UpdateRecipe = (props) => {
  const [editCategory, setEditCategory] = React.useState(props.recipe.category);
  const [editName, setEditName] = useState(props.recipe.name);
  const [editDirections, setEditDirections] = useState(props.recipe.directions);
  const [editCookTime, setEditCookTime] = useState(props.recipe.cookTime);
  const [editServings, setEditServings] = useState(props.recipe.servings);
  const [editPhotoURL, setEditPhotoURL] = useState(props.recipe.photoURL);
  const [editIsPublic, setEditIsPublic] = useState(props.recipe.isPublic);
  const [editChecked, setEditChecked] = React.useState(props.checked);
  const [open, setOpen] = React.useState(false);
  const { sessionToken } = useSession();
  const handleChange = (event) => {
    setEditCategory(event.target.value);
  };
  const foodCategories = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
  ];
  const handleOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleUpdateRecipe = async (e) => {
    e.preventDefault();
    try {
      const { status, json } = await updateMyRecipe(
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
    } catch (error) {}
  };
  return (
    <Modal
      open={props.open}
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
          onSubmit={handleUpdateRecipe}
          sx={{ display: "flex", flexWrap: "wrap" }}
        ></Box>
        <h2>New Recipe</h2>
        <TextField
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => setEditName(e.target.value)}
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
          onChange={(e) => setEditDirections(e.target.value)}
          variant="filled"
          label="Enter directions"
          multiline
          rows={10}
          required
        ></TextField>
        <TextField
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => setEditCookTime(e.target.value)}
          label="Cook Time"
          id="Cook Time"
          InputProps={{
            endAdornment: <InputAdornment position="end">Mins</InputAdornment>,
          }}
        />
        <TextField
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => setEditServings(e.target.value)}
          label="Serving Size"
          id="ServingSize"
          variant="filled"
        />
        <FormControlLabel
          value=""
          control={
            <Checkbox
              onChange={(e) => setEditIsPublic(e.target.checked)}
              checked={isPublic}
            />
          }
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
            onClick={handleUpdateRecipe}
          >
            Update Recipe
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
  );
};

export default RecipeEdit;
