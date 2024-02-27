import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { getProduct } from "../../productsMock"

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getProduct(id).then((resp) => {
            setItem(resp)
            setIsLoading(false)
        })
    }, [id])
    
    const onAdd = (cantidad) => {
        let infoProducto = {
            ...item,
            quantity: cantidad  
        }
        console.log(infoProducto);
        navigate("/cart")
    }
    return (
        <>
            {isLoading ?
                <div className="loadContainer">
                    <h2 className="loadTitle"> 
                        Cargando producto...{" "}             
                        <img
                            src="https://res.cloudinary.com/db2jmqror/image/upload/v1708993061/WhatsApp_Image_2024-02-07_at_12.01.21_1_fwmx0x.jpg"
                            alt="" className="logo"
                        />{" "}
                    </h2>   
                </div>
                : (
                    <ItemDetail onAdd = {onAdd} {...item} />
                )}
        </>
    )
}
