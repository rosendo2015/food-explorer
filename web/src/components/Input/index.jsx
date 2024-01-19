import { Container } from "./styles"
export function Input({ icon: Icon, title, ...rest }) {
  return (
    <Container >
      <label >{title}</label>
      <div className="wrapperInput">
        {Icon && <Icon size={24} />}
        <input
          
          type="text"
          {...rest}
        />
      </div>
    </Container>
  )
}