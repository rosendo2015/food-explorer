import { IoClose } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import logoExplorer from "../../assets/logoExplorer.svg"
import { PiReceiptLight } from "react-icons/pi";
import { Container } from "./styles"
export function Header() {
  return (
    <Container>
      <div className="headerOpen">
        <IoClose size={24} />
        <p>Menu</p>
      </div>
      <div className="header-user">
        <div className="headerClosed">
          <IoMenuSharp size={24} />
          <div className="wrapperLogo">
            <img src={logoExplorer} width={24} />
            <h2>food explorer</h2>
          </div>
          <div className="wrapperReceipt">
            <span>0</span>
            <PiReceiptLight size={32} />
          </div>
        </div>
      </div>
      <div className="header-auth">
        <div className="headerClosed">
          <IoMenuSharp size={24} />
          <div className="wrapperLogo">
            <img src={logoExplorer} width={24} />
            <h2>food explorer</h2>
            <h5>admin</h5>
          </div>
          <div></div>
        </div>
      </div>
    </Container>
  )
}