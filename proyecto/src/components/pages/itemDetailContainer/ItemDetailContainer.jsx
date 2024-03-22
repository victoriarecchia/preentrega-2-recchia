import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { CartContext } from "../../../context/CartContext"
import "./ItemDetail.css"
import { db } from "../../../firebaseConfig"
import { collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { PropagateLoader } from "react-spinners"

export const ItemDetailContainer = () => {
    const { id } = useParams()

    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const { addToCart, getTotalQuantityById } = useContext(CartContext);


    let initial = getTotalQuantityById(id)
    
    useEffect(() => {
        let productsCollection = collection(db, "products")
        let refDoc = doc(productsCollection, id)
        getDoc(refDoc).then(res => {
            setItem({...res.data(), id: res.id})
        }).finally(()=> setIsLoading(false))

    }, [id])

    const onAdd = (cantidad) => {
        // A infoProducto le añado la informacion del item agregandole la propiedad quantity.
        let infoProducto = {
            ...item,
            quantity: cantidad
        }
        addToCart(infoProducto)
    }
    
    if (isLoading) {
        return <div className="loadContainer">
            <h3>Cargando botines</h3>
            <PropagateLoader color="#020f22" size="16px" margin="2" />
        </div>
    }
    return (
        <>
                (<ItemDetail onAdd={onAdd} {...item} initial = {initial}/>)
        </>
    )
}
