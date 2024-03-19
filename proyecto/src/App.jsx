import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemDetailContainer, ItemListContainer } from "./components/pages";
import { Home } from "./components/pages/Home/Home.";
import { Layout } from "./components/layout";
import { CartContainer } from "./components/pages/cart";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/botines" element={<ItemListContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<CartContainer/>} />
              <Route path="/checkout" element={<CheckoutContainer/>} />
            </Route>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
