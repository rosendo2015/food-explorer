import { IoMdClose } from "react-icons/io";
import { Container } from "./styles"
export function Header() {
  return (
    <Container>
      <IoMdClose size={24} />
      <p>Menu</p>
    </Container>
  )
}