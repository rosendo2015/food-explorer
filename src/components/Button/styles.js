import styled from "styled-components";

export const ButtonStyle = styled.button`
width: 100%;
background: ${({ theme }) => theme.COLORS.TOMATO_400};

border-radius: 5px;
border: 0;
color: ${({ theme }) => theme.COLORS.LIGHT_100};

padding: 12px 24px;
cursor: pointer;
margin-bottom: 32px;

font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px; 

`