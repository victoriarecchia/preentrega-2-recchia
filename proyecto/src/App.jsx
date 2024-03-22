import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout";
import CartContextProvider from "./context/CartContext";
import { routes } from "./router/Routes";
import { AppRouter } from "./router/AppRouter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter/>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
