import React, { useState } from "react";
import { TextField, Button, Container } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import MainContentContainer from '../common/MainContentContainer';
const ContactUs = () => {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <MainContentContainer noPadding>
      <Container>
        <h2>We appreciate your feedback and comments!</h2>
        <p>
          We want to continue to further develop the progress of our website and
          grow our community.
        </p>
      </Container>
      <form action="https://formspree.io/f/xeqvlgaz" method="POST">
        <Container
          sx={{
            maxWidth: "60%",
            maxHeight: "60%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            p: 4,
          }}
        >
          <TextField
            sx={{ m: 1, width: "25ch" }}
            label="Full Name"
            name="Full Name"
          />
          <TextField sx={{ m: 1 }} label="Email:" name="_replyto" />
          <TextField
            sx={{ m: 1 }}
            fullWidth
            variant="filled"
            label="Message"
            name="message"
            multiline
            rows={15}
          />

          <Button
            type="submit"
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            Send
          </Button>
        </Container>
      </form>
    </MainContentContainer>
  );
};

export default ContactUs;
