import styled, {
    css
  }from 'styled-components'
  
  export const  Title = styled.div`
     font-size: 32px;
     padding-bottom: 32px;
     font-weight:500;
     ${props => props.RespT && css`
     @media (max-width: 768px) {
      text-align: center;
      width:285px;
      height: 100%;}
    `}
    ${props => props.CTitle && css`
       text-align: center;
    `}
    ${props => props.ques && css`
      font-family: 'Dekko';
      margin:50px;
      text-align:center
    `}
    `;
  export const  SubTitle = styled.div`
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    // padding:16px;
      @media (max-width: 768px) {
     ${props => props.ResSub && css`
     text-align:center
    `}}
   `;
  export const SmallInfo = styled.div`
      font-family: 'Poppins';
      // max-width:${(props) => props.sum ? '85%' : '550px'};
      width: 450px;
      padding-top:12px; 
      // color:${(props) => props.tags ? '#bdb2cf' : '#151322'};
      color: #151322;
      // padding-bottom:${(props) => props.learning ? '0px' : '16px'};
      font-size:${(props) => props.learningText ? '12px' : '16px'};
      ${props => props.sumText && css`
       max-width: 1200px;
       width: auto;
       font-size: 18px;
    `}
     ${props => props.CardText && css`
       width: auto;
       padding:16px;
       font-family:'PoppinsLight';
    `}
    ${props => props.Resp && css`
    @media (max-width: 768px) {
      max-width: 350px;
       width:auto;
       text-align:center;
       height: 100%;}
    `}
  `
  export const SpecialText = styled.div`
      font-size: 36px;
      font-family: 'Poppins';
      font-weight: 500;
      margin-bottom: -137px;
      line-height: 45px;
      margin-left: 18px;
      z-index: 5;
  `