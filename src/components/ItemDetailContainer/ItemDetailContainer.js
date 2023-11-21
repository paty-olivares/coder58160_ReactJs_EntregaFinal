import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
//import { getProductosbyId } from "../../asyncMocks"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
const [producto, setProducto] = useState(null)
const  {itemId} = useParams()

useEffect(() => {
    

    const productRef = doc(db, 'productos', itemId)
    getDoc(productRef)
        .then(documentSnapshot => {
            const fields = documentSnapshot.data()
            const productsAdapted = { id: documentSnapshot.id, ...fields}
            setProducto(productsAdapted)
        })
    // getProductosbyId(itemId)
    // .then(response => { 
    //     setProducto(response)
    // })
    // .catch(error => {
    //     console.error(error)
    // })
},[itemId])
    return (
        <div className='ItemCart'>
            <h1> Detalle de Producto </h1>
             <ItemDetail {...producto}/>
        </div>
    )
}
export default ItemDetailContainer;