import { LinkText } from "./styles"

export function ButtonText({ title, ...rest }) {
  return (
    <LinkText
      {...rest}
    >
      {title}
    </LinkText>
  )
}