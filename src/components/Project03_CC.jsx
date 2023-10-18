
// About.js
import React from 'react';
import { Link } from 'react-router-dom'
import { Box, Column, Row, Button } from "./styleCompnents/container.Style"
import { Title, SubTitle, SmallInfo, SpecialText } from "./styleCompnents/text.Style"
import GroupPic from "../Images/Group.jpg"
import Persona from "../Images/Persona.png"


function Project03 () {
    return <div>
        <Row homeA even>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/D5djjeIyRAk?si=sTErkIKSgBZ2qz7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Column nogap>
            <Title>Trash to Treasure</Title>
            <SubTitle>Year:</SubTitle>
            <SmallInfo>2023</SmallInfo>
            <br />
            <SubTitle> Place:</SubTitle>
            <SmallInfo>Copenhagen Denmark</SmallInfo>
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
        <span style={{color:"#7c6aa6", fontWeight: "700"}}>
        LOCATION:</span> Our location is Rentemestervej, situated in the Nordvest district. It was previously an industrial area before shifting into one that is more creative and familial. Our proposed solution will be built within Klub Smedetoften.  
        <br /> <br />
        <span style={{color:"#7c6aa6", fontWeight: "700"}}> TARGET MARKET:</span>
         18-25 year old students living independently, trying to find ways to be a member of their community.
        <br /> <br />
        <span style={{color:"#7c6aa6", fontWeight: "700"}}>CURRENT ISSUES:</span> After conversing with locals in Rentemestervej (such as Frederik from Klub Smedetoften, owners of businesses as well as street passerby), we discovered a common concern throughout the community. Many explained how gentrification in the area has increased rent and living prices substantially. It is often that the youth in the area are constantly working, thus having no time for social events that happen in the area. This lack of participation has caused not only financial burden, but also a gap of involvement in the community.
        <br /> <br />
        </SmallInfo>
        <img src={Persona} alt="" style={{"width":"325px" , "height":"425px"}} />
        </Row>
        <Row small  >
        <SmallInfo Resp>
        <span style={{color:"#7c6aa6", fontWeight: "700"}}>NATURAL MATERIAL:</span> Through exploring the area and immersing ourselves within the community, we noticed that there is an abundance of unwanted furniture left on the streets. We decided that the wood from these preexisting items can be harvested then turned into something entirely new.
        <br /> <br />
        <span style={{color:"#7c6aa6", fontWeight: "700"}}>PROPOSED SOLUTION:</span> For our solution, we have decided to build a creative space at Klub Smedetoften. It will work to influence the youth to get involved within their community, as well as encourage circularity. This area will serve as both a workspace and a hub to leave unwanted furniture. Any item dropped off can be deconstructed to create an abundance of materials that can be used for making new furniture. One can join beginner-friendly workshops hosted once a month, or simply drop in on their own time to work on their new furniture piece. These workshops will be taught by volunteers that have been incentivized, and community members will be marketed through an app, posters and social media. A physical prototype of a refurbished chair is to be put in the area to draw attention to the initiative.
       <br />
        <Link to={"https://www.figma.com/proto/qsgUrmmgRrgWqkn2WlHnAo/Untitled?page-id=0%3A1&type=design&node-id=3-1306&viewport=571%2C-187%2C0.27&t=sHFgjM9QoJ51ckcT-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design"}> <Button>See the prototype of the app</Button></Link>
        <br /> <br />
        </SmallInfo>
        <iframe width="350" height="315" src="https://www.youtube.com/embed/97ux9YEBDtQ?si=z4T8Q57n2NQntq5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Row>
        <Row small  >
        <SmallInfo Resp>
        <span style={{color:"#7c6aa6", fontWeight: "700"}}>VISION:</span> The vision is to have a connected group of people who get joy out of coming together and working on their own particular carpentry-project. We would like to see the community and corporations evolve into a united entity with close connections to the area and our workshop. We’d like to see the workshop go from once a month to once a week in the future in connection to a higher demand in the community. We’ll partner with other businesses - for example, go down and get a beer at a local bar after working on your project all day for a cheaper price. In the future the workshop can expand to different target-groups and materials. 
        <br /> <br />
       </SmallInfo>
        <img src={GroupPic} alt="" style={{"height":"305px"}} />
       </Row>
        </Column>   
    </div>
}
export default Project03;