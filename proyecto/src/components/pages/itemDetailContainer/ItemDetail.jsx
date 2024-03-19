import { CardMedia, Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import "./ItemDetail.css"
import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer"


export const ItemDetail = ({ img, price, title, description, stock, onAdd, initial }) => {
return (
<>
    <div className="productContainerCard">
        <Card className="productCard" sx={{ maxWidth: 500 }}>
            <CardMedia className="imgProduct" component="img" image={img} />
            <CardContent className="productDesc">
                <Typography gutterBottom variant="h4">
                    {" "}
                    {title}
                </Typography>
                <Typography variant="h4" color="text.secondary">$
                    {price}
                </Typography>
                <ItemCountContainer
                    stock={stock}
                    onAdd={onAdd}
                    initial={initial} />
                {
                    initial && <h3>Ya tienes {initial} en el carrito</h3>
                }
                <Typography color="text.secondary" variant="h6">
                    {description}
                </Typography>

            </CardContent>
        </Card>
    </div>
</>
)
}
