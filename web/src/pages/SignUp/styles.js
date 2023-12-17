import styled from "styled-components";
export const Container = styled.div`

margin: auto;
width: 428px;
height: 100vh;
background: ${({ theme }) => theme.COLORS.DARK_100};
padding: 158px 65px 0;

font-family: Roboto;
color: #fff;
a{
  text-decoration: none;
}
header{
  display: flex;
  align-items: center;
  justify-content: center;
  gap:10.74px;
  margin-bottom: 75px;
}
header img{
  width: 43.315px;
  height: 43.315px;
}
header h1{
  color: var(--light-light-100, #FFF);
  font-size: 37.243px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
footer{ 
  display: flex;
  justify-content: center;
}
`