import { useContext, useState } from 'react'
import { Checkout } from './Checkout';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { CartContext } from '../../../context/CartContext';
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db } from '../../../firebaseConfig';

export const CheckoutContainer = () => {

  const { cart, getTotalPrice, cleanCart } = useContext(CartContext)
  let totalPrice = getTotalPrice()

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: () => {
      envioFormulario()
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Campo requerido")
        .min(5, "Debe tener al menos 5 letras"),
      email: Yup.string()
        .email()
        .required("Campo requerido"),

      phone: Yup.number()
        .required("Campo requerido")
    }),
    validateOnChange: false
  })

  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: ""
  })

  const [orderId, setOrderId] = useState(null)

  const envioFormulario = (event) => {
    // El metodo prevent Default evita que se recargue la pagina cuando enviamos el formulario
    event.preventDefault();
    let order = {
      buyer: userInfo,
      items: cart,
      total: totalPrice
    }
    // Si no existe la coleccion en la base de datos, se crea automaticamente
    let ordersCollection = collection(db, "orders")
    // Guardo el objeto order en ordersCollection
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id))

    cart.forEach(product => {

      let refDoc = doc(db, "products", product.id)

      updateDoc(refDoc, { stock: product.stock - product.quantity })
    });

    cleanCart()
  }

  const capturar = (event) => {
    // Usamos los corchetes cuando la propiedad es un string
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value })
  }

  return (
    <>
      <Checkout envioFormulario={envioFormulario}
        capturar={capturar}
        handleSubmit={handleSubmit}
        orderId={orderId}
        errors={errors} />
    </>

  )
}
