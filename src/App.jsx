import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Billie Eilish</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
