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
  Snackbar,
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
        <h2>New Recipe</h2>
        <TextField
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => setName(e.target.value)}
          variant="filled"
          label="Enter name of recipe"
          color="info"
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
          sx={{ m: 1 }}
          onChange={(e) => setDirections(e.target.value)}
          variant="filled"
          label="Enter directions"
          value={directions}
          multiline
          rows={10}
          required
          color="info"
        ></TextField>
        <TextField
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => setCookTime(e.target.value)}
          label="Cook Time"
          id="Cook Time"
          inputprops={{
            endAdornment: <InputAdornment position="end">Mins</InputAdornment>,
          }}
          color="info"
        />
        <TextField
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => setServings(e.target.value)}
          label="Serving Size"
          id="ServingSize"
          variant="filled"
          color="info"
        />
        <FormControlLabel value="" control={<Checkbox onChange={(e) => setIsPublic(e.target.checked)} checked={isPublic} color="info"/>}
          label="Make recipe public?"
          sx={{ display: "flex", alignItems: "flex-center", m: 1 }}
          defaultChecked
          inputprops={{ "aria-label": "secondary checkbox" }}          
        />
        <ImageUpload/>
        <br />
        <div>
          <Button
            sx={{ mt: 4 }}
            fullWidth
            id="modal-description"
            color="secondary"
            variant="contained"
            type="submit"
            onClick={handleCreateRecipeClick}
          >
            Post My Recipe
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default RecipeCreate;
