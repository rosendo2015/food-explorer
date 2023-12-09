import { LinkTextStyle } from "./styles"

export function LinkText({ icon: Icon, title, ...rest }) {
  return (
    <LinkTextStyle
      {...rest}
    >
      {Icon && <Icon size={32} />}
      {title}
    </LinkTextStyle>
  )
}