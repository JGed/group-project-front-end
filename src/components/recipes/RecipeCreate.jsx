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
  IconButton,
  Grid,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useSession } from "../../context/sessionContext";
import createMyRecipe from "../../requests/createMyRecipe";
import ImageUpload from "./ImageUpload";

const RecipeCreate = (props) => {
  const [category, setCategory] = React.useState("");
  const [name, setName] = useState("");
  const [directions, setDirections] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const { sessionToken } = useSession();
  const foodCategories = [
    { value: "breakfast", label: "Breakfast" },
    { value: "lunch", label: "Lunch" },
    { value: "dinner", label: "Dinner" },
    { value: "dessert", label: "Dessert" },
  ];

  const handleClose = () => {
    props.setOpen(false);
  };
  const handleChange = e => {
    setCategory(e.target.value);
  }
  const handleCreateRecipeClick = async (e) => {
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
      if (status === 200) {
        handleClose();
      }

      else if (status === 500) {
        e.preventDefault();
      }
    } catch (error) {
      e.preventDefault();
    }
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
          borderRadius: 5,
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton
          aria-label="close"
          type='button'
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

        <h2>New Recipe</h2>

        <TextField
          sx={{ my: 1, mr: 2, width: "25ch" }}
          onChange={(e) => setName(e.target.value)}
          label="Enter name of recipe"
          color="info"
          required
          value={name}
          variant="filled"
        ></TextField>
        <TextField
          sx={{ my: 1, width: "25ch" }}
          select
          label="Select"
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
          onChange={(e) => setDirections(e.target.value)}
          label="Enter directions"
          value={directions}
          multiline
          rows={10}
          required
          color="info"
          variant="filled"
        ></TextField>
        <TextField
          sx={{ my: 1, mr: 2, width: "25ch" }}
          onChange={(e) => setCookTime(e.target.value)}
          label="Cook Time"
          id="Cook Time"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">Mins</InputAdornment>
            ),
          }}
          color="info"
          variant="filled"
        />
        <TextField
          sx={{ my: 1, width: "25ch" }}
          onChange={(e) => setServings(e.target.value)}
          label="Serving Size"
          id="ServingSize"
          color="info"
          variant="filled"
        />
        <FormControlLabel
          value=""
          control={
            <Checkbox
              onChange={(e) => setIsPublic(e.target.checked)}
              checked={isPublic}
              color="secondary"
            />
          }
          label="Make recipe public?"
          sx={{ display: "flex", alignItems: "flex-center", my: 1 }}
          defaultChecked
          inputprops={{ "aria-label": "secondary checkbox" }}
        />
        <ImageUpload setPhotoURL={setPhotoURL} />
        <br />
        <div>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <Button                
                fullWidth
                id="modal-description"
                color="secondary"
                variant="contained"
                onClick={handleCreateRecipeClick}
              >
                Post My Recipe
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button                
                fullWidth
                id="modal-description"
                color="secondary"
                variant="outlined"
                type='button'
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Modal>
  );
};

export default RecipeCreate;
