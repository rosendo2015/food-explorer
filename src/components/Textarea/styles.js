import styled from "styled-components";
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 14px;
margin-bottom: 24px;
label{
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
}
textarea{
  width: 100%;
  height: 172px;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.DARK_800};
  border: 0;
  padding: 14px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  &:placeholder{
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
}
`