import { PropagateLoader } from "react-spinners"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { useEffect, useState } from "react"
import { db } from "../../../firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"

export const ItemListContainer = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        let productsCollection = collection(db, "products");

        let consulta = productsCollection;

        if (category) {
            let productsCollectionFiltered = query(
                productsCollection, 
                where("category", "==", category));
            consulta = productsCollectionFiltered
        }

        getDocs(consulta)
        .then(res => {
            let arrayDesencriptado = res.docs.map((elemento) => {
                return { ...elemento.data(), id: elemento.id };
            })
            setProducts(arrayDesencriptado)
        }).finally(() => setIsLoading(false))
    }, [category])

    // if con return temprano
    if (isLoading) {
        return <div className="loadContainer">
            <h3>Cargando botines</h3>
            <PropagateLoader color="#020f22" size="16px" margin="2" />
        </div>
    }

    return <>
        <ItemList products={products} />
    </>
}