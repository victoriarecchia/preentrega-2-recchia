
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Button } from '@mui/material'

export const CartProduct = () => {

  const {cart, deleteProduct} = useContext(CartContext)

  return (
    <> 
      {
        cart.map(product=>
        <div key={product.id} style={{border:"solid 2px black", fontFamily:"initial"}}> 
          <h2> Nombre: {product.title}</h2>
          <h2> Precio: {product.price}</h2>
          <h2> Cantidad: {product.quantity}</h2>
          <Button size='large' onClick={()=>deleteProduct(product.id)}>Eliminar</Button>
        </div>
          )
        }


    </>
  )
}
