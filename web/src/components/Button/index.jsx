import { ButtonStyle } from "./styles"
export function Button({ title, ...rest }) {
  return (
    <ButtonStyle
      {...rest}
    >
      {title}
    </ButtonStyle>
  )
} 