import { useState } from "react";
import { Container, Box, Button, Grid, Modal } from "@material-ui/core";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Mascot from "../../assets/images/clickncook_mascot.png"

const Header = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleClick = name => e => {
      setModalComponent(name);
      openModal();
  }

  const renderModalComponent = (component) => {
      switch (component) {
          case 'Login':
              return <Login closeModal={closeModal} setModalComponent={setModalComponent}/>;
          case 'Register':
              return <Register closeModal={closeModal} setModalComponent={setModalComponent}/>;
          default:
              return <></>;
      }
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
          <Modal
              open={modalIsOpen}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
          >
              {
                <div>
                  {renderModalComponent(modalComponent)}
                </div>
              }
          </Modal>
          <Button variant="outlined" color='secondary'  sx={{ border: 2 }} onClick={handleClick('Register')}>
            Register
          </Button>
          <Button variant="contained" color='secondary'  onClick={handleClick('Login')}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;

