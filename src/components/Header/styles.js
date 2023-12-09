import styled from "styled-components";
export const Container = styled.div`
width: 100%;
height: 114px;
background: ${({ theme }) => theme.COLORS.DARK_700};
padding: 56px 28px 24px;
.headerOpen{
  display: none;
  align-items: center;
  gap: 1rem;
   
}
.headerClosed{
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}
p{
  color: var(--light-light-100, #FFF);
  font-family: Roboto;
  font-size: 21.163px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.headerOpen svg,
.headerClosed svg{  
  fill: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
}
.wrapperLogo{
  display: flex;
  gap: 8px;
  cursor: pointer;
}
.wrapperLogo h2{
  color: var(--light-light-100, #FFF);
  font-family: Roboto;
  font-size: 21.163px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.wrapperReceipt{
  position: relative;
  cursor: pointer;
}
.wrapperReceipt span{
  display: flex;
  width: 20px;
  height: 20px;
  
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  color: var(--light-light-100, #FFF);
  text-align: center;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
}
`