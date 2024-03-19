import React, { useState } from 'react'
import { Checkout } from './Checkout';

export const CheckoutContainer = () => {

  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: ""
  })
  
  // console.log(userInfo);
  const envioFormulario = (event) => {
    // El metodo prevent Default evita que se recargue la pagina cuando enviamos el formulario
    event.preventDefault();
    // Manipulo lo que quiero hacer con los datos del formulario
    // console.log("Se envio el formulario");
  }

  const capturar = (event) => {
    // Usamos los corchetes cuando la propiedad es un string
    setUserInfo({...userInfo, [event.target.name]: event.target.value})
  }

  return (
    <>
      <Checkout envioFormulario={envioFormulario} 
      // capturarNombre={capturarNombre} 
      // capturarApellido={capturarApellido}
      capturar = {capturar} />
    </>

  )
}
