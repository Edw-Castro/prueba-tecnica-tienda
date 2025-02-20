import {  useState } from 'react'
import {products as initialProducts} from "./mocks/products.json"
import {Products} from "./components/Products.jsx"
import { Header } from './components/Header.jsx'
// import {Footer} from './components/Footer.jsx'

// import {IS_DEVELOPMENT} from './config/config.js'
import { useFilters } from './hooks/useFilters.jsx'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App() {
  const [products] = useState(initialProducts)
  const {filterProducts}  = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
    <CartProvider>

      <Header />
      <Cart />
      <Products products={filteredProducts}></Products>
      {/* {IS_DEVELOPMENT &&<Footer filters={filters}/>} */}
    </CartProvider>
      
    </>
  )
}

export default App
