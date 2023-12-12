import { Container } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { CiSearch } from "react-icons/ci";
import { Footer } from "../../components/Footer";
export function Menu() {
  return (
    <Container>
      <Header />
      <main>
        <ul className="user-comum">
          <Input icon={CiSearch} placeholder="Busque por pratos ou ingredientes" />
          <ButtonText title="Sair" />
        </ul>
        <ul className="user-admin">
          <Input icon={CiSearch} placeholder="Busque por pratos ou ingredientes" />
          <ButtonText title="Novo prato" />
          <ButtonText title="Sair" />
        </ul>
      </main>
      <Footer />
    </Container>
  )
}