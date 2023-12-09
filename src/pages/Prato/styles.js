import styled from "styled-components";
export const Container = styled.div`
margin: auto;
width: 428px;

background: ${({ theme }) => theme.COLORS.DARK_400};
color: #fff;
position: relative;

main{
  margin-top: 1rem;
  text-align: center;
  height: 100vh;
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

}
.wrapperTags button{
  padding: 8px;
  border-radius: 5px;
  border: 0;
  background: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};  
}
}
`