import styled from "styled-components";

export const ButtonTextStyle = styled.button`
display: flex;
align-items: center;

cursor: pointer;
color: ${({ theme }) => theme.COLORS.LIGHT_300};
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 33.6px */
background: transparent;
border: 0;
`