import React, { useState } from "react";
import { Modal, TextField, Button, Checkbox, green } from "material-ui/core";

const RecipeCreate = () => {
  const [name, setName] = useState("");
  const [directions, setDirections] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servingSize, setServingSize] = useState("");

  const handleSubmit = (e) => e.preventDefault();
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const foodCategories = [
    { value: "Breakfast", label: "Breakfast" },
    { value: "Lunch", label: "Lunch" },
    { value: "Dinner", label: "Dinner" },
  ];
  function CheckboxLabels() {
    const [state, setState] = React.useState({
      checkedG: true,
    });

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
      <div>
        <Modal open={open} onClose={handleClose}>
          <h2>New Recipe</h2>
          <form
            className={classes.root}
            novalidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              select
              label="Category"
              value={foodCategories}
              onChange={handleChange}
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
              required
            ></TextField>
            <TextField
              onChange={(e) => setCookTime(e.target.value)}
              label="Cook Time"
              id="Cook Time"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Min</InputAdornment>
                ),
              }}
            />
            <TextField
              onChange={(e) => setServingSize(e.target.value)}
              label="Serving Size"
              id="filled-start-adornment"
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">1</InputAdornment>
                ),
              }}
              variant="filled"
            />
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="publicCheck"
                />
              }
              label="Make Recipe Public?"
            />
            <Button variant="contained">Create recipe</Button>
          </form>
        </Modal>
      </div>
    );
  }
};
export default RecipeCreate;
