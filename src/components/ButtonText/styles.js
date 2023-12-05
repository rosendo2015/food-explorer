import styled from "styled-components";

export const LinkText = styled.a`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

color: ${({ theme }) => theme.COLORS.LIGHT_100};
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 24px;
`