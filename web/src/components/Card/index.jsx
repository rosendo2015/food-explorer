import { Container } from "./styles";
import SaladaRavanello from "../../assets/pratos/SaladaRavanello.png"
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { PiPencilSimple } from "react-icons/pi";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "../Button"
export function Card() {
  return (
    <Container>
      <div className="card-user">
        <div className="favorite">
          <FaRegHeart size={24} />
        </div>
        <img src={SaladaRavanello} width={88} />
        <div className="description">
          <p>Salada Ravanello </p>
          <IoIosArrowForward size={14} />
        </div>
        <span>
          R$ 49,97
        </span>
        <div className="controlQtd">
          <FaMinus size={24} />
          <strong>01</strong>
          <FaPlus size={24} />
        </div>
        <Button title="incluir" />
      </div>

      <div className="card-auth">
        <div className="favorite">
          <PiPencilSimple size={24} />
        </div>
        <img src={SaladaRavanello} width={88} />
        <div className="description">
          <p>Salada Ravanello </p>
          <IoIosArrowForward size={14} />
        </div>
        <span>
          R$ 49,97
        </span>
      </div>

    </Container>
  )
}