import { ItemDetailContainer, ItemListContainer } from "../components/pages";
import { Home } from "../components/pages/Home/Home.";
import { CartContainer } from "../components/pages/cart";
import { Checkout } from "../components/pages/checkout/Checkout";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";

export const routes = [
  {
    id: "home",
    path: "/", 
    Element: Home
  },
  {
    id: "botines",
    path: "/botines", 
    Element: ItemListContainer
  },
  {
    id: "category",
    path: "/category/:category", 
    Element: ItemListContainer
  },
  {
    id:"details",
    path: "/item/:id", 
    Element: ItemDetailContainer
  },
  {
    id:"cart",
    path: "/cart", 
    Element: CartContainer
  },
  {
    id: "checkout",
    path: "/checkout", 
    Element: CheckoutContainer
  }
]