import { Container, Box, Typography } from "@material-ui/core";
import bgImage from "../../assets/images/hero_background4.jpg";
import LogoType from "../../assets/images/clickncook_logotype.svg";

const HeroSection = (props) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        minHeight: 400,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <Box
        component="img"
        sx={{
          width: 500,
          maxWidth: { xs: 280, sm: 320, md: 400, lg: 500 },
        }}
        alt="Clickin the Chicken"
        src={`${LogoType}`}
      />
      <Typography variant="h3">Yummm.....what's clicking?</Typography>
    </Container>
  );
};

export default HeroSection;
