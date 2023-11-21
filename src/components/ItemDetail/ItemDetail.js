import ItemCount from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
const ItemDetail =({id, nombre, img, descripcion, precio, stock}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    
    const item = {
       id, nombre, precio
    }
    addItem(item, quantity)

  }
    return(

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>
      {descripcion}
      </Card.Text>
      <Card.Text>
       Precio: MXN$ {precio}
      </Card.Text>
      <Card.Text>
       Stock: {stock}
      </Card.Text>
      { 
        quantityAdded > 0 ? (
         <Link to='/cart'>Terminar compra</Link>
      ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      )
     }
    </Card.Body>
  </Card>



   )
}
export default ItemDetail