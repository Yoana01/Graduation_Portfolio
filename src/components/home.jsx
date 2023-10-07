import React from 'react';
import { Link } from 'react-router-dom'
import {Column, Row, QuoteBox, CardBox, ImageContainer } from "./styleCompnents/container.Style";
import { SmallInfo, SubTitle } from './styleCompnents/text.Style';
import Project03 from "../Images/Eindhoven.jpg"
import Project04 from "../Images/Logo.png"

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
<Row  small homer homea even>
<Link to={"/project02"}>
    <CardBox>
    <img src={Project03} alt="" className="cardImg" />
 {/* </ImageContainer> */}
 <br />
 <SubTitle>Dutch Design Charrette</SubTitle>
 <SmallInfo tags>UX Research | UX Design | Sustainable Development Goals</SmallInfo>
    </CardBox>
    </Link>
    <Link to={"/project01"}>
    <CardBox>
 {/* <ImageContainer> */}
   <img src={Project04} alt="" className="cardImg1" />
   <br />
 {/* </ImageContainer> */}
 <SubTitle>Onboarding Simac</SubTitle>
 <SmallInfo tags>UX Research | UX Design | Project Management | Onboarding </SmallInfo>
 </CardBox>
 </Link>
</Row>
</Column>
</div>
)}

export default Home;
