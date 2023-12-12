import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  font-family: "Roboto", sans - serif;
}
body{
  background: ${({ theme }) => theme.COLORS.DARK_1000};
}

a, button{
  font-family: 'Poppins', sans-serif;
}
`;
