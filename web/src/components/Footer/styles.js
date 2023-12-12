import styled from "styled-components";
export const Container = styled.div`
  width: 428px;
  height: 77px;
  position: fixed;
  background: ${({ theme }) => theme.COLORS.DARK_600};
  bottom: 0;  
  

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px;
div:nth-child(1){
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  }
div:nth-child(2){
  font-family: DM Sans;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  
}
div:nth-child(2) svg{
fill: #fff;
}
img{
  width: 22px;
  height: 18px;
}
strong{
  width: 100%;
  color: var(--light-light-700, #4D585E);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
p{
  width: 100%;
  color: var(--light-light-200, #FFFAF1);
  text-align: right;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

`