import styled from "styled-components";
export const Container = styled.div`
margin: auto;
width: 428px;

background: ${({ theme }) => theme.COLORS.DARK_400};
color: #fff;
position: relative;
overflow: auto;
main{  
  padding: 1rem 0 4rem 0;
  margin: 1rem;
  text-align: center;
  
  margin: 16px 56px 33.5px;
  img{
    margin: 1rem auto;
  }
h2{
  color: var(--light-light-300, #E1E1E6);
  font-family: Poppins;
  font-size: 27.041px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 37.858px */
}
p{
  margin: 24px auto;
  color: var(--light-light-300, #E1E1E6);
  text-align: center;
  font-family: Poppins;
  font-size: 16.225px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.715px */
}
.wrapperTags{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
  margin-bottom: 24px;
  
}
.wrapperTags button{
  padding: 8px;
  border-radius: 5px;
  border: 0;
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;  
}
.qtdPedido{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 48px 0 0;
  gap: 1rem;
}
.controlQtd{
  display: flex;
  align-items: center;
  gap: 15.85px;
}
.qtdPedido svg{
  width: 27.152px;
  height: 27.152px;
  flex-shrink: 0;
  cursor: pointer;
}
.qtdPedido strong{
  color: var(--light-light-300, #E1E1E6);
  font-family: Roboto;
  font-size: 22.626px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 36.202px */
}
.qtdPedido button{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16.22px;
  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 5px;
  border: 0;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  cursor: pointer;
  
  text-align: center;
  
  font-size: 9.464px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.225px; /* 171.429% */
}
}
.prato-user{
  display: block;
}
.prato-auth{
  display: none;
}
`