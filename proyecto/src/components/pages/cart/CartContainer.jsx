import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { CartProduct } from './CartProduct'
import Swal from 'sweetalert2'
import "./Cart.css"

export const CartContainer = () => {

  const { cleanCart, getTotalPrice, cart } = useContext(CartContext)

  let total = getTotalPrice();

  const clearWithAlert = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar carrito",
      denyButtonText: `No, volver`
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Sa!", "", "success");
        cleanCart()
      }
    });
  }

  return (
    <>
      {/* Creamos un componente de cada producto agregado al carrito */}
      <h1 className='productTitle'>PRODUCTOS</h1>
      {cart.length > 0 ? (
        <div className='container'>
          <div className='cartItem'>
            <CartProduct />
            <Button size='medium' variant='contained' onClick={clearWithAlert}>Limpiar carrito</Button>
          </div>

          <div className='buttons'>
            <h1>Resumen de compra</h1>
            <Link to="/checkout">
              <Button size='medium' variant="contained">Terminar compra</Button>
            </Link>
            <h3>Total a pagar: ${total} </h3>
          </div>

        </div>
      ) : (
        <div className='addProducts'>
        <Link to="/todos">
          <Button variant="contained">Agregar productos</Button>
        </Link>
        </div>
      )
      }
    </>
  )
}
