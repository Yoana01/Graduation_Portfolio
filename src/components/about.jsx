// About.js
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BigPic from "../Images/Me.jpg";
import Music from "../Images/music.jpg";
import Movies from "../Images/movies.jpg";
import Gym from "../Images/gym.jpeg";
import Cake from "../Images/cake.jpeg";
import Nature from "../Images/nature.jpeg";
import ProxyVideo from "../Images/Proxy.mp4";
// import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';
// import Slide from 'react-reveal/Slide';

function About() {
  return (
    <div>
      <Grid
        container
        containerSpacing={{ xs: 1, md: 2 }}
        sx={{ marginTop: "150px" }}
        // justifyContent={"center"}
        alignItems={"center"}
        justifyContent={"space-around"}
        alignContent={"center"}
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h3"
            component="h3"
            textAlign={"center"}
            sx={{ marginBottom: "1.5rem", paddingLeft: "1rem" }}
          >
            Hey and welcome!
          </Typography>
          <Typography
            fontSize={"20px"}
            component="p"
            textAlign={"center"}
            sx={{ margin: "1.5rem" }}
          >
            I'm Yoana Churkina, a recent graduate from Fontys University of
            Applied Sciences, specializing in Media Design. Originally from
            Sofia, Bulgaria, I’ve spent the past four years in Eindhoven, the
            Netherlands, immersing myself in the vibrant world of design and
            technology. <br />
            Passionate about creating intuitive and impactful digital
            experiences, I aim to leave my unique mark on every website or app I
            develop. My goal is to design and develop solutions that not only
            meet user needs but also simplify and enhance everyday life. <br />
            Looking forward to connecting and sharing ideas!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} display="flex">
          <img
            src={BigPic}
            alt="Images"
            style={{ height: "400px", borderRadius: "8px", margin: "auto" }}
          />
        </Grid>
      </Grid>
      <Typography
        variant="h3"
        component="h3"
        textAlign={"center"}
        color={"#32620E"}
        sx={{ margin: "3.5rem" }}
      >
        7 intresting facts about me
      </Typography>
      <Grid
        container
        containerSpacing={{ xs: 1, md: 2 }}
        sx={{ marginTop: "150px" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        alignContent={"center"}
      >
        {" "}
        <Grid item xs={12} md={4} display="flex" justifyContent={"center"}>
          <iframe
            width="350"
            height="250"
            id="videoFrame"
            src={ProxyVideo}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            border-radius="8px"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            component="h4"
            textAlign={"center"}
            color="#ab7f72"
            sx={{ marginBottom: "1.5rem", paddingLeft: "1rem" }}
          >
            Vice President, Study Association - Proxy
          </Typography>
          <Typography
            fontSize={"20px"}
            component="p"
            textAlign={"center"}
            sx={{ margin: "1.5rem" }}
          >
            Since the beginning of my second year, I had been an integral part
            of Proxy, a study association where in the end, I was proudly serve
            as Vice President. During this time, I had taken on a leadership
            role, managing and organizing a wide range of events that have
            enriched the student experience. My involvement has allowed me to
            develop strong organizational and team management skills,
            contributing to the growth and success of the association.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        containerSpacing={{ xs: 1, md: 2 }}
        sx={{ marginTop: "150px" }}
        // justifyContent={"center"}
        alignItems={"center"}
        justifyContent={"space-around"}
        alignContent={"center"}
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            component="h4"
            textAlign={"center"}
            color="#ab7f72"
            sx={{ marginBottom: "1.5rem", paddingLeft: "1rem" }}
          >
            Inspirational Speaker, UX/UI Introduction - Fontys University
          </Typography>
          <Typography
            fontSize={"20px"}
            component="p"
            textAlign={"center"}
            sx={{ margin: "1.5rem" }}
          >
            I had the privilege of introducing the world of UX/UI design to
            first-year students at Fontys University. During this inspiring
            session, I shared insights and sparked curiosity about the
            possibilities within this dynamic field. Below is a glimpse of the
            talk that motivated the next generation of designers.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} display="flex" justifyContent={"center"}>
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/8RitzmtguBk?si=ovTyuUZ3M77nNhh-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Grid>
      </Grid>
      <Grid
        container
        containerSpacing={{ xs: 1, md: 2 }}
        sx={{ marginTop: "150px" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        alignContent={"center"}
      >
        {" "}
        <Grid item xs={12} md={4} display="flex" justifyContent={"center"}>
          <img
            src={Music}
            alt=""
            style={{
              height: "400px",
              borderRadius: "8px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            component="h4"
            textAlign={"center"}
            color="#ab7f72"
            sx={{ marginBottom: "1.5rem", paddingLeft: "1rem" }}
          >
            Music
          </Typography>
          <Typography
            fontSize={"20px"}
            component="p"
            textAlign={"center"}
            sx={{ margin: "1.5rem" }}
          >
            Since childhood, I've always found myself dancing and singing to
            music. Music has been my healing balm, a constant presence that
            lifts me out of my darkest moments.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        containerSpacing={{ xs: 1, md: 2 }}
        sx={{ marginTop: "150px" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        alignContent={"center"}
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            component="h4"
            textAlign={"center"}
            color="#ab7f72"
            sx={{ marginBottom: "1.5rem", paddingLeft: "1rem" }}
          >
            Movies & TV shows
          </Typography>
          <Typography
            fontSize={"20px"}
            component="p"
            textAlign={"center"}
            sx={{ margin: "1.5rem" }}
          >
            On my days off, especially when it's cold outside, I love diving
            into movies and TV series. I'm fascinated not only by the stories
            but also by the actors' lifestyles and the behind-the-scenes process
            of filmmaking. My passion led me to create an Instagram page where I
            review movies and share my favorite songs, as well as the latest
            tracks that catch my ear.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} display="flex" justifyContent={"center"}>
          <img
            src={Movies}
            alt=""
            style={{ width: "350px", height: "350px", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        containerSpacing={{ xs: 1, md: 2 }}
        sx={{ marginTop: "150px" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        alignContent={"center"}
      >
        {" "}
        <Grid item xs={12} md={4} display="flex" justifyContent={"center"}>
          <img
            src={Gym}
            alt=""
            style={{ width: "300px", height: "400px", borderRadius: "8px" }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            component="h4"
            textAlign={"center"}
            color="#ab7f72"
            sx={{ marginBottom: "1.5rem", paddingLeft: "1rem" }}
          >
            Gym
          </Typography>
          <Typography
            fontSize={"20px"}
            component="p"
            textAlign={"center"}
            sx={{ margin: "1.5rem" }}
          >
            Since moving to the Netherlands, I've made going to the gym a
            regular part of my routine. It helps me stay fit, stay motivated,
            and channel negative energy into something positive.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        containerSpacing={{ xs: 1, md: 2 }}
        sx={{ marginTop: "150px" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        alignContent={"center"}
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            component="h4"
            textAlign={"center"}
            color="#ab7f72"
            sx={{ marginBottom: "1.5rem", paddingLeft: "1rem" }}
          >
            Cooking sweet things
          </Typography>
          <Typography
            fontSize={"20px"}
            component="p"
            textAlign={"center"}
            sx={{ margin: "1.5rem" }}
          >
            The first thing I ever learned to cook was a cake, and from that
            moment on, I fell in love with baking. Now, I enjoy creating cakes
            and muffins for my loved ones, sharing my passion with those who
            matter most.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} display="flex" justifyContent={"center"}>
          <img
            src={Cake}
            alt=""
            style={{ width: "200px", height: "350px", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        containerSpacing={{ xs: 1, md: 2 }}
        sx={{ marginTop: "150px" }}
        alignItems={"center"}
        justifyContent={"space-around"}
        alignContent={"center"}
      >
        {" "}
        <Grid item xs={12} md={4} display="flex" justifyContent={"center"}>
          <img
            src={Nature}
            alt=""
            style={{ width: "500px", height: "290px", borderRadius: "8px" }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            component="h4"
            textAlign={"center"}
            color="#ab7f72"
            sx={{ marginBottom: "1.5rem", paddingLeft: "1rem" }}
          >
            Nature
          </Typography>
          <Typography
            fontSize={"20px"}
            component="p"
            textAlign={"center"}
            sx={{ margin: "1.5rem" }}
          >
            Like everyone, I need a space to recharge and reflect, and for me,
            that place is nature. I find peace in the mountains of my home
            country, Bulgaria, but I'm also drawn to exploring the untouched
            beauty of mysterious, far-off lands.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default About;
