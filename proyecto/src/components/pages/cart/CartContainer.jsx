import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { CartProduct } from './CartProduct'

export const CartContainer = () => {

  const { cleanCart, getTotalPrice} = useContext(CartContext)

  let total = getTotalPrice();

  return (
    <>
      {/* Creamos un componente de cada producto agregado al carrito */}
      <CartProduct />
      <h2>Total a pagar: {total} </h2>
      <Button size='large' onClick={cleanCart}>Limpiar carrito</Button>
      <Link to="/checkout">
        <Button variant="contained" >Terminar compra</Button>
      </Link>
    </>
  )
}
