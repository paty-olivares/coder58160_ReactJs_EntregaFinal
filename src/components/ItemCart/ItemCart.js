import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

 // import { useNavigate } from 'react-router-dom';

  import { useCart } from "../../context/CartContext";
  
  const ItemCart = ({ id, nombre, quantity, precio }) => {
    //const navigate = useNavigate()

    const { removeItem } = useCart()

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeItem(id)
    }

    return (
        
        <Container className='Cart-frame'>          
          <Row>
            <Col>{nombre}</Col>
            <Col>{quantity}</Col>
            <Col>{precio}</Col>
            <Col>MXN${precio * quantity}</Col>
            <Col><Button  variant="danger" size="sm" onClick={handleRemoveItem}>Remover</Button></Col>
          </Row>
        </Container>
        
      );
}

  export default ItemCart