import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ img, price, title, id }) => {
    return <>
    <div className = "productContainerCard">
        <Card className = "productCard" sx={{ maxWidth: 320 }}>
            <CardMedia className="imgProductCard" component="img" height="300"image ={img}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{fontSize:"20px", textAlign: "center"}}> {title}</Typography>
                <Typography variant="body2" color="text.secondary" style={{textAlign: "center", fontSize: "18px"}}>{price}</Typography>
            </CardContent>
            <CardActions>
                <Link to ={`/item/${id}`}> 
                <Button size="small">Más detalles</Button>
                </Link>
            </CardActions>
        </Card>
    
    </div>
    </>;
};
