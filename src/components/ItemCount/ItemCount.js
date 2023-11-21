import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const agregarCart = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const removerCart = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

   return(
/*        <div>
            <div>
                <button onClick={agregarCart}>+</button>
                <button onClick={removerCart}>-</button>
                <h4>{quantity}</h4>
            </div>
            <div>
                <button onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>
       </div> */
         <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup aria-label="Third group">
                <Button onClick={agregarCart}> + </Button>
                <h2>{quantity}</h2>
                <Button onClick={removerCart}> - </Button>
            </ButtonGroup>           
            <Button  variant="success" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al Carrito</Button>
        </ButtonToolbar>
       
       
       
   ) 

}
export default ItemCount;
