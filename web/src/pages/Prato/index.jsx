import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import SaladaRavanelo from "../../assets/pratos/SaladaRavanello.png"
import { FaMinus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { PiReceiptLight } from "react-icons/pi";

export function Prato() {
  return (
    <Container>
      <Header />
      <main>
        <div className="prato-user">
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
          <div className="qtdPedido">
            <div className="controlQtd">
              <FaMinus />
              <strong>01</strong>
              <GoPlus />
            </div>
            <button>
              <PiReceiptLight />
              <span>pedir</span>
              <span> . </span>
              <span>R$ 25,00</span>
            </button>
          </div>
        </div>
        <div className="prato-auth">
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
          <Button title="Editar pedido" />
        </div>
      </main>
      <Footer />
    </Container>
  )
}