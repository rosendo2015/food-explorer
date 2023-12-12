import { Container } from "./styles";
import { Header } from "../../components/Header"
import { LinkText } from "../../components/LinkText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import { FaUser } from "react-icons/fa6";


export function EditePrato() {
  return (
    <Container>
      <Header />
      <main>
        <LinkText icon={IoIosArrowBack} title="voltar" />
        <h2>Editar prato</h2>
        <Input icon={MdOutlineFileUpload} title="Imagem do prato" type="file" placeholder="Selecione imagem para alterá-la" />
        <Input title="Nome" placeholder="Ex.: Salada Ceasar" type="text" />
        <Input icon={IoIosArrowDown} title="Categoria" placeholder="Refeição" />

        <Input title="Ingredientes" />

        <Input title="Preço" placeholder="R$ 00,00" />
        <Textarea title="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
        <div className="wrapperButtons">
          <Button title="Excluir prato" />
          <Button title="Salvar alterações" />
        </div>
      </main>
      <Footer />
    </Container>
  )
}