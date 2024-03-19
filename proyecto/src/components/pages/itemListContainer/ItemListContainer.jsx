import {PacmanLoader, PropagateLoader} from "react-spinners"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { useEffect, useState } from "react"
import { getProduct, getProducts } from "../../../productsMock"

export const ItemListContainer = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getProducts().then((resp) => {
            // Verifico si existe una categoria:
            if (category) {
                const productsFilter = resp.filter((product) => product.category === category)
                //Guardamos los productos filtrados por categoria en nuestro state products
                setProducts(productsFilter)
            } else {
                // Si no tenemos una categoria almacenamos todos los productos.
                setProducts(resp)
            }
            setIsLoading(false)
        })
    }, [category])

    // if con return temprano
    if (isLoading) {
        return   <div className="loadContainer">
            {/* <h2 className="loadTitle"> */}
                {/* Cargando botines... */}
            <PropagateLoader  color="#020f22" size= "16" margin="2"/>
                {/* <img src="https://res.cloudinary.com/db2jmqror/image/upload/v1708993061/WhatsApp_Image_2024-02-07_at_12.01.21_1_fwmx0x.jpg" className="logo" /> */}
            {/* </h2> */}
        </div>
    }

    return <>
        <ItemList products={products} />
    </>
}