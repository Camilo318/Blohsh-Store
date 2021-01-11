import { Suspense, lazy } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Loader from "./components/Loader"

const ProductScreen = lazy(() => import("./containers/ProductScreen"))
const HomeScreen = lazy(() => import("./containers/HomeScreen"))

function App() {
  const spinner = <Loader />

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Suspense fallback={spinner}>
              <Route exact path='/' component={HomeScreen} />
              <Route exact path='/product/:id' component={ProductScreen} />
            </Suspense>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
