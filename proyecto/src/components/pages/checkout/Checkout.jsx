import React from 'react'

export const Checkout = ({envioFormulario, capturar}) => {
  return (
    <>
    <h1>Checkout</h1>
    <form onSubmit={envioFormulario}>
      <input type="text" placeholder="Ingresa tu nombre" name="name" id="" onChange={capturar}/>
      <input type="text" placeholder="Ingresa tu apelido" name="lastname" id="" onChange={capturar} />
      {/* Por defecto es de tipo submit */}
      <button type='submit'>Enviar</button>

    </form>
    </>
  )
} 
