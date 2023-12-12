import { Container } from "./styles";

export function Session({ title, children }) {
  return (
    <Container>
      {title}
      <div className="content">

        {children}

      </div>
    </Container>
  )
}