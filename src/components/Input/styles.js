import styled from "styled-components";
export const Container = styled.div`

  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  margin-bottom: 32px;

label{
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

input{
  padding: 16px 16px;
  margin-top: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;
  
  &::placeholder{
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
}
`