import styled from "styled-components";
export const Container = styled.div`
margin: auto;
width: 428px;
background: ${({ theme }) => theme.COLORS.DARK_400};

form{
  padding: 16px 56px 83.57px;
}
h2{
  margin: 24px 0;
  color: var(--light-light-300, #E1E1E6);
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
`