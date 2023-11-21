import { Link } from "react-router-dom";
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id,nombre, img, descripcion, precio}) => {

    return (
   
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
        <Link to={`/item/${id}`}>Ver Detalle</Link>
      </Card.Body>
    </Card>
   
 
    )
}

export default Item;
