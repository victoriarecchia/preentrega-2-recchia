
import { getProducts, products } from "../../productsMock"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { useEffect, useState } from "react"

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

    return <>
        {isLoading ?
            <div className="loadContainer">
                <h2 className="loadTitle">
                    Cargando botines...{" "}
                    <img
                        src="https://res.cloudinary.com/db2jmqror/image/upload/v1708993061/WhatsApp_Image_2024-02-07_at_12.01.21_1_fwmx0x.jpg"
                        alt="" className="logo"
                    />{" "}
                </h2>
            </div>
            : (
                <ItemList products={products} />
            )}

    </>
}