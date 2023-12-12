import styled from "styled-components";

export const ButtonTextStyle = styled.button`
width: 100%;
display: flex;
align-items: center;
margin-bottom: 10px;

cursor: pointer;
color: ${({ theme }) => theme.COLORS.LIGHT_300};
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 300;
line-height: 140%;
background: transparent;
border: 0;
border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};;
padding-bottom: 10px;
`