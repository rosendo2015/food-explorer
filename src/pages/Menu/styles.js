import styled from "styled-components";
export const Container = styled.div`
margin: auto;
max-width: 428px;
height: 100vh;
background: ${({ theme }) => theme.COLORS.DARK_400};
position: relative;
main{
  padding: 36px 28px 13.57px;

}
form{  
  padding: 13.57px;
}
form.user-auth{
  display: none;
}
`