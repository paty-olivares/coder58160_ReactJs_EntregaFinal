import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"


const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    let navigate = useNavigate()

    const createOrder = async (e) => {
        try {
            e.preventDefault();
          
          
            console.log('Datos del Formulario:', { nombre, telefono, email });
    
            setLoading(true)

            const objOrder = {
                comprador: {
                    name: nombre,                    
                    phone: telefono,
                    email: email
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'productos'), where(documentId(),'in',ids))    
    
    
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }
            })
            console.log('Viendo stock'+outOfStock.length)
            if(outOfStock.length === 0) {
                const ordersRef = collection(db, 'ordenes')    
                const { id } = await addDoc(ordersRef, objOrder)
                batch.commit()
               
                setOrderId(id)
                clearCart()
                
                console.log(`El id de su orden es ${id}`)            
    


            } else {
                console.log('No hay stock de algun producto')
                navigate("/") 
            }


        } catch (error) {
            console.error('Hubo un error generando la orden')
        } finally {
            setLoading(false)
        }
    }
    
    if(loading) {

          return( 
            
            <Alert variant="danger">
            <Alert.Heading>Tu orden está siendo procesada, favor espera un momento.</Alert.Heading>
            </Alert>               
        )

    }
    if(orderId) {
        setTimeout(() => {
            console.log('timing--2')            
           }, 100000000000000);

       
        return( 
        <div>
            <Alert variant="success">
            <Alert.Heading>Gracias por tu compra!!!</Alert.Heading>
            <p>
            Agradecemos tu preferencia, este es tu número de Orden: {orderId}
            </p>
            <hr />
            <p className="mb-0">
             Para cualquier consulta o duda escribir a <a href='mailto:contacto@croqueteando.com.mx'>contacto@croqueteando.com.mx</a>
            </p>
            <Link to='/'>Seguir Comprando</Link>
            </Alert>               
        </div>
        )  
    } 

  return (
    

    <div className="d-flex justify-content-around">
      <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src="http://rockmastercoder.com/img/checkout.png" />        
        <Card.Body>
          <Card.Title>Check out -  Gracias por Adquirir Nuestros Productos</Card.Title>
          <Card.Text>          
          </Card.Text>
         
                <form onSubmit={createOrder} > 
                <InputGroup className="mb-3">
                    <InputGroup.Text id="nombre" >Nombre</InputGroup.Text>
                    <Form.Control value={nombre} onChange={(e) => setNombre(e.target.value)} 
                    placeholder="Ejemplo: Patricia Olivares"
                    aria-label="Escriba su Nombre:"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="telefono" >Teléfono</InputGroup.Text>
                    <Form.Control value={telefono}  onChange={(e) => setTelefono(e.target.value)} 
                    placeholder="Ejemplo: 5577668822"
                    aria-label="Escriba su Número Telefónico:"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="email" >Email</InputGroup.Text>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Ejemplo: ejemplo@micorreo.com"
                    aria-label="Escriba su Email:"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button variant="success"  type="submit">Procesar Orden</Button>{' '}        
                </form>        
        </Card.Body>
      </Card>    
    </div>

    
  );
};

export default Checkout;