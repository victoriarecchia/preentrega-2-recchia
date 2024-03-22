import { Button } from '@mui/material'
import {addDoc, collection} from 'firebase/firestore'
import { products } from './productsMock'
import { db } from './firebaseConfig'

export const AgregarDocs = () => {

  const cargarProductos = () => {
    let productsCollection = collection(db, "products")

    products.forEach((product)=>  {
      addDoc(productsCollection, product)
    } )
  }
  return (
    <>
    <Button onClick={cargarProductos}>Agregar documentos</Button>
    </>
  )
}
