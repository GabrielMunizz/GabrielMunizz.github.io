import { styled } from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 35px;

  & .mainContent {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 89%;
    height: 33.4rem;
    transform: translateX(-10%);
  }

  & .imgContainer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-width: 65%;
    height: 100%;
  }

  .imgContainer img {
    width: 380px;
    height: 480px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 0px #000;
  }

  & .introContainer {
    max-width: 15%;
    text-overflow: ellipsis;
  }

  & .introContainer h1 {
    font-size: 40px;
  }

  & .introContainer a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text_details};
  }

  @media (min-width: 4860px) {
    margin-bottom: 18.2rem;
    padding: 0 75px;

    & .introContainer {
      height: 600px;
    }

    & .introContainer h2 {
      font-size: 35px;
    }

    & .introContainer h1 {
      font-size: 50px;
    }

    & .introContainer h4,
    a {
      font-size: 25px;
    }
  }

  @media (max-width: 1723px) {
    & .imgContainer {
      min-width: 55%;
    }

    & .imgContainer img {
      width: 300px;
      height: 400px;
    }

    & .introContainer {
      max-width: 23%;
    }
  }

  @media (max-width: 1353px) {
    & .imgContainer {
      min-width: 50%;
    }

    & .imgContainer img {
      width: 250px;
      height: 350px;
    }

    & .introContainer {
      max-width: 30%;
    }

    & .introContainer h1 {
      font-size: 35px;
    }
  }

  @media (max-width: 1185px) {
    & .introContainer h1 {
      font-size: 28px;
    }

    & .introContainer h4 {
      font-size: 14px;
    }

    & .mainContent {
      height: 28rem;
    }

    & .imgContainer {
      min-width: 50%;
    }

    & .imgContainer img {
      width: 210px;
      height: 300px;
    }
  }

  @media (max-width: 1024px) {
    & .introContainer {
      max-width: 35%;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;

    & .mainContent {
      height: 24rem;
      transform: translateX(0);
    }

    & .introContainer {
      max-width: 42%;
      margin-left: 10%;
    }

    & .introContainer h1 {
      font-size: 28px;
    }

    & .introContainer h4 {
      font-size: 14px;
    }

    & .imgContainer {
      min-width: 40%;
    }

    & .imgContainer img {
      width: 180px;
      height: 270px;
    }
  }

  @media (max-width: 706px) {
    & .introContainer h1 {
      font-size: 23px;
    }

    & .introContainer h4 {
      font-size: 13px;
    }
  }

  @media (max-width: 643px) {
    & .introContainer h1 {
      font-size: 20px;
    }

    & .introContainer h4 {
      font-size: 10px;
    }

    & .introContainer h2 {
      font-size: 18px;
    }

    & .imgContainer img {
      width: 120px;
      height: 180px;
    }
  }

  @media (max-width: 465px) {
    margin-top: 20px;
    padding: 0 1rem;

    & .imgContainer img {
      width: 100px;
      height: 160px;
    }

    & .introContainer {
      max-width: 42%;
      margin-left: 8%;
    }

    & .introContainer h1 {
      font-size: 0.8rem;
    }

    & .introContainer h2,
    a {
      font-size: 12px;
    }

    & .introContainer h4 {
      font-size: 10px;
    }
  }

  @media (max-width: 375px) {
    & .imgContainer img {
      width: 100px;
      height: 160px;
    }

    & .introContainer h2,
    a {
      font-size: 14px;
    }

    & .introContainer h4 {
      font-size: 10px;
    }
  }

  @media (max-width: 360px) {
    margin-top: 10px;
  }

  @media (max-width: 351px) {
    & .introContainer h1 {
      font-size: 14px;
    }

    & .introContainer h2,
    a {
      font-size: 12px;
    }

    & .introContainer h4 {
      font-size: 8.5px;
    }
  }

  @media (max-width: 320px) {
    padding: 0 0.5rem;
    height: 18rem;

    & .imgContainer img {
      width: 80px;
      height: 120px;
    }
  }

  @media (max-width: 315px) {
    & .introContainer h1 {
      font-size: 10px;
    }

    & .introContainer h2,
    a {
      font-size: 8.5px;
    }
  }

  @media (max-height: 721px) {
    & .imgContainer {
      height: 150px;
    }
  }
`;


export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  min-width: 15%;
  height: 26rem;
  margin-left: 12%;
  

  & .professionalContainer {
    width: 100%;    
  }

  & .nameContainer h1 {
    font-size: 45px;
  }

  & hr {
    width: 70px;
    border-color: ${(props) => props.theme.colors.text_details};
    border-width: 2px;
  }

  & .nameContainer span {
    color: ${(props) => props.theme.colors.text_details};
  }

  & .contactContainer a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text_details};
    border: 2px solid ${(props) => props.theme.colors.text_details};
    padding: 10px;
  }

  @media (min-width: 4860px) and (min-height: 1495px) {    
    & .nameContainer h1 {
        font-size: 52px;
    }

    & .professionalContainer {
        font-size: 23px;   
    }

    & .contactContainer {
        font-size: 30px;
    }
  }

  @media (max-width: 1353px) and (max-height: 850px) {
    min-width: 25%;

    & .nameContainer h1 {
        font-size: 35px;
    }

    & .professionalContainer {
        font-size: 14px;   
    }

    & .contactContainer {
        font-size: 15px;
    }
  }

  @media (max-width: 1185px) {
    height: 23rem;    
  }

  @media (max-width: 1024px) {
    & .nameContainer h1 {
        font-size: 30px;
    }
  }

  @media (max-width: 768px) {
    height: 22rem;
    margin-left: 5%;

    & .nameContainer h1 {
        font-size: 25px;
    }

    & .professionalContainer {
        font-size: 14px;   
    }

    & .contactContainer {
        font-size: 15px;
    }
  }

  @media (max-width: 643px) {
    height: 16rem;

    & .nameContainer h1 {
        font-size: 22px;
    }

    & .professionalContainer, .contactContainer {
        font-size: 12px;   
    }    
  }

  @media (max-width: 465px) {
    margin-left: 0;
    min-width: 30%;

    & .nameContainer h1 {
        font-size: 20px;
    }
    
    & .contactContainer a {
        font-size: 12px;
    }

    & .professionalContainer h3 {
        font-size: 12px;   
    }
  }

  @media (max-width: 375px) {
    margin-left: 0;
    min-width: 30%;

    & .nameContainer h1 {
        font-size: 20px;
    }
    
    & .contactContainer a {
        font-size: 10px;
    }

    & .professionalContainer h3 {
        font-size: 12px;   
    }
  }

  @media (max-width: 360px) {
    width: 10%;  

    & hr {
      width: 50px;
    }

    & .nameContainer h1 {
      font-size: 18px;
    }

    & .professionalContainer {
        width: 80%;   
    }
  }

  @media (max-width: 351px) {
    & hr {
      width: 30px;
    }

    & .nameContainer h1 {
      font-size: 16px;
    }

    & .contactContainer a {
        font-size: 8px;  
    }

    & .professionalContainer h3 {
      font-size: 10px;
    }
  }

  @media (max-width: 315px) {
    & .professionalContainer h3 {
      font-size: 8.5px;
    }

    & .contactContainer a {
        font-size: 6px;  
    }
  }
  
`;

export const H2 = styled.h2`
  color: ${(props) => props.theme.colors.text_details};
`;
