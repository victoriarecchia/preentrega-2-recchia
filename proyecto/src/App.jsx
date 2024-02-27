import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./layout/Navbar/Navbar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { Cart } from "./pages/cart/Cart";
import { Home } from "./pages/Home/Home.";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";
import { Footer } from "./layout/Footer";
import { Layout } from "./layout/Layout";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/botines" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
