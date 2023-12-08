import { Container } from "./styles"
import LogoExplorer from "../../assets/logoExplorer.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
export function SignIn() {
  return (
    <Container>
      <header>
        <img src={LogoExplorer} alt="logo" />
        <h1>food explorer</h1>
      </header>
      <form >
        <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input title="Senha" placeholder="No mínimo 6 caracteres" />
        <Button title="Entrar" />
      </form>
      <footer>
        <ButtonText title="Criar uma conta" />
      </footer>
    </Container>
  )
}