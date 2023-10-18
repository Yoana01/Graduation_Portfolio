import React from 'react';
import { Link } from 'react-router-dom'
import {Column, Row, QuoteBox, CardBox, ImageContainer, Button } from "./styleCompnents/container.Style";
import { SmallInfo, SubTitle } from './styleCompnents/text.Style';
import Project03 from "../Images/Eindhoven.jpg"
import Project04 from "../Images/Logo.png"
import Project05 from "../Images/Copenhagen.png"

function Home (){
	return (
    <div>
    <Column>
    {/* <Row small homer homea even > */}
        <QuoteBox small >         My signature touch should be evident in every website or app as creating, designing and developing
   experiences that<span style={{color:"#7c6aa6", fontWeight: "700"}}> simplify people's lives.</span>

   
   </QuoteBox>
   <div className="down-arrow"></div>
{/* </Row> */}
<Row  small homer homea even tag>
    <CardBox>
    <img src={Project03} alt="" className="cardImg" />
 {/* </ImageContainer> */}
 <br />
 <SubTitle>Dutch Design Charrette</SubTitle>
 <SmallInfo tags>UX Research | UX Design | Sustainable Development Goals</SmallInfo>
 <Link to={"/project02"}> <Button>Find more</Button></Link>
    </CardBox>
    <CardBox>
 {/* <ImageContainer> */}
   <img src={Project04} alt="" className="cardImg" />
   <br />
 {/* </ImageContainer> */}
 <SubTitle>Onboarding Simac</SubTitle>
 <SmallInfo tags>UX Research | UX Design | Project Management | Onboarding </SmallInfo>
 <Link to={"/project01"}> <Button>Find more</Button></Link>
   </CardBox>
    <CardBox>
    <img src={Project05} alt="" className="cardImg2" />
 {/* </ImageContainer> */}
 <br />
 <SubTitle>Copenhagen Design Charrette</SubTitle>
 <SmallInfo tags>UX Research | UX Design | Urban Mining | Sustainable Development Goals</SmallInfo>
 <Link to={"/project03"}> <Button>Find more</Button></Link>
   </CardBox>
</Row>
</Column>
</div>
)}

export default Home;
