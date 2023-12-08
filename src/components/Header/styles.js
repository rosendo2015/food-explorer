import styled from "styled-components";
export const Container = styled.div`
width: 100%;
height: 114px;
background: ${({ theme }) => theme.COLORS.DARK_700};
padding: 56px 28px 24px;
display: flex;
align-items: center;
gap: 1rem;

p{
  color: var(--light-light-100, #FFF);
  font-family: Roboto;
  font-size: 21.163px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
svg{  
  flex-shrink: 0;
  fill: ${({ theme }) => theme.COLORS.LIGHT_100};
}
`