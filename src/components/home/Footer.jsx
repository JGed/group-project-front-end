import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import globalTheme from "../../assets/styles/globalStyles";

const Footer = (props) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        height: 100,
        backgroundColor: globalTheme.palette.neutral.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 4,
      }}
    >
      <Grid container spacing={2} maxWidth="xl" alignItems="center">
        <Grid item xs={12}>
          <Box>
            <Typography>© 2021 ClickNCook, LLC</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
