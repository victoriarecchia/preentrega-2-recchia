import { Button } from "@mui/material";
import "./ItemCount.css"
const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <>
      <div className="buttonContainer">
        <Button variant="outlined" color="success" onClick={subOne} disabled={counter === 1 ? true : false}>- </Button>
        <h4> {counter} </h4>
        <Button variant="outlined" color="success" onClick={addOne}> + </Button>  
        <Button  size="medium" variant="outlined" color="success" onClick={() => onAdd(counter)}>Agregar al carrito</Button>
      </div>
    </>
  );
};

export default ItemCount;
