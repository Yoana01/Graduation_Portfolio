
// About.js
import React from 'react';
import { Box, Column, Row,FeedbackBox, InfoBox, FancyPic, QuoteBox } from "./styleCompnents/container.Style"
import { Title, SubTitle, SmallInfo, SpecialText } from "./styleCompnents/text.Style"
import GroupPic from "../Images/GroupPhoto.jpg"
import Rules from "../Images/Rules.jpg"


function Project02 () {
    return <div>
        <Row homeA even>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DR2SblG4_mk?si=WkEtCeyfhavDmv2X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Column nogap>
            <Title>Schoolyard 14</Title>
            <SubTitle>Year:</SubTitle>
            <SmallInfo>2023</SmallInfo>
            <br />
            <SubTitle>Company:</SubTitle>
            <SmallInfo>The Cruyff Foundation</SmallInfo>
            <br />
            <SubTitle>Tools:</SubTitle>
            <SmallInfo>Sustainable Development Goals | Design Thinking |DOT Framework/CMD methods | UX Research |UI</SmallInfo>
        </Column>
        </Row>
        <br /><br />
        <Column>
        <Title>Process and Results</Title>
        <Row small  >
        <SmallInfo Resp>
        During the Dutch Design Charrette, our group was assigned a project by Handpicked Agencies and The Cruyff Foundation. Our focus was on The Cruyff Foundation's Schoolyard 14, which consists of 14 different games. Our task was to create an innovative fifth game that incorporates technology and can be accessed by all children, including those with disabilities or facing challenges such as poverty. Addressing the issue of insufficient physical activity among children, which negatively impacts their motor and social skills. Our solution aimed to integrate synthetic media, mixed reality, artificial intelligence, and/or big data into the design of Schoolplein14 and its surrounding environment, effectively encouraging outdoor play and physical activities.
        </SmallInfo>
        <img src={Rules} alt="" style={{"width":"350px" , "height":"425px"}} />
        </Row>
        <Row small  >
        <SmallInfo Resp>
        The Dutch Design Charrette was one amazing experience because I really started thinking beyond the screen. I knew that there is architecture and internal design, and they are also doing design things. However, this project taught me that even UX/UI and the technology that we are studying now can help me to solve a problem. So far, when it was something about creating a solution, I was limiting myself into thinking only about the mobile app or website. Moreover, working with different people with different studies was also an amazing opportunity because you see the project from different perspective as an example is the perspective of the architecture or the e-commerce. Overall, I think that I grow myself as professional.
        </SmallInfo>
        <img src={GroupPic} alt="" style={{"width":"450px" , "height":"315px"}}/>
        </Row>
        <Row small  >
        <SmallInfo Resp>
        Another thing that I did is take over of Fontys ICT account in Instagram. This was very important because I want to create media content for social medias but also and digital marketing. I learned so many things as that I need to make the content intriguing and to involve people in my story as asking me questions.
        </SmallInfo>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/j3AnqXWBJTk?si=IvLoLSr_lqUjGB0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Row>
        </Column>   
    </div>
}
export default Project02;