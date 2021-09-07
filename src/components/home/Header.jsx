import { useState, useEffect } from "react";
import { Container, Box, Button, Grid } from "@material-ui/core";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Mascot from "../../assets/images/clickncook_mascot.png"

const Header = (props) => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [registerIsOpen, setRegisterIsOpen] = useState(false);
  const handleLoginOpen = () => {
    setLoginIsOpen(true);
  };
  const handleLoginClose = () => {
    setLoginIsOpen(false);
  };
  const handleRegisterOpen = () => {
    setRegisterIsOpen(true);
  };
  const handleRegisterClose = () => {
    setRegisterIsOpen(false);
  };

  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: 100,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        marginTop: 1
      }}
    >
      <Grid container spacing={2} maxWidth="xl" alignItems="center">
        <Grid item xs={6}>
          <Box
            component="img"
            sx={{
              width: 100,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="Clickin the Chicken"
            src={`${Mascot}`}
          />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Login
            open={loginIsOpen}
            handleClose={handleLoginClose}
            setSessionToken={props.token}
          />
          <Register
            open={registerIsOpen}
            handleClose={handleRegisterClose}
            setSessionToken={props.token}
          />
          <Button variant="contained" onClick={handleLoginOpen}>
            Login
          </Button>
          <Button variant="contained" onClick={handleRegisterOpen}>
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
