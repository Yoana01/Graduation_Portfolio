import styled, {
    css
} from 'styled-components';

export const NavigationBar = styled.div `
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: flex-end;
gap:45px;
padding: 16px;
padding: 16px;
border: none;
color: #151322;
cursor: pointer;
font-size: 22px;
position: relative;
text-decoration: none;
transition-duration: .4s;
transition-property: color;
transition-timing-function: cubic-bezier(.25,.8,.25,1);
}
  `

export const ImageContainer = styled.div `
    display: flex;
    border-radius:8px;
    width:450px;
    height:450px;
  `
  

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    gap:${(props) => props.nogap ? '0px' : '45px'};
    /* align-items: center; */
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    margin-top: 10px;
    ${props => props.sum && css`
      display: flex;
      gap:30px;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
      margin-left: 70px;
  `}
  ${props => props.aboutcon && css`
  gap:0px;
  align-items: flex-start;
    align-content: space-around;
    @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: auto;
    padding-left: 8px;
  }
  `}
`;
export const Row = styled.div `
    height:auto;
    display: flex;
    gap:${(props) => props.homer ? '0px' : props.homrR1 ? '150px' : props.tag ? '16px' : '100px'};
    flex-direction: row;
    flex-wrap: wrap;
    align-items: ${(props) => props.homeA ? 'center' :  'flex-start'};
    /* justify-content: space-between; */
    justify-content: ${(props) => props.even ? 'space-evenly' :  'space-between'};;
    ${props => props.small && css`
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap:24px;
      justify-content: center;
      align-items: center;
      /* padding:16px; */
      /* max-width:380px;
      width: auto;
      height: 100%; */
    }
  `}
  ${props => props.about && css`
      display: flex;
      gap:30px;
      justify-content: flex-start;
      align-items: stretch;
      padding:16px;
  `}
  ${props => props.learningout && css`
      display: flex;
      gap:30px;
      max-width:650px;
      flex-wrap: wrap;
      justify-content: flex-start;
      @media (max-width: 768px) {
      width: 380px;
      height: 100%;
    }
  `}
`
export const InfoBox = styled.div `
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding:16px;
   width: auto;
   ${props => props.small && css`
    @media (max-width: 768px) {
        margin-left: 50px;
    }
  `}
`

export const Box = styled.div `
    width:524px;
    height:250px;
    padding:32px;
    ${props => props.smallbox && css`
    @media (max-width: 768px) {
        height: 100%;
        width:300px;
    }
  `}
`
export const FeedbackBox = styled.div `
    background: rgb(245,245,245, 0.19);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
    border-radius: 32px;
    color:#151322;
    width: 500px;
    height: 300px;
    align-items: center;
    display: flex;
    padding:16px;
    margin-bottom: 24px;
    font-family: 'Poppins Light';
`
/* background: rgb(181,131,141, 0.39);
/* opacity: 0.39; */
/* box-shadow: 11px 5px 3px rgba(0, 0, 0, 0.160784); */ 
/* background: #EDE9EF; */
/* color: black; */
/* margin:auto; */
/* height: 100%; */

export const CircleBox = styled.div`
  background: #FFFFFF;
  opacity: 0.84;
  width: 150px;
  height: 42px;
  padding:4px;
  border-radius: 16px;
  color:#151322;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-weight: 600;

`
export const Tag = styled.div`
background: rgb(189, 178, 207);
box-shadow: -1px -1px 2px rgba(208, 196, 228, 0.3), 1px 1px 2px rgba(170, 160, 186, 0.5), inset 5px -5px 10px rgba(170, 160, 186, 0.2), inset -5px 5px 10px rgba(170, 160, 186, 0.2), inset 5px 5px 10px rgba(208, 196, 228, 0.9), inset -5px -5px 13px rgba(170, 160, 186, 0.9);
border-radius: 8px;
padding:8px;
font-family: "Poppins Medium";
font-size: 12px;
margin-bottom: 16px;
text-align: center;
`

export const QuoteBox = styled.div`
    font-family: 'Dekko';
    // width: 500px;
    height: 100%;
    padding: 16px;
    font-size: 56px;
    // line-height: 46px;
    display: flex;
    flex-direction:column;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 100vh;
    text-align:center;
    ${props => props.small && css`
    @media (max-width: 768px) {
        height: auto;
        font-size:32px;
        padding:32px;
        margin:12px
    }
  `}

`
export const CardBox = styled.div`
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  // align-items: center;
  justify-content: center; 
  user-select: none;
  color: black;
    ${props => props.small && css`
    @media (max-width: 768px) {
        margin:auto;
        width:300px;
        height: auto;
        padding: 0px 0px 16px 0px;
    }
    ${props =>
    props.hover &&
    css`
     transform: scale(1.05);
    `}
    ${props =>
    props.active &&
    css`
   transform: scale(0.95) rotateZ(1.7deg);
    `}
  `}
`

export const  Button = styled.button`
   background: transparent;
    border: none;
    text-decoration: underline;
    /* color: #E5989B; */
    color: #7C6AA6;
    font-size: 20px;
   &:hover {
      /* background-color: transparent;
      border: 2px solid #E5989B; */
      color:#bdb2cf;
    }
  `;

export const FancyPic = styled.div`
    display: flex;
    flex-direction: column;  
  //  margin-top:48px;
`