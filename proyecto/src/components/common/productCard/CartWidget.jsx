import { Badge, Button } from "@mui/material";
import { useContext } from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {  
  // Para cada contexto, una ejecucion
  const {getTotalItems} = useContext(CartContext)

  let total =  getTotalItems();
  return (
  <>
  <Link to = "/cart" className="h-25">
        <Badge badgeContent={total} color="cyan">
        <BiCart size={32} color="black"/>
        </Badge>  
  </Link>
  </>  
  )
}
