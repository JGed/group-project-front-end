import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        height: 100,
        backgroundColor: "neutral.main",
        flex: "0 1 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={2} maxWidth="xl" alignItems="center">
        <Grid item xs={12}>
          <Box>
            <Typography>© 2021 ClickNCook, LLC</Typography>
            <Stack
              direction="row-reverse"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Link to="/aboutus">About Us</Link>
              <Link to="/contactus">Contact Us</Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
