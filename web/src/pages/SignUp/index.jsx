import { Container } from "./styles"
import LogoExplorer from "../../assets/logoExplorer.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { LinkText } from "../../components/LinkText"
export function SignUp() {
  return (
    <Container>
      <header>
        <img src={LogoExplorer} alt="logo" />
        <h1>food explorer</h1>
      </header>
      <form >
        <Input title="Seu nome" placeholder="Exemplo: Maria Silva" />
        <Input title="Email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        <Input title="Senha" placeholder="No mínimo 6 caracteres" />
        <Button title="Criar conta" />
      </form>
      <footer>
        <LinkText href="/" title="Já tenho uma conta" />
      </footer>
    </Container>
  )
}