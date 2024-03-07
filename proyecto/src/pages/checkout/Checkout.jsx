import React from 'react'

export const Checkout = ({envioFormulario, capturarNombre, capturarApellido}) => {
  return (
    <>
    <h1>Checkout</h1>
    <form onSubmit={envioFormulario}>
      <input type="text" placeholder="Ingresa tu nombre" name="" id="" onChange={capturarNombre}/>
      <input type="text" placeholder="Ingresa tu apelido" name="" id="" onChange={capturarApellido} />
      {/* Por defecto es de tipo submit */}
      <button type='submit'>Enviar</button>

    </form>
    </>
  )
} 
