import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QuoteBox } from "./styleCompnents/container.Style";
import Project03 from "../Images/WedecodeIT.png";
import Project04 from "../Images/Logo.png";
import Project05 from "../Images/Copenhagen.png";
import NavBar from './Navbar';

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});
theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    green: theme.palette.augmentColor({
      color: {
        main: "#32620E",
      },
      name: "green",
    }),
  },
});

function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <NavBar></NavBar>
        {/* <Row small homer homea even > */}
        <QuoteBox small>
          {/* <Zoom duration={1500}> */}
          My signature touch should be evident in every website or app as
          creating, designing and developing experiences that
          <span style={{ color: "#32620E", fontWeight: "700" }}>
            simplify people's lives.
          </span>
          <div className="posarrow">
          <div className="down-arrow"></div>
          </div>
         
          {/* </Zoom> */}
        </QuoteBox>
        <Grid
          container
          containerSpacing={{ xs: 1, md: 2 }}
          // columnSpacing={12}
          gap={"40px"}
          // sx={{ marginTop: "150px" }}
          alignItems={"center"}
          justifyContent={"space-around"}
          alignContent={"center"}
        >
          <Card sx={{ maxWidth: 345, boxShadow: "none" }} raised="true">
            <CardMedia
              sx={{ height: 300 }}
              image={Project03}
              title="WedecodeIT Logo"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                fontSize={"20px"}
                color={"#ab7f72"}
              >
                WedecodeIT
              </Typography>
              <Typography variant="body1" color="text.secondary">
                UX Research | UX Design | Start-Up
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={"/project02"}>
                <Button size="medium" color="green">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, boxShadow: "none" }} raised="true">
            <CardMedia
              sx={{ height: 300 }}
              image={Project04}
              title="NADSCY Logo"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                fontSize={"20px"}
                color={"#ab7f72"}
              >
                Onboarding Simac
              </Typography>
              <Typography variant="body1" color="text.secondary">
                UX Research | UX Design | Project Management | Onboarding
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={"/project01"}>
                <Button size="medium" color="green">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, boxShadow: "none" }} raised="true">
            <CardMedia
              sx={{ height: 300 }}
              image={Project05}
              title="Copenhagen Logo Charrette"
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                fontSize={"20px"}
                color={"#ab7f72"}
              >
                Copenhagen Design Charrette
              </Typography>
              <Typography variant="body1" color="text.secondary">
                UX Research | UX Design | Urban Mining | Sustainable Development
                Goals
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={"/project03"}>
                <Button size="medium" color="green">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Home;
