import { ProductCard } from "../../common/productCard/ProductCard"

export const ItemList = ({ products }) => {
    return (
        <>
            <div>
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </>
    )
}
