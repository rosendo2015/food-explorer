import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { Banner } from "../../components/Banner"
import { Session } from "../../components/Session"
import { Card } from "../../components/Card"
export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <main>
        <Session title="Refeições">
          <Card />
          <Card />
          <Card />
        </Session>
        <Session title="Pratos Principais">
          <Card />
          <Card />
        </Session>
        <Session title="Pratos Principais">
          <Card />
          <Card />
        </Session>
      </main>
      <Footer />
    </Container>
  )
}