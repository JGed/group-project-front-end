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
  const [isPublic, setIsPublic] = useState(false);
  const { sessionToken } = useSession();
  const [messageInfo, setMessageInfo] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [snackBarPosition, setSnackBarPosition] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [userErrorMessage, setUserErrorMessage] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const { setSessionToken } = useSession();
  const foodCategories = [
    { value: "breakfast", label: "Breakfast" },
    { value: "lunch", label: "Lunch" },
    { value: "dinner", label: "Dinner" },
    { value: "dessert", label: "Dessert" },
  ];

  const handleClose = () => {
    props.setOpen(false);
  };

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
      if (status === 200) {
        setSuccessMessage("Recipe Successfully Created");
        handleClose();
      }

      if (status === 500) {
        setUserErrorMessage("User Permission Error. Log back in.");
      }
    } catch (error) {
      console.log(error);
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
          value={name}
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
          value={directions}
          multiline
          rows={10}
          required
        ></TextField>
        <TextField
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => setCookTime(e.target.value)}
          label="Cook Time"
          id="Cook Time"
          inputProps={{
            endAdornment: <InputAdornment position="end">Mins</InputAdornment>,
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
          value=""
          control={
            <Checkbox
              onChange={(e) => setIsPublic(e.target.checked)}
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
            onClick={handleCreateRecipeClick}
          >
            Post My Recipe
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

export default RecipeCreate;
