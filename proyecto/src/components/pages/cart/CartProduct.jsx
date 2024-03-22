import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Button } from '@mui/material'

export const CartProduct = () => {

  const { cart, deleteProduct } = useContext(CartContext)

  return (
    <>
      {
        cart.map(product =>
          <div className='nameItems' key={product.id} >
            <img src={product.img} alt="" style={{ width: "130px", height: "130px" }} />
            <div className='nameItem'>
              <h4> {product.title}</h4>
              <h5> ${product.price}</h5>
              <h5> Unidades: {product.quantity}</h5>
            </div>
            <Button size='medium' color='info' onClick={() => deleteProduct(product.id)}>Eliminar</Button>
          </div>
        )
      }


    </>
  )
}
