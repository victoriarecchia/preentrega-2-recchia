import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { CartProduct } from './CartProduct'
import Swal from 'sweetalert2'

export const CartContainer = () => {

  const { cleanCart, getTotalPrice } = useContext(CartContext)

  let total = getTotalPrice();

  const clearWithAlert =() => {
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
      } else if (result.isDenied) {
        // Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <>
      {/* Creamos un componente de cada producto agregado al carrito */}
      <CartProduct />
      <h2>Total a pagar: {total} </h2>
      
      <Button size='large' onClick={clearWithAlert}>Limpiar carrito</Button>
      <Link to="/checkout">
      <Button variant="contained">Terminar compra</Button>

      </Link>
    </>
  )
}
