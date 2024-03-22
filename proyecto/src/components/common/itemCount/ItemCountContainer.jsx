import { useState } from "react";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'

export const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {

  const [counter, setCounter] = useState(initial);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire({
        title: 'MAXIMO',
        icon: 'warning',
        text: 'No hay mas unidades en stock',
        confirmButtonText: 'Volver'
      })  
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  };

  return <ItemCount counter={counter} addOne={addOne} subOne={subOne} onAdd={onAdd}/>;
};

