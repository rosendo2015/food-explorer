import styled from "styled-components";
import bannerImg from "../../assets/banner2.svg";
export const Container = styled.div`
width: 100%;

.rectangle::before{
  content: "";
  width: 191px;
  height: 149px;
  flex-shrink: 0;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  position: absolute;
  top: -29px;
  left: -27px;
  opacity: 0.8;
}
.rectangle{
  position: relative;
  margin-left: 30px;
  margin-top: 44px;
  width: 376px;
  height: 120px;
  flex-shrink: 0; 
  border-radius: 2.917px;
  background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
  padding: 36px 8px 22px 153px;
}
.rectangle h2{
  color: var(--light-light-300, #E1E1E6);
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 140%;

}
.rectangle p{
  
  color: var(--light-light-300, #E1E1E6);
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 16.8px */
}
`