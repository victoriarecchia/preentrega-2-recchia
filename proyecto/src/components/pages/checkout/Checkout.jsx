import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Checkout = ({ envioFormulario, capturar, handleChange, handleSubmit, errors, orderId }) => {
  return (
    <>
      <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>

        {
          orderId ?
            <div>
              <h2> ¡Gracias! Tu numero de compra es: {orderId} </h2>
              <Link to ="/botines" className='addProducts'><Button>Seguir comprando</Button></Link>
            </div> : <form onSubmit={envioFormulario} style={
              { display: "flex", flexDirection: "column", width: "50%", gap: "20px" }
            }>

        <TextField id="outlined-basic" label="Nombre" variant="outlined" name='name'
          onChange={capturar}
          error={errors.name ? true : false}
          helperText={errors.name} />
        <TextField id="outlined-basic" label="Email" variant="outlined" name='email'
          onChange={capturar}
          error={errors.email ? true : false}
          helperText={errors.email} />
        <TextField id="outlined-basic" label="Phone" variant="outlined" name='phone'
          onChange={capturar}
          error={errors.phone ? true : false}
          helperText={errors.phone} />

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button type='submit' variant='contained' sx={{ width: "100%" }}>Enviar</Button>
        </Box>
      </form>
        }
    </div >
    </>
  )
} 
