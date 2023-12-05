import styled from "styled-components";

export const ButtonStyle = styled.button`
width: 100%;
background: ${({ theme }) => theme.COLORS.TOMATO_100};

border-radius: 5px;
border: 0;
color: ${({ theme }) => theme.COLORS.LIGHT_100};

padding: 12px 32px;
cursor: pointer;
margin-bottom: 32px;
`