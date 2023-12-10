import styled from "styled-components";
export const Container = styled.div`
width: 100%;

margin-top: 24px;
color: ${({ theme }) => theme.COLORS.LIGHT_300};
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 140%;

.content{
  display: flex;
  align-items: center;
  gap: 16px;
  
}
`