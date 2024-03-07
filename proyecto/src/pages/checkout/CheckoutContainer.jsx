import React, { useState } from 'react'
import { Checkout } from './Checkout';

export const CheckoutContainer = () => {

  const [userInfo, setUserInfo] = useState({
    name:"",
    lastName: ""
  })

  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  
  const envioFormulario = (event) => {
    event.preventDefault();
    console.log("Se envio el formulario");
    console.log(userInfo);
  } 
  
  const capturarNombre = (event) => {
    setName(event.target.value);
  }
  
  const capturarApellido = (event) => {
    setLastName(event.target.value);

  }
  return (
    <>
    <Checkout envioFormulario={envioFormulario} capturarNombre={capturarNombre} capturarApellido={capturarApellido}/>
    </>
  )
}
