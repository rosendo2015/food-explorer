import styled from "styled-components";
export const Container = styled.div`
max-width: 428px;
margin: auto;
background: ${({ theme }) => theme.COLORS.DARK_400};
main{
  padding: 11.61px 24px 80px 24px;

  h2{
    color: var(--light-light-300, #E1E1E6);
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    margin: 24px 0;
  }
}
`