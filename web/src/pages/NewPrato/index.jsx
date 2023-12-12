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


export function NewPrato() {
  return (
    <Container>
      <Header />
      <main>
        <LinkText icon={IoIosArrowBack} title="voltar" />
        <h2>Novo prato</h2>
        <Input icon={MdOutlineFileUpload} title="Imagem do prato" type="file" />
        <Input icon={FaUser} title="Nome" placeholder="Ex.: Salada Ceasar" type="text" />
        <Input icon={IoIosArrowDown} title="Categoria" placeholder="Refeição" />

        <Input title="Ingredientes" />

        <Input title="Preço" placeholder="R$ 00,00" />
        <Textarea title="Descrição" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
        <Button title="Salvar alterações" />
      </main>
      <Footer />
    </Container>
  )
}