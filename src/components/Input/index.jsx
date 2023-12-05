import { Container } from "./styles"
export function Input({ title, ...rest }) {
  return (
    <Container >
      <label>{title}</label>
      <input
        type="text"
        {...rest}
      />
    </Container>
  )
}