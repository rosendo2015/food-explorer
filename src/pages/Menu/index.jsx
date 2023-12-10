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
        <form className="user">
          <Input icon={CiSearch} placeholder="Busque por pratos ou ingredientes" />
          <ButtonText title="Sair" />
        </form>
        <form className="user-auth">
          <Input icon={CiSearch} placeholder="Busque por pratos ou ingredientes" />
          <ButtonText title="Novo prato" />
          <ButtonText title="Sair" />
        </form>
      </main>
      <Footer />
    </Container>
  )
}