import { Link } from"react-router-dom"
import { useContext} from "react"
import { CartContext } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)
    let navigate = useNavigate()
    

    const handleCheckout = () => {
        navigate("/checkout") 
    }

    if(totalQuantity === 0) {
        return (
            <div>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">Productos</Link>
            </div>
        )
    }
        return (
        <div>
          <Container  className='Cart-frame-header'>          
          <Row>
            <Col>Producto</Col>              
            <Col>Cantidad</Col>
            <Col>Precio</Col>
            <Col>Subtotal</Col>
            <Col>Acción</Col>
          </Row>
        </Container>   
         
         
         { cart.map(p => <ItemCart key={p.id}{...p}/>) }
              

          <Container className='Cart-total'>          
          <Row>
            <Col>Total Compra:</Col>                         
            <Col>MXN$ {total}</Col>
            <Col><Button  variant="danger" size="sm" onClick={() => clearCart()}>Limpiar Carrito</Button></Col>
            <Col><Button  variant="primary" size="sm" onClick={handleCheckout}>Realizar CheckOut</Button></Col>              
          </Row>
          
        </Container>

             
                
            </div>
        )
    
}
export default Cart;