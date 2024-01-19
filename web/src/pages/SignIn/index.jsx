import { Container } from "./styles"
import LogoExplorer from "../../assets/logoExplorer.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { LinkText } from "../../components/LinkText"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }
  return (
    <Container>
      <header>
        <img src={LogoExplorer} alt="logo" />
        <h1>food explorer</h1>
      </header>
      <form >
        <Input
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={e => setEmail(e.target.value)}
          name="name"
        />
        <Input
          title="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
          name="email"
        />
        <Button
          title="Entrar"
          onClick={handleSignIn}
        />
      </form>
      <footer>
        <LinkText href="/register" title="Criar uma conta" />
      </footer>
    </Container>
  )
}