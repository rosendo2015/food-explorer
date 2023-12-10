import styled from "styled-components";
export const Container = styled.div`

min-width: 210px;
height: 292px;

padding: 24px;
margin-top: 24px;
text-align: center;
border-radius: 8px;
border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
background: ${({ theme }) => theme.COLORS.DARK_200};
position: relative;
.favorite{
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
}
.description{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 12px;
}
.description p{  
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
span{  
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}
.controlQtd{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 12px 0 16px;  
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
}
.controlQtd strong{
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
}
.controlQtd svg{
  cursor: pointer;
}
.card-user{
  display: none;
}
.card-auth{ 
  margin-top: 50px;
  display: block;
  
}

`