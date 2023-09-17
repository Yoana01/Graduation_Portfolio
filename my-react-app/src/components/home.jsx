import React from 'react';
import {Column, Row, QuoteBox, CardBox, ImageContainer } from "./styleCompnents/container.Style";
import { SmallInfo, SubTitle } from './styleCompnents/text.Style';
import Project03 from "../Images/Eindhoven.jpg"

function Home (){
	return (
    <div>
    <Column>
    {/* <Row small homer homea even > */}
        <QuoteBox small>         My signature touch should be evident in every website or app as creating, designing and developing
   experiences that<span style={{color:"#7c6aa6", fontWeight: "700"}}> simplify people's lives.</span></QuoteBox>
{/* </Row> */}
<div className="down-arrow"></div>
<Row  small homer homea even>
    <CardBox>
    <img src={Project03} alt="" className="cardImg" />
 {/* </ImageContainer> */}
 <br />
 <SubTitle>Dutch Design Charrette</SubTitle>
 <SmallInfo>UX Research | UX Design | Sustainable Development Goals</SmallInfo>
    </CardBox>
    <CardBox>
 {/* <ImageContainer> */}
   <img src={Project03} alt="" className="cardImg" />
   <br />
 {/* </ImageContainer> */}
 <SubTitle>Onboarding Simac</SubTitle>
 <SmallInfo>UX Research | UX Design | Project Management | Onboarding </SmallInfo>
 </CardBox>
</Row>
</Column>
</div>
)}

export default Home;
