import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  Divider,
  Link,
} from "@material-ui/core";
import { Link as RouterLink, MemoryRouter as Router } from "react-router-dom";

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
              <Router>
                <Link component={RouterLink} to="/AboutUs">
                  About Us
                </Link>
              </Router>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
