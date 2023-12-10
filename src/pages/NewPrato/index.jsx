import { Container } from "./styles";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { LinkText } from "../../components/LinkText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export function NewPrato() {
  return (
    <Container>
      <Header />
      <form>
        <LinkText icon={IoIosArrowBack} title="voltar" />
        <h2>Novo prato</h2>
        <Input icon={MdOutlineFileUpload} title="Imagem do prato" type="file" />
        <Input title="Nome" type="text" placeholder="Ex.: Salada Ceasar" />
        <Input title="Categoria" />
        <Input placeholder="Refeição" title="Ingredientes" />
        <Input placeholder="R$ 00,00" title="Preço" />

        <Button title="Salvar alterações" />
      </form>
      <Footer />
    </Container>
  )
}