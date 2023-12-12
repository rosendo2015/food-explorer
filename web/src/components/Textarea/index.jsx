import { Container } from "./styles";

export function Textarea({ title, ...rest }) {
  return (
    <Container>
      <label htmlFor="">{title}</label>
      <textarea {...rest}></textarea>
    </Container>
  )
}