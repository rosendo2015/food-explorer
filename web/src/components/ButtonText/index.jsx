import { ButtonTextStyle } from "./styles"

export function ButtonText({ icon: Icon, title, ...rest }) {
  return (
    <ButtonTextStyle
      {...rest}
    >
      {Icon && <Icon size={32} />}
      {title}
    </ButtonTextStyle>
  )
}