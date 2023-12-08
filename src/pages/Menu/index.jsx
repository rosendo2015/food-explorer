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
        <form>
          <Input icon={CiSearch} placeholder="Busque por pratos ou ingredientes" />
          <ButtonText title="Sair" />

        </form>
      </main>
      <Footer />
    </Container>
  )
}