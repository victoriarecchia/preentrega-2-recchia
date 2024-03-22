import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from "@mui/material"
import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ img, price, title, id }) => {
    return <>
        <Box sx={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            <Card className="productCard">
                <CardMedia className="imgProductCard" component="img"  image={img} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center" }}> {title}</Typography>
                    <Typography variant="body2" color="text.secondary" style={{ textAlign: "center", fontSize: "18px" }}>${price}</Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/item/${id}`}>
                        <Button size="small">Más detalles</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    </>;
};
