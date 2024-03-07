import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./layout/Navbar/Navbar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { Cart } from "./pages/cart/Cart";
import { Home } from "./pages/Home/Home.";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { Layout } from "./layout/Layout";
import { CheckoutContainer } from "./pages/checkout/CheckoutContainer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/botines" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
