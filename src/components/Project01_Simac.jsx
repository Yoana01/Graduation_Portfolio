import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Column, Row } from "./styleCompnents/container.Style"
import { Title, SubTitle, SmallInfo } from "./styleCompnents/text.Style"
import Simac01 from "../Images/A4 - 2.png"
import Management from "../Images/Monday.png"
import Map from "../Images/CustomerJourney Map.jpg"
import Empathy from "../Images/Empatymap.png"
import Affinity from "../Images/SIMAC Affinity map 1.png"
import Project from "../Images/A4 - 2.png"
import Group from "../Images/grouppic.jpg"
import NavBar from './Navbar';


// import Zoom from 'react-reveal/Zoom';
// import Slide from 'react-reveal/Slide';
// import Carosel from './Carosel'
// import NumerationExperiences from "./Numeration_Experiences"
// import ScrollToTopButton from "./ScrollToTop"
  
function Project01 () {
    return <div>
        <NavBar></NavBar>
        <Row homeA even>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4isAugIrrt8?si=4ltSQCiLx-YfrY9j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Column nogap>
            <Title>Onboarding Process at Simac</Title>
            <SubTitle>Year:</SubTitle>
            <SmallInfo>2023</SmallInfo>
            <br />
            <SubTitle>Company:</SubTitle>
            <SmallInfo>Simac</SmallInfo>
            <br />
            <SubTitle>Tools:</SubTitle>
            <SmallInfo>Agile | Design Thinking |DOT Framework |CMD methods | UX Research |UI | 
            Project Management</SmallInfo>
        </Column>
        </Row>
        {/* <Title>Summary</Title>
        <SmallInfo sum>The assignment brought together six individuals with diverse backgrounds, sharing a passion for UX/UI.
        We partnered with Simac, a Dutch company in Veldhoven, and chose to address the onboarding of non-Dutch employees.
        Our goal is to make Simac more attractive to international candidates by improving the onboarding process, considering 
        language barriers and cultural differences.</SmallInfo> */}
        <Title ques>How can SIMAC become more attractive to non-Dutch people? </Title>
        <Column>
        <Title>Process and Results</Title>
        <Row small  >
        <SmallInfo Resp>
        I'm passionate about organizing and leading teams for successful event planning. I chose Scrum-ban as our project management methodology after thorough research and Scrum training. As a Scrum Master during the second sprint, we achieved our goals through pragmatic task assignments and effective communication.
        </SmallInfo>
        <img src={Management} alt="" style={{"width":"450px" , "height":"315px"}}/>
        </Row>
        <Row small  >
        <SmallInfo Resp>
        I delved into Simac's onboarding process and found it had four stages. New employees often felt overwhelmed on day one, but Simac's personalized approach with "buddies" was a positive aspect.
        <br /><br />
        Recognizing the complexity of their onboarding, I created a comprehensive customer journey map, focusing on the first day and week. Expert interviews emphasized the importance of expertise and initiative.
        </SmallInfo>
        <img src={Map} alt="" style={{"width":"450px" , "height":"315px"}}/>
        </Row>
        <Row small  >
        <SmallInfo Resp>
        Interviews with non-Dutch employees revealed that language barriers were not a major issue. This led to empathy maps, personas, and user requirements development. We uncovered an overlooked problem: socialization, especially for international employees.
        <br /><br />
        Subsequently, I conducted interviews with non-Dutch employees at both Simac and another organization to gain an understanding of their onboarding experiences. Surprisingly, language barriers were not a significant concern. These insights informed the creation of empathy maps, which in turn guided the development of personas and user requirements by my team members.
        </SmallInfo>
        <img src={Empathy} alt="" style={{"width":"450px" , "height":"315px"}}/>
        </Row>
        <Row small>
        <SmallInfo Resp> Through affinity mapping of the interview analyses, we uncovered a critical area that had been previously overlooked: socialization, particularly among international and non-Dutch employees, was underdeveloped at Simac. This revelation prompted a fundamental shift in our project's focus towards finding a solution for this problem.</SmallInfo>
        <img src={Affinity} alt="" style={{"width":"450px" , "height":"315px"}}/>
        </Row>
        <Row small  >
        <SmallInfo Resp>
        With all the requisite information in hand, our project's focus turned toward addressing the socialization aspect. Sometimes, solving a problem requires narrowing down the scope and concentrating on a specific facet rather than attempting to tackle the entire issue. As such, we developed a concept that revolved around a challenge-based app for new employees, promoting interaction and collaboration. It featured a world map highlighting the company's cultural diversity, aimed at creating an engaging and inclusive work environment.
        <br /><br />
        UI was responsible for designing the Scanning and Congratulating component, using image recognition for task verification. We conducted comprehensive testing, and users praised the user-friendly interface, giving it an impressive 9 out of 10.
        <br /><br />
        <Link to={'https://www.figma.com/file/7Y1S4hBJzTRaoa37VlbXz9/SIMAC-IN?type=design&node-id=0%3A1&mode=design&t=z8ZtkRmPCJP3r1eK-1'}><Button> Prototype</Button></Link>
        </SmallInfo>
        <img src={Project} alt="" style={{"width":"350px" , "height":"425px"}}/>
        </Row>
        <Row small  >
        <SmallInfo>This project was a transformative opportunity for my professional growth. Stepping out of my comfort zone taught me the 
        value of taking risks and fostering creativity. My design thinking has also evolved to be more simplistic and minimalistic.
        I am grateful to my team, teachers, and stakeholders for making this project a successful and invaluable experience.
        I am happy that our clients were happy with the results and that they want to continue our project in the future 
        and this is just the first step of it.</SmallInfo>
        <img src={Group} alt="" style={{"width":"450px" , "height":"315px"}}/>
        </Row>
        </Column>
    </div>
}
export default Project01;