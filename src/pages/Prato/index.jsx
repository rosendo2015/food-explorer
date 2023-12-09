import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Container } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import SaladaRavanelo from "../../assets/pratos/SaladaRavanello.png"
import { FaMinus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { PiReceiptLight } from "react-icons/pi";
import { FaRegFutbol } from "react-icons/fa";

export function Prato() {
  return (
    <Container>
      <Header />
      <main>
        <ButtonText icon={IoIosArrowBack} title="voltar" />
        <img src={SaladaRavanelo} width={264} />
        <h2>Salada Ravanello</h2>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </p>
        <div className="wrapperTags">
          <button>alface</button>
          <button>cebola</button>
          <button>pão naan</button>
          <button>pepino</button>
          <button>rabanete</button>
          <button>tomate</button>
        </div>
        <div>
          <FaMinus />
          <span>01</span>
          <GoPlus />
          <button>
            <PiReceiptLight />
            <span>pedir</span>
            <FaRegFutbol />
            <span>R$ 25,00</span>
          </button>
        </div>
      </main>
      <Footer />
    </Container>
  )
}