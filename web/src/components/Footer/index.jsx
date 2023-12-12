import { Container } from "./styles";
import logoExplorerGray from "../../assets/logoExplorerGray.svg"
import { FaRegCopyright } from "react-icons/fa";
export function Footer() {
  return (
    <Container>
      <div>
        <img src={logoExplorerGray} />
        <strong>food explorer</strong>
      </div>
      <div>
        <FaRegCopyright />
        <p>2023 - Todos os direitos reservados</p>
      </div>
    </Container>
  )
}