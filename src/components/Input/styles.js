import styled from "styled-components";
export const Container = styled.div`

  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  margin-bottom: 32px;
  .wrapperInput{
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;
  padding: 0 14px;
}
label{
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
}

input{
  background: transparent;
  padding: 12px 0;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;
  
  &::placeholder{
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
}
`