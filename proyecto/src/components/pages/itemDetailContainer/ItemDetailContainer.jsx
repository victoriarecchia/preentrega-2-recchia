import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { getProduct } from "../../../productsMock"
import { CartContext } from "../../../context/CartContext"
import "./ItemDetail.css"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const { addToCart, getTotalQuantityById } = useContext(CartContext);

    let initial = getTotalQuantityById(id)
    console.log(initial);

    useEffect(() => {
        getProduct(id)
            .then((resp) => {
                setItem(resp)
                setIsLoading(false)
            })
    }, [id])

    const onAdd = (cantidad) => {
        // A infoProducto le añado la informacion del item agregandole la propiedad quantity.
        let infoProducto = {
            ...item,
            quantity: cantidad
        }
        addToCart(infoProducto)
    }

    return (
        <>
            {isLoading ? <div className="loadContainer">
                <h2 className="loadTitle"> Cargando producto...{" "}
                    <img src="https://res.cloudinary.com/db2jmqror/image/upload/v1708993061/WhatsApp_Image_2024-02-07_at_12.01.21_1_fwmx0x.jpg" alt="" className="logo"
                    />{" "}
                </h2> </div> : (<ItemDetail onAdd={onAdd} {...item} initial = {initial}/>)}
        </>
    )
}
