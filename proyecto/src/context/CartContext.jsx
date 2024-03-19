import { createContext, useState } from "react"
import { products } from "../productsMock"

export const CartContext = createContext()

// El componente va a llevar el nombre del archivo junto a la palabra provider 
// Mi componente padre recibe los children por parametro
// Todas las funciones van a estar en el Cart Context Provider y se pueden disparar en cualquier lugar del programa
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    let existe = isInCart(product.id)
    if (existe) {
      let newArray = cart.map((element) => {
        if (element.id === product.id) {
          return {
            ...element,
            quantity: product.quantity
          }
        } else {
          return element;
        }
      });

      setCart(newArray)
      // Creo un arreglo con los productos agregados previamente al carrito, añadiendo el nuevo producto.
    } else {
      setCart([...cart, product])
    }
  }

  const cleanCart = () => {
    setCart([])
  }

  const isInCart = (id) => {
    let exists = cart.some((elemento) => elemento.id === id)
    return exists;
  }

  const deleteProduct = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray)
  } 

  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0)
    return total;
  }

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + (elemento.price * elemento.quantity);
    }, 0)
    return total;
  }

  const getTotalQuantityById = (id) => {
    let product = cart.find((elemento)=>elemento.id === id)
    if(product){
      return product.quantity;
    }else{
      return product
    }
  }

  let data = {
    cart,
    addToCart,
    cleanCart,
    deleteProduct,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById
  }

  // Todo lo que quiera que mis hijos tengan acceso, deben pasar por el objeto value
  return <CartContext.Provider value={data}>
    {children}
  </CartContext.Provider>
}

export default CartContextProvider  