import { Box, Button, TextField } from '@mui/material'
import {useFormik} from 'formik'
import { Navigate } from 'react-router-dom'
import * as Yup from 'yup'

export const FormFormik = () => {
  // Anterior forma de programarlo 
  // const [user, setUser] = useState({
  //   usuario: "",
  //   email: "",
  //   contraseña: "", 
  //   confirmarContraseña: ""
  // })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }
  // const handleChange = (e) => {
  //   setUser({...user, [e.target.name]: e.target.value})
  // }

  const {handleSubmit, handleChange, errors} = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      contraseña: "",
      confirmarContraseña: ""
    },
    onSubmit: ()=>{
      <Navigate to="/botines"/>
        },
    validationSchema: Yup.object({
      nombre: Yup. string()
      .required("Campo requerido")
      .min(5, "Debe tener al menos 5 letras"),

      email: Yup.string()
      .email()
      .required("Campo requerido"),

      contraseña: Yup.string()
      .required("Campo requerido")
      .min(6, "Debe tener al menos 6 caracteres")
      .max(15, "Debe tener como máximo 15 caracteres")
      .matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,"Debe tener al menos  una mayúscula" ),

      confirmarContraseña: Yup.string()
      .required("Campo requerido")
      .oneOf([Yup.ref("contraseña")], "Las contraseñas no coinciden")
    }),
    validateOnChange: false
  })


  return (
    <>
      <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
        <form  onSubmit={handleSubmit} style={
          { display: "flex", flexDirection: "column", width: "50%", gap: "20px" }
        }>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" name='nombre' 
          onChange={handleChange} 
          error = {errors.nombre ? true : false} 
          helperText = {errors.nombre}/>

          <TextField id="outlined-basic" label="Email" variant="outlined" name='email' 
          onChange={handleChange}  
          error = {errors.email ? true : false}  
          helperText = {errors.email}/>

          <TextField id="outlined-basic" type="password" label="Contraseña" name='contraseña' variant="outlined"  
          onChange={handleChange} 
          error={errors.contraseña ? true : false}
          helperText={errors.contraseña}
          />
          <TextField id="outlined-basic" type='password' label="Confirma contraseña" name='confirmarContraseña'
          variant="outlined" 
          onChange={handleChange}  
          error = {errors.contraseña ? true : false} 
          helperText = {errors.confirmarContraseña}/>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Button type='submit' variant='contained' sx={{ width: "100%" }}>Enviar</Button>
          </Box>
        </form>
      </div>
    </>
  )
}
