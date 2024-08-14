// About.js
import React from "react";
import {
  Box,
  Column,
  Row,
  InfoBox,
  FancyPic,
} from "./styleCompnents/container.Style";
import { Title, SubTitle, SmallInfo } from "./styleCompnents/text.Style";
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
// import Carosel from './Carosel'
// import NumerationExperiences from "./Numeration_Experiences"
// import ScrollToTopButton from "./ScrollToTop"

function About() {
  return (
    <div>
      <Column>
        <Row small>
          <Box smallBox>
            {" "}
            <SubTitle> Hey and welcome! </SubTitle>
            <SmallInfo Resp>
              I'm Yoana Churkina, a recent graduate from Fontys University of
              Applied Sciences, specializing in Media Design. Originally from
              Sofia, Bulgaria, I’ve spent the past four years in Eindhoven, the
              Netherlands, immersing myself in the vibrant world of design and
              technology. <br />
              Passionate about creating intuitive and impactful digital
              experiences, I aim to leave my unique mark on every website or app
              I develop. My goal is to design and develop solutions that not
              only meet user needs but also simplify and enhance everyday life.{" "}
              <br />
              Looking forward to connecting and sharing ideas!
            </SmallInfo>
          </Box>
          <FancyPic>
            {/* <SpecialText>ABOUT <br /> ME</SpecialText> */}
            <img
              src={BigPic}
              alt=""
              style={{ height: "500px", borderRadius: "8px" }}
            />
          </FancyPic>
        </Row>
        {/* <Column aboutCon>
    {/* <Title RespT>Get In Touch</Title>
      <SubTitle>Contact</SubTitle>   */}
        {/* <Row about><PhoneIcon></PhoneIcon> <SmallInfo Resp>+359 897 397 297</SmallInfo></Row>
      <Row about><EmailIcon></EmailIcon> <SmallInfo Resp>yonichrurkina@gmail.com</SmallInfo></Row>
      <Row about><LinkedInIcon></LinkedInIcon> <SmallInfo Resp>https://www.linkedin.com/in/yoana-churkina-9408a1234/</SmallInfo></Row> */}
        {/* </Column> */}
        {/* <NumerationExperiences></NumerationExperiences> */}
        {/* <Title>Feedback</Title> */}

        {/* <Carosel/> */}
        <Column>
          <Title RespT>7 intresting facts about me</Title>
          <Row small homeA>
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
            <InfoBox>
              <Title>Proxy</Title>
              <SmallInfo Resp>
                I was part of Proxy since the begging of my second year as the
                last year I am the vice-president of the study assosiation. I was
                managing and organizing different events.
              </SmallInfo>
            </InfoBox>
          </Row>
          <Row small homeA>
            <InfoBox>
              <Title>Why UX/UI? </Title>
              <SmallInfo Resp>
                I was having the oportunity to introduce the UX/UI world in
                front of the first students at Fontys University. Here is some
                small part of the inspiration talk.
              </SmallInfo>
            </InfoBox>
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/8RitzmtguBk?si=ovTyuUZ3M77nNhh-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Row>
          <Row small homeA>
            <img
              src={Music}
              alt=""
              style={{
                height: "400px",
                borderRadius: "8px",
              }}
            />
            <InfoBox>
              <Title>Music</Title>
              <SmallInfo Resp>
                Since I was little I remember myself how I am dancing and
                singing on some music. The music is my heeling peel because she
                is always there to get out me from my darkest periods.
              </SmallInfo>
            </InfoBox>
          </Row>
          <Row small homeA>
            <InfoBox>
              <Title>Movies & TV shows</Title>
              <SmallInfo Resp>
                In my free days and especially when it is cold outside I love
                watching movies or TV series.Moreover, I even more interested in
                the actors lifestyle and more how they shoot it. Even I created
                an Instagram page where I did reviews on movies as well as
                sharing new and favorite songs.
              </SmallInfo>
            </InfoBox>
            <img
              src={Movies}
              alt=""
              style={{ width: "350px", height: "350px", borderRadius: "8px" }}
            />
          </Row>
          <Row small homeA>
            <img
              src={Gym}
              alt=""
              style={{ width: "300px", height: "400px", borderRadius: "8px" }}
            />

            <InfoBox>
              <Title>Gym</Title>
              <SmallInfo Resp>
                Since I came in the Netherlands, I started going to the gym.
                This helps me to stay fit and to being motivated and remove the
                negative energy.
              </SmallInfo>
            </InfoBox>
          </Row>
          <Row small homeA>
            <InfoBox>
              <Title>Cooking sweet things</Title>
              <SmallInfo Resp>
                The first thing that I have learned to cook was a cake. From
                that day on I love cooking cakes, muffinins to my beloved ones.
              </SmallInfo>
            </InfoBox>

            <img
              src={Cake}
              alt=""
              style={{ width: "200px", height: "350px", borderRadius: "8px" }}
            />
          </Row>
          <Row small homeA>
            <img
              src={Nature}
              alt=""
              style={{ width: "500px", height: "290px", borderRadius: "8px" }}
            />

            <InfoBox>
              <Title>Nature</Title>
              <SmallInfo Resp>
                As every person I need some space where I need to recharge
                myself and be with my toughts. The place that makes me feel like
                this is the nature. As I like being in my home country, Bulgaria
                since we have a lot of mountains, but also I open and for place
                in a mysterious country.
              </SmallInfo>
            </InfoBox>
          </Row>
        </Column>
        {/* <ScrollToTopButton></ScrollToTopButton> */}
      </Column>
    </div>
  );
}
export default About;
