import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Catalog } from './pages/catalog/Catalog'
import { Cart } from './pages/cart/Cart'
import { Card } from './pages/card/Card'
import { Navbar } from './components/CartDrawer/NavBar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/card/:name" component={Card} />
        <Route path="/catalog" component={Catalog} exact />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
