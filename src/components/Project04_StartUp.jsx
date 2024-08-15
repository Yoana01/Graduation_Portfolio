import React from "react";
import { Link } from "react-router-dom";
import {
  Column,
  Row,
  Button,
  ImageContainer,
} from "./styleCompnents/container.Style";
import { Title, SubTitle, SmallInfo } from "./styleCompnents/text.Style";
import Project03 from "../Images/WedecodeIT.png";
import Brainstorming from "../Images/brainstorming.png";
import Brand from "../Images/brand.png";

function Project04() {
  return (
    <div>
      <Row homeA even>
        <img src={Project03} alt="" className="cardImg" />
        <Column nogap>
          <Title>WedecodeIT</Title>
          <SubTitle>Year:</SubTitle>
          <SmallInfo>2023</SmallInfo>
          <br />
          <SubTitle> Place:</SubTitle>
          <SmallInfo>Eindhoven</SmallInfo>
          <br />
          <SubTitle>Tools:</SubTitle>
          <SmallInfo>Start-Up | Design Thinking | UX Research |UI</SmallInfo>
        </Column>
      </Row>
      <br />
      <br />
      <Column>
        <Title>Process and Results</Title>
        <Row small>
          <SmallInfo Resp>
            <span style={{ color: "#32620E", fontWeight: "700" }}>
              Introduction:
            </span>{" "}
            At Fontys University of Applied Science I had the opportunity not to
            work only with UX designers but and with full-stack developers. I
            felt the symbiosis between the design and coding. A few semesters
            later, we decided that we want to create a start-up company and to
            combine our knowledges. I already had expereince with branding and
            marketing, so this helped us to put the basics of it. <br /> <br />
            <span style={{ color: "#32620E", fontWeight: "700" }}>
              {" "}
              TARGET MARKET:
            </span>
            Companies that want to create and promote their serivices as well as
            creating software solutions.
            <br /> <br />
          </SmallInfo>
          <ImageContainer>
            <img src={Brainstorming} alt="" style={{ weight: "450px" }} />
          </ImageContainer>
        </Row>
        <Row small>
          <SmallInfo Resp>
            <span style={{ color: "#32620E", fontWeight: "700" }}>
              The start:
            </span>{" "}
            I used my knowledges for creating a brand and we started discussing
            what it is the vision, the mission, what social medias we want to
            use or in other words creating brand personality. Moreover, we
            discussed what services we can offer.
            <br /> <br />
            <span style={{ color: "#32620E", fontWeight: "700" }}>
              Product:
            </span>{" "}
            After the discussion I started working on the website as we went
            through a couple of version before the final one. We had
            brainstorming sessions where we were discussing what we can include
            and inspire ourselves from other companies that provide such a
            solutions.
            <br />
            <Link
              to={
                "https://www.figma.com/design/fyRiWlo132Vyvpc9fbjHj9/Project-website?node-id=0-1&t=Pn7DJoP6xgnmsGtG-1"
              }
            >
              {" "}
              <Button>See the prototype of the app</Button>
            </Link>
            <br /> <br />
            <SmallInfo Resp>
              <span style={{ color: "#32620E", fontWeight: "700" }}>
                Current Situation:
              </span>{" "}
              Unfortunately, for now we stopped working on the project because
              me and my teammates are busy with gaining more expeirience and
              finalising our studies.
              <br /> <br />
            </SmallInfo>
          </SmallInfo>
          <ImageContainer>
            <img src={Brand} alt="" style={{ weight: "450px" }} />
          </ImageContainer>
        </Row>
      </Column>
    </div>
  );
}
export default Project04;
